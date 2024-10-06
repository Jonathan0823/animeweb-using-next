-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "mal_id" INTEGER NOT NULL,
    "user_email" TEXT NOT NULL,
    "images" TEXT,
    "anime_title" TEXT,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "mal_id" INTEGER NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_user_email_mal_id_key" ON "Collection"("user_email", "mal_id");
