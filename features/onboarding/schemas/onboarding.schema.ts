import { z } from "zod";

export const onboardingSchema = z.object({
  college: z.string().min(1, "College is required"),
  program: z.string().min(1, "Program is required"),
  specialization: z.string().min(1, "Specialization is required"),
  totalSemesters: z.coerce.number().int().min(1).max(20),
  currentSemester: z.coerce.number().int().min(1).max(20),
}).refine(data => data.currentSemester <= data.totalSemesters, {
  message: "Current semester cannot be greater than total semesters",
  path: ["currentSemester"],
});
