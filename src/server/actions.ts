import { createServerFn } from '@tanstack/react-start';
import { db } from '../db';
import { leads } from '../db/schema';
import { z } from 'zod';

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function isRateLimited(email: string) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes window
  const limit = 5; // max 5 submissions per window per email

  let record = rateLimitMap.get(email);
  if (!record) {
    record = { count: 1, lastReset: now };
    rateLimitMap.set(email, record);
    return false;
  }

  if (now - record.lastReset > windowMs) {
    record.count = 1;
    record.lastReset = now;
    return false;
  }

  if (record.count >= limit) {
    return true;
  }

  record.count++;
  return false;
}

export const saveLead = createServerFn({ method: 'POST' })
  .validator((data: {
    name: string;
    email: string;
    phone?: string;
    leadType: 'contact' | 'investor' | 'newsletter';
    message?: string;
  }) => {
    return z.object({
      name: z.string().min(1, 'Nama wajib diisi'),
      email: z.string().email('Format email tidak valid'),
      phone: z.string().optional(),
      leadType: z.enum(['contact', 'investor', 'newsletter']),
      message: z.string().optional(),
    }).parse(data);
  })
  .handler(async (ctx) => {
    try {
      if (isRateLimited(ctx.data.email)) {
        return { success: false, error: 'Terlalu banyak permintaan. Silakan coba lagi nanti (Rate Limited).' };
      }

      await db.insert(leads).values({
        name: ctx.data.name,
        email: ctx.data.email,
        phone: ctx.data.phone || null,
        leadType: ctx.data.leadType,
        message: ctx.data.message || null,
      });

      // TODO: Kirim notifikasi email via Resend/Nodemailer ke tim internal
      // if (ctx.data.leadType === 'contact') {
      //   await sendEmailNotification(ctx.data);
      // }

      return { success: true };
    } catch (error) {
      console.error('Failed to save lead:', error);
      return { success: false, error: 'Gagal menyimpan data ke sistem.' };
    }
  });
