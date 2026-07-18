"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createAcademicProgram(formData: FormData) {
    // Get logged-in Clerk user
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    // Find corresponding Prisma user
    const user = await prisma.user.findUnique({
        where: {
            clerkId: userId,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    // Read form data
    const college = formData.get("college") as string;
    const program = formData.get("program") as string;
    const specialization = formData.get("specialization") as string;
    const totalSemesters = Number(formData.get("totalSemesters"));
    const currentSemester = Number(formData.get("currentSemester"));

    // Create Academic Program
    const academicProgram = await prisma.academicProgram.create({
        data: {
            name: program,
            specialization,
            college,
            totalSemesters,
            userId: user.id,
        },
    });

    // Generate semesters
    const semesters = Array.from(
        { length: totalSemesters },
        (_, index) => ({
            name: `Semester ${index + 1}`,
            number: index + 1,
            academicYear: null,

            // Temporary dates
            startDate: new Date(),
            endDate: new Date(),

            isActive: index + 1 === currentSemester,

            programId: academicProgram.id,
        })
    );

    // Save all semesters
    await prisma.semester.createMany({
        data: semesters,
    });

    console.log("✅ Academic Program Created:", academicProgram);
    console.log("✅ Semesters Created:", semesters.length);

    redirect("/dashboard");
}