/*
  Warnings:

  - You are about to drop the column `board` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `writer` on the `articles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `articles` DROP COLUMN `board`,
    DROP COLUMN `writer`,
    ADD COLUMN `board_id` VARCHAR(191) NULL,
    ADD COLUMN `writer_id` VARCHAR(191) NULL;
