"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { onboardingService } from "@/features/onboarding";

export async function createAcademicProgram(formData: FormData) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const data = {
        college: formData.get("college") as string,
        program: formData.get("program") as string,
        specialization: formData.get("specialization") as string,
        totalSemesters: Number(formData.get("totalSemesters")),
        currentSemester: Number(formData.get("currentSemester")),
    };

    await onboardingService.createAcademicProfile(userId, data);

    redirect("/dashboard");
}