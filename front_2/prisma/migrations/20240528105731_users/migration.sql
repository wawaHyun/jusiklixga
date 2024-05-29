/*
  Warnings:

  - You are about to drop the column `job` on the `users` table. All the data in the column will be lost.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `job`,
    ADD COLUMN `age` VARCHAR(191) NULL,
    ADD COLUMN `asset` VARCHAR(191) NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `investment_propensity` VARCHAR(191) NULL,
    ADD COLUMN `mbti` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NOT NULL;
