import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s'-]+$/, { message: "Name contains invalid characters" }),
  
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .toLowerCase(),
  
  phone: z.string()
    .trim()
    .regex(/^[\d\s+()-]+$/, { message: "Invalid phone number format" })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .optional()
    .or(z.literal('')),
  
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be less than 2000 characters" })
});

// Newsletter subscription validation schema
export const newsletterSchema = z.object({
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .toLowerCase()
});

// Profile update validation schema
export const profileUpdateSchema = z.object({
  displayName: z.string()
    .trim()
    .min(2, { message: "Display name must be at least 2 characters" })
    .max(50, { message: "Display name must be less than 50 characters" })
    .optional(),
  
  bio: z.string()
    .trim()
    .max(500, { message: "Bio must be less than 500 characters" })
    .optional()
});

// Sanitize HTML input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Encode for URL parameters
export const encodeForUrl = (input: string): string => {
  return encodeURIComponent(input.trim());
};

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type ProfileUpdateData = z.infer<typeof profileUpdateSchema>;
