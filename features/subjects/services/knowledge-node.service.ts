import { z } from "zod";
import { knowledgeNodeRepository } from "../repositories/knowledge-node.repository";
import { knowledgeNodeCreateSchema, knowledgeNodeUpdateSchema } from "../schemas/knowledge-node.schema";
import { AppError } from "@/lib/errors";

export class KnowledgeNodeService {
  async getSubjectHierarchy(subjectId: string) {
    if (!subjectId) {
      throw new AppError("Subject ID is required", "VALIDATION_ERROR", 400);
    }
    return knowledgeNodeRepository.getHierarchy(subjectId);
  }

  async getSubjectNodes(subjectId: string) {
    if (!subjectId) {
      throw new AppError("Subject ID is required", "VALIDATION_ERROR", 400);
    }
    return knowledgeNodeRepository.findBySubjectId(subjectId);
  }

  async createNode(data: z.infer<typeof knowledgeNodeCreateSchema>) {
    const validatedData = knowledgeNodeCreateSchema.parse(data);
    return knowledgeNodeRepository.create(validatedData);
  }

  async updateNode(id: string, data: z.infer<typeof knowledgeNodeUpdateSchema>) {
    const validatedData = knowledgeNodeUpdateSchema.parse(data);
    return knowledgeNodeRepository.update(id, validatedData);
  }

  async deleteNode(id: string) {
    return knowledgeNodeRepository.delete(id);
  }
}

export const knowledgeNodeService = new KnowledgeNodeService();
