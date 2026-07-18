import { z } from "zod";

const clientSchema = z.object({
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
});

const parsed = clientSchema.safeParse({
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
});

if (!parsed.success) {
    console.error("Invalid client environment variables", parsed.error.format());
    throw new Error("Invalid client environment variables");
}

export const envClient = parsed.data;
