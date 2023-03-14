/*
  Warnings:

  - You are about to drop the column `contact_name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "contact_name",
ADD COLUMN     "name" TEXT,
ALTER COLUMN "business_name" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "business_state" DROP NOT NULL,
ALTER COLUMN "business_street" DROP NOT NULL,
ALTER COLUMN "business_zip" DROP NOT NULL,
ALTER COLUMN "phone_number" DROP NOT NULL;
