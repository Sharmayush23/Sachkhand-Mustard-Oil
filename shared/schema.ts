import { z } from "zod";

// ── Product ──────────────────────────────────────────────────────────────────

export const insertProductSchema = z.object({
  name: z.string(),
  category: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  gaugeRange: z.string().optional().nullable(),
  material: z.string().optional().nullable(),
  coating: z.string().optional().nullable(),
  application: z.string().optional().nullable(),
  badge: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = InsertProduct & { id: string };

// ── Timeline Event ────────────────────────────────────────────────────────────

export const insertTimelineEventSchema = z.object({
  year: z.number().int(),
  title: z.string(),
  description: z.string(),
});

export type InsertTimelineEvent = z.infer<typeof insertTimelineEventSchema>;
export type TimelineEvent = InsertTimelineEvent & { id: string };

// ── Contact Inquiry ───────────────────────────────────────────────────────────

export const insertContactInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = InsertContactInquiry & {
  id: string;
  createdAt: Date | null;
};

// ── User ─────────────────────────────────────────────────────────────────────

export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = InsertUser & { id: string };

