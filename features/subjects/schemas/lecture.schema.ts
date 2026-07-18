import { z } from "zod";
import { LectureStatus } from "@prisma/client";

export const lectureCreateSchema = z.object({
  title: z.string().min(1, "Title is required"),
  date: z.coerce.date(),
  subjectId: z.string().cuid("Invalid subject ID"),
  knowledgeNodeId: z.string().cuid("Invalid knowledge node ID").optional().nullable(),
  status: z.nativeEnum(LectureStatus).default(LectureStatus.SCHEDULED),
});

export const lectureUpdateSchema = lectureCreateSchema.partial();
