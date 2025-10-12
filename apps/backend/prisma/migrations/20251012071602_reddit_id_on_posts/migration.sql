/*
  Warnings:

  - A unique constraint covering the columns `[redditId]` on the table `Posts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `redditId` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Posts" ADD COLUMN     "redditId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Posts_redditId_key" ON "public"."Posts"("redditId");
