-- CreateTable
CREATE TABLE "Images" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "nameArchive" TEXT NOT NULL DEFAULT 'Arquivo',

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);
