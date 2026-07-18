import { auth } from "@clerk/nextjs/server";
import { UnauthorizedError } from "../errors";

export async function getCurrentUserId(): Promise<string | null> {
    const { userId } = await auth();
    return userId;
}

export async function requireUserId(): Promise<string> {
    const userId = await getCurrentUserId();
    if (!userId) {
        throw new UnauthorizedError("You must be logged in.");
    }
    return userId;
}
