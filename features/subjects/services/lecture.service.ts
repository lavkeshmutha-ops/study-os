import { z } from "zod";
import { lectureRepository } from "../repositories/lecture.repository";
import { lectureCreateSchema, lectureUpdateSchema } from "../schemas/lecture.schema";
import { AppError } from "@/lib/errors";

export class LectureService {
  async getSubjectLectures(subjectId: string) {
    if (!subjectId) {
      throw new AppError("Subject ID is required", "VALIDATION_ERROR", 400);
    }
    return lectureRepository.findBySubjectId(subjectId);
  }

  async createLecture(data: z.infer<typeof lectureCreateSchema>) {
    const validatedData = lectureCreateSchema.parse(data);
    return lectureRepository.create(validatedData);
  }

  async updateLecture(id: string, data: z.infer<typeof lectureUpdateSchema>) {
    const validatedData = lectureUpdateSchema.parse(data);
    return lectureRepository.update(id, validatedData);
  }

  async deleteLecture(id: string) {
    return lectureRepository.delete(id);
  }
}

export const lectureService = new LectureService();
