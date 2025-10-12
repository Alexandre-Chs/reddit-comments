/*
  Warnings:

  - You are about to drop the column `author` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Posts` table. All the data in the column will be lost.
  - Made the column `text` on table `Posts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Posts" DROP COLUMN "author",
DROP COLUMN "title",
ALTER COLUMN "text" SET NOT NULL;
