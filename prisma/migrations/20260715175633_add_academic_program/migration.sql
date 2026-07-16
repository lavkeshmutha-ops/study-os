/*
  Warnings:

  - You are about to drop the column `userId` on the `Semester` table. All the data in the column will be lost.
  - Added the required column `programId` to the `Semester` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Semester" DROP CONSTRAINT "Semester_userId_fkey";

-- AlterTable
ALTER TABLE "Semester" DROP COLUMN "userId",
ADD COLUMN     "programId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AcademicProgram" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specialization" TEXT,
    "college" TEXT,
    "totalSemesters" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AcademicProgram_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_programId_fkey" FOREIGN KEY ("programId") REFERENCES "AcademicProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcademicProgram" ADD CONSTRAINT "AcademicProgram_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
