/*
  Warnings:

  - You are about to drop the column `modDate` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `regDate` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `modDate` on the `boards` table. All the data in the column will be lost.
  - You are about to drop the column `regDate` on the `boards` table. All the data in the column will be lost.
  - You are about to drop the column `modDate` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `regDate` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `articles` DROP COLUMN `modDate`,
    DROP COLUMN `regDate`,
    ADD COLUMN `mod_date` VARCHAR(191) NULL,
    ADD COLUMN `reg_date` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `boards` DROP COLUMN `modDate`,
    DROP COLUMN `regDate`,
    ADD COLUMN `mod_date` VARCHAR(191) NULL,
    ADD COLUMN `reg_date` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `modDate`,
    DROP COLUMN `regDate`,
    ADD COLUMN `mod_date` VARCHAR(191) NULL,
    ADD COLUMN `reg_date` VARCHAR(191) NULL;
