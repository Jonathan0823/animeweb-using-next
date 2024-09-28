/*
  Warnings:

  - You are about to drop the column `title` on the `collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `title`,
    ADD COLUMN `anime_title` VARCHAR(191) NULL;
