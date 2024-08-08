/*
  Warnings:

  - You are about to drop the column `dvr` on the `Clients` table. All the data in the column will be lost.
  - Added the required column `client` to the `DVRs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Clients" DROP CONSTRAINT "Clients_id_fkey";

-- AlterTable
ALTER TABLE "Clients" DROP COLUMN "dvr";

-- AlterTable
ALTER TABLE "DVRs" ADD COLUMN     "client" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "DVRs" ADD CONSTRAINT "DVRs_id_fkey" FOREIGN KEY ("id") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
