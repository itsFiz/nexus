import { z } from 'zod';

export const applicationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  location: z.string().min(1, "Location is required"),
  position: z.string().min(1, "Position is required"),
  department: z.string().min(1, "Department is required"),
  cvUrl: z.string().url("Invalid CV URL"),
  portfolioUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  linkedinUrl: z.string().url().optional(),
  personalWebsite: z.string().url().optional(),
  coverLetter: z.string().min(1, "Cover letter is required"),
});

export type ApplicationSubmission = z.infer<typeof applicationSchema>;