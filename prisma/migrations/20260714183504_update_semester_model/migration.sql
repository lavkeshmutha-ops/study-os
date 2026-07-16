/*
  Warnings:

  - Added the required column `number` to the `Semester` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Semester" ADD COLUMN     "academicYear" TEXT,
ADD COLUMN     "number" INTEGER NOT NULL;
