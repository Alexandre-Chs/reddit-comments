/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."StatusComments" AS ENUM ('PENDING', 'DONE');

-- CreateEnum
CREATE TYPE "public"."StatusKeywords" AS ENUM ('ACTIVE', 'INACTIVE');

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Teams" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UsersTeams" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsersTeams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Keywords" (
    "id" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Keywords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TeamsKeywords" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "keywordId" TEXT NOT NULL,
    "statut" "public"."StatusKeywords" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeamsKeywords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Comments" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Notes" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TeamsComments" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "noteId" TEXT,
    "statut" "public"."StatusComments" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "TeamsComments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "public"."Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Keywords_keyword_key" ON "public"."Keywords"("keyword");

-- CreateIndex
CREATE UNIQUE INDEX "TeamsKeywords_teamId_keywordId_key" ON "public"."TeamsKeywords"("teamId", "keywordId");

-- CreateIndex
CREATE UNIQUE INDEX "TeamsComments_teamId_commentId_key" ON "public"."TeamsComments"("teamId", "commentId");

-- AddForeignKey
ALTER TABLE "public"."UsersTeams" ADD CONSTRAINT "UsersTeams_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UsersTeams" ADD CONSTRAINT "UsersTeams_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamsKeywords" ADD CONSTRAINT "TeamsKeywords_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamsKeywords" ADD CONSTRAINT "TeamsKeywords_keywordId_fkey" FOREIGN KEY ("keywordId") REFERENCES "public"."Keywords"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Notes" ADD CONSTRAINT "Notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamsComments" ADD CONSTRAINT "TeamsComments_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "public"."Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamsComments" ADD CONSTRAINT "TeamsComments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "public"."Comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeamsComments" ADD CONSTRAINT "TeamsComments_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "public"."Notes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
