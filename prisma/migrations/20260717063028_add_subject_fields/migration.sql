-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_semesterId_fkey";

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "credits" INTEGER,
ADD COLUMN     "instructor" TEXT,
ADD COLUMN     "isElective" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE CASCADE ON UPDATE CASCADE;
