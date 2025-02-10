import { z } from 'zod';

export const evolutionSchema = z.object({
  structure: z.string().min(1, 'Structure is required'),
  valuation: z.string().min(1, 'Valuation is required'),
  funding: z.string().optional(),
  status: z.string().min(1, 'Status is required'),
  teamTotal: z.number().min(0, 'Team total must be positive'),
  teamBreakdown: z.any(), // Define specific structure later
  keyHires: z.array(z.string()),
  revenueTarget: z.string().min(1, 'Revenue target is required'),
  revenueBreakdown: z.any(),
  burnRate: z.string(),
  runway: z.string(),
  ventures: z.any(),
  subsidiaries: z.any(),
  equity: z.any(),
  milestones: z.array(z.string()),
  risks: z.array(z.string())
}); 