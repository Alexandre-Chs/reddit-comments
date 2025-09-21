/*
  Warnings:

  - A unique constraint covering the columns `[noteId]` on the table `TeamsComments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TeamsComments_noteId_key" ON "public"."TeamsComments"("noteId");
