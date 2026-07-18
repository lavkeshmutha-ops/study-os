"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSubject(formData: FormData) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const user = await prisma.user.findUnique({
        where: {
            clerkId: userId,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    const activeSemester = await prisma.semester.findFirst({
        where: {
            isActive: true,
            program: {
                userId: user.id,
            },
        },
    });

    if (!activeSemester) {
        throw new Error("No active semester found");
    }

    const name = (formData.get("name") as string)?.trim();

    const code = (formData.get("code") as string)?.trim() || null;
    const description =
        (formData.get("description") as string)?.trim() || null;
    const color = (formData.get("color") as string)?.trim() || null;

    const creditsValue = formData.get("credits");

    const credits =
        creditsValue && creditsValue.toString().trim() !== ""
            ? Number(creditsValue)
            : null;

    const instructor =
        (formData.get("instructor") as string)?.trim() || null;

    const isElective = formData.get("isElective") === "on";

    if (!name) {
        throw new Error("Subject name is required");
    }

    await prisma.subject.create({
        data: {
            name,
            code,
            description,
            color,
            credits,
            instructor,
            isElective,
            semesterId: activeSemester.id,
        },
    });

    revalidatePath("/subjects");
    revalidatePath("/dashboard");
}

export async function getSubjects() {
    const { userId } = await auth();

    if (!userId) {
        return [];
    }

    const user = await prisma.user.findUnique({
        where: {
            clerkId: userId,
        },
    });

    if (!user) {
        return [];
    }

    const activeSemester = await prisma.semester.findFirst({
        where: {
            isActive: true,
            program: {
                userId: user.id,
            },
        },
    });

    if (!activeSemester) {
        return [];
    }

    return prisma.subject.findMany({
        where: {
            semesterId: activeSemester.id,
        },
        orderBy: {
            createdAt: "asc",
        },
    });
}

export async function getSubjectById(subjectId: string) {
    return prisma.subject.findUnique({
        where: {
            id: subjectId,
        },
    });
}

export async function deleteSubject(subjectId: string) {
    await prisma.subject.delete({
        where: {
            id: subjectId,
        },
    });

    revalidatePath("/subjects");
    revalidatePath("/dashboard");
}