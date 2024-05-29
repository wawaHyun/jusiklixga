/*
  Warnings:

  - You are about to drop the `IArticle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users2` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `IArticle`;

-- DropTable
DROP TABLE `Users2`;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `job` VARCHAR(191) NULL,
    `modDate` VARCHAR(191) NULL,
    `regDate` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `articles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `content` VARCHAR(191) NULL,
    `writer` VARCHAR(191) NULL,
    `board` VARCHAR(191) NULL,
    `modDate` VARCHAR(191) NULL,
    `regDate` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
