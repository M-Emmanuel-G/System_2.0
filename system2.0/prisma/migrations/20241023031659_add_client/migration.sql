/*
  Warnings:

  - Added the required column `clientID` to the `Dvr` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AccountUser" DROP CONSTRAINT "AccountUser_dvrID_fkey";

-- AlterTable
ALTER TABLE "Dvr" ADD COLUMN     "clientID" TEXT NOT NULL,
ALTER COLUMN "name_Client" SET DEFAULT 'Nome do cliente';

-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dvr" ADD CONSTRAINT "Dvr_clientID_fkey" FOREIGN KEY ("clientID") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
