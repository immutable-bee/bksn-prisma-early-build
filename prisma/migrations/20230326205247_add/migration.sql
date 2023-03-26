-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('NEW_USER', 'APPROVED_USER', 'SUBSCRIBED_USER', 'ADMIN');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "onboardingComplete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'NEW_USER';
