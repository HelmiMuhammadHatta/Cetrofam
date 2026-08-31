import { createServerFn } from '@tanstack/react-start';
import { db } from '../db';
import { leads } from '../db/schema';
import { z } from 'zod';

export const saveLead = createServerFn({ method: 'POST' })
  .validator((data: {
    name: string;
    email: string;
    phone?: string;
    leadType: 'contact' | 'investor' | 'newsletter';
    message?: string;
  }) => {
    return z.object({
      name: z.string().min(1),
      email: z.string().email(),
      phone: z.string().optional(),
      leadType: z.enum(['contact', 'investor', 'newsletter']),
      message: z.string().optional(),
    }).parse(data);
  })
  .handler(async (ctx) => {
    try {
      await db.insert(leads).values({
        name: ctx.data.name,
        email: ctx.data.email,
        phone: ctx.data.phone || null,
        leadType: ctx.data.leadType,
        message: ctx.data.message || null,
      });
      return { success: true };
    } catch (error) {
      console.error('Failed to save lead:', error);
      return { success: false, error: 'Failed to save to database' };
    }
  });
