import { createServerFn } from '@tanstack/react-start';
import { db } from '../db';
import { contactSubmissions, investorLeads, newsletterSubscribers } from '../db/schema';
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

export const submitContact = createServerFn({ method: 'POST' })
  .validator((data: { name: string; email: string; phone?: string; message: string }) => {
    return z.object({
      name: z.string().min(1, 'Nama wajib diisi'),
      email: z.string().email('Format email tidak valid'),
      phone: z.string().optional(),
      message: z.string().min(5, 'Pesan terlalu singkat'),
    }).parse(data);
  })
  .handler(async (ctx) => {
    try {
      if (isRateLimited(ctx.data.email)) {
        return { success: false, error: 'Terlalu banyak permintaan. Silakan coba lagi nanti.' };
      }
      await db.insert(contactSubmissions).values({
        name: ctx.data.name,
        email: ctx.data.email,
        phone: ctx.data.phone || null,
        message: ctx.data.message,
      });
      return { success: true };
    } catch (error) {
      console.error('Failed to submit contact:', error);
      return { success: false, error: 'Gagal mengirim pesan.' };
    }
  });

export const submitInvestor = createServerFn({ method: 'POST' })
  .validator((data: { name: string; email: string; company?: string; message: string }) => {
    return z.object({
      name: z.string().min(1, 'Nama wajib diisi'),
      email: z.string().email('Format email tidak valid'),
      company: z.string().optional(),
      message: z.string().min(5, 'Pesan terlalu singkat'),
    }).parse(data);
  })
  .handler(async (ctx) => {
    try {
      if (isRateLimited(ctx.data.email)) {
        return { success: false, error: 'Terlalu banyak permintaan. Silakan coba lagi nanti.' };
      }
      await db.insert(investorLeads).values({
        name: ctx.data.name,
        email: ctx.data.email,
        company: ctx.data.company || null,
        message: ctx.data.message,
      });
      return { success: true };
    } catch (error) {
      console.error('Failed to submit investor inquiry:', error);
      return { success: false, error: 'Gagal mengirim inquiry.' };
    }
  });

export const submitNewsletter = createServerFn({ method: 'POST' })
  .validator((data: { email: string }) => {
    return z.object({
      email: z.string().email('Format email tidak valid'),
    }).parse(data);
  })
  .handler(async (ctx) => {
    try {
      if (isRateLimited(ctx.data.email)) {
        return { success: false, error: 'Terlalu banyak permintaan.' };
      }
      // Upsert/Ignore conflict if email already exists
      await db.insert(newsletterSubscribers)
        .values({ email: ctx.data.email })
        .onConflictDoNothing(); // Postgres specific
      return { success: true };
    } catch (error) {
      console.error('Failed to subscribe:', error);
      return { success: false, error: 'Gagal berlangganan newsletter.' };
    }
  });
