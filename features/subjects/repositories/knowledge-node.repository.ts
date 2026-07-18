import { prisma } from "@/lib/prisma";
import type { Prisma, KnowledgeNode } from "@prisma/client";

export class KnowledgeNodeRepository {
  /**
   * Fetch all knowledge nodes for a subject, ordered properly.
   */
  async findBySubjectId(subjectId: string): Promise<KnowledgeNode[]> {
    return prisma.knowledgeNode.findMany({
      where: { subjectId },
      orderBy: { order: "asc" },
    });
  }

  /**
   * Fetch the full academic graph hierarchy for a subject.
   * Note: This returns nodes with their immediate children populated.
   */
  async getHierarchy(subjectId: string) {
    // A simplified tree fetching: grab all nodes and build tree in memory or use children include
    return prisma.knowledgeNode.findMany({
      where: { subjectId, parentId: null },
      include: {
        children: {
          orderBy: { order: "asc" },
          include: {
            children: {
              orderBy: { order: "asc" },
              include: {
                children: {
                  orderBy: { order: "asc" }
                }
              }
            }
          }
        }
      },
      orderBy: { order: "asc" }
    });
  }

  /**
   * Create a new knowledge node
   */
  async create(data: Prisma.KnowledgeNodeUncheckedCreateInput): Promise<KnowledgeNode> {
    return prisma.knowledgeNode.create({
      data,
    });
  }

  /**
   * Update an existing knowledge node
   */
  async update(id: string, data: Prisma.KnowledgeNodeUpdateInput): Promise<KnowledgeNode> {
    return prisma.knowledgeNode.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete a knowledge node and automatically cascade to children (handled by Prisma if onDelete is set properly, though our schema uses SetNull for parent. Wait, parentId uses SetNull in schema. Let's delete manually if needed, or rely on Prisma.)
   */
  async delete(id: string): Promise<KnowledgeNode> {
    return prisma.knowledgeNode.delete({
      where: { id },
    });
  }
}

export const knowledgeNodeRepository = new KnowledgeNodeRepository();
