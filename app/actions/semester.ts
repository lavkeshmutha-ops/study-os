"use server";

import { prisma } from "@/lib/prisma";

export async function getCurrentSemester(userId: string) {
    return prisma.semester.findFirst({
        where: {
            isActive: true,
            program: {
                userId,
            },
        },
        include: {
            subjects: true,
        },
    });
}

export async function getSemesters(userId: string) {
    return prisma.semester.findMany({
        where: {
            program: {
                userId,
            },
        },
        orderBy: {
            number: "asc",
        },
    });
}

export async function setCurrentSemester(
    semesterId: string,
    userId: string
) {
    await prisma.semester.updateMany({
        where: {
            program: {
                userId,
            },
        },
        data: {
            isActive: false,
        },
    });

    await prisma.semester.update({
        where: {
            id: semesterId,
        },
        data: {
            isActive: true,
        },
    });
}