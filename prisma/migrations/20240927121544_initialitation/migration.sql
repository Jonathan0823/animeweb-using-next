-- CreateTable
CREATE TABLE `Collection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mal_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Collection_user_email_mal_id_key`(`user_email`, `mal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
