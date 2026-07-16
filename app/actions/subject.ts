"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSubject(
    name: string,
    examDate?: string
) {
    await prisma.subject.create({
        data: {
            name,
            examDate: examDate
                ? new Date(examDate)
                : null,
        },
    });

    revalidatePath("/subjects");
}