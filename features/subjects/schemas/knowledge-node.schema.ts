import { z } from "zod";
import { NodeType } from "@prisma/client";

export const knowledgeNodeCreateSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().optional(),
  nodeType: z.nativeEnum(NodeType),
  order: z.number().int().default(0),
  subjectId: z.string().cuid("Invalid subject ID"),
  parentId: z.string().cuid("Invalid parent ID").optional().nullable(),
});

export const knowledgeNodeUpdateSchema = knowledgeNodeCreateSchema.partial();
