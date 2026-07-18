import "server-only";
import { z } from "zod";

const serverSchema = z.object({
    DATABASE_URL: z.string().min(1),
    DIRECT_URL: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
    CLERK_WEBHOOK_SIGNING_SECRET: z.string().min(1),
});

const parsed = serverSchema.safeParse(process.env);

if (!parsed.success) {
    console.error("Invalid server environment variables", parsed.error.format());
    throw new Error("Invalid server environment variables");
}

export const envServer = parsed.data;
