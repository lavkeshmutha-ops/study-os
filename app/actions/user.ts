"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function syncUser() {
    console.log("🚀 syncUser started");

    const authData = await auth();

    console.log("AUTH DATA:", authData);

    const { userId } = authData;
    console.log("UserId:", userId);

    if (!userId) {
        console.log("❌ No user");
        return null;
    }

    const clerkUser = await currentUser();

    console.log("Clerk User:", clerkUser?.fullName);

    if (!clerkUser) {
        console.log("❌ No Clerk User");
        return null;
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            clerkId: userId,
        },
    });

    console.log("Existing User:", existingUser);

    if (existingUser) {
        console.log("✅ User already exists");
        return existingUser;
    }

    console.log("Creating user...");

    const user = await prisma.user.create({
        data: {
            clerkId: userId,
            fullName:
                clerkUser.fullName ??
                `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim(),
            email: clerkUser.emailAddresses[0].emailAddress,
            imageUrl: clerkUser.imageUrl,
        },
    });

    console.log("✅ Created:", user);

    return user;
}