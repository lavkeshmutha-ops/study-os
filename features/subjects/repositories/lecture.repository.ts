import { prisma } from "@/lib/prisma";
import type { Prisma, Lecture } from "@prisma/client";

export class LectureRepository {
  /**
   * Fetch all lectures for a subject
   */
  async findBySubjectId(subjectId: string): Promise<Lecture[]> {
    return prisma.lecture.findMany({
      where: { subjectId },
      orderBy: { date: "asc" },
    });
  }

  /**
   * Create a new lecture
   */
  async create(data: Prisma.LectureUncheckedCreateInput): Promise<Lecture> {
    return prisma.lecture.create({
      data,
    });
  }

  /**
   * Update an existing lecture
   */
  async update(id: string, data: Prisma.LectureUpdateInput): Promise<Lecture> {
    return prisma.lecture.update({
      where: { id },
      data,
    });
  }

  /**
   * Delete a lecture
   */
  async delete(id: string): Promise<Lecture> {
    return prisma.lecture.delete({
      where: { id },
    });
  }
}

export const lectureRepository = new LectureRepository();
