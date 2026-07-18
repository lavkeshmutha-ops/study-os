import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { onboardingSchema } from "../schemas/onboarding.schema";
import { AppError } from "@/lib/errors";

export class OnboardingService {
  /**
   * Sets up the initial academic profile for a user
   */
  async createAcademicProfile(userId: string, data: z.infer<typeof onboardingSchema>) {
    if (!userId) {
      throw new AppError("User ID is required", "VALIDATION_ERROR", 400);
    }

    const validated = onboardingSchema.parse(data);

    // Verify user exists in DB
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      throw new AppError("User not found in database", "NOT_FOUND", 404);
    }

    return await prisma.$transaction(async (tx) => {
      // Create Academic Program
      const academicProgram = await tx.academicProgram.create({
        data: {
          name: validated.program,
          specialization: validated.specialization,
          college: validated.college,
          totalSemesters: validated.totalSemesters,
          userId: user.id,
        },
      });

      // Generate semesters
      const semesters = Array.from({ length: validated.totalSemesters }, (_, index) => ({
        name: `Semester ${index + 1}`,
        number: index + 1,
        // Temporary dates for now
        startDate: new Date(),
        endDate: new Date(),
        isActive: index + 1 === validated.currentSemester,
        programId: academicProgram.id,
      }));

      await tx.semester.createMany({
        data: semesters,
      });

      return academicProgram;
    });
  }
}

export const onboardingService = new OnboardingService();
