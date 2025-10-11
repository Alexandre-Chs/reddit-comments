/*
  Warnings:

  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeamsComments` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."StatusPosts" AS ENUM ('PENDING', 'DONE');

-- DropForeignKey
ALTER TABLE "public"."TeamsComments" DROP CONSTRAINT "TeamsComments_commentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TeamsComments" DROP CONSTRAINT "TeamsComments_noteId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TeamsComments" DROP CONSTRAINT "TeamsComments_teamId_fkey";

-- DropTable
DROP TABLE "public"."Comments";

-- DropTable
DROP TABLE "public"."TeamsComments";

-- DropEnum
DROP TYPE "public"."StatusComments";

-- CreateTable
CREATE TABLE "public"."Posts" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT,
    "subreddit" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TeamsPosts" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "noteId" TEXT,
    "statut" "public"."StatusPosts" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "TeamsPosts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Posts_url_key" ON "public"."Posts"("url");

-- CreateIndex
CREATE UNIQUE INDEX "TeamsPosts_noteId_key" ON "public"."TeamsPosts"("noteId");

-- CreateIndex
CREATE UNIQUE INDEX "TeamsPosts_teamId_postId_key" ON "public"."TeamsPosts"("teamId", "postId");

-- AddForeignKey
ALTER TABLE "public"."TeamsPosts" ADD CONSTRAINT "TeamsPosts_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamsPosts" ADD CONSTRAINT "TeamsPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamsPosts" ADD CONSTRAINT "TeamsPosts_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "public"."Notes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
