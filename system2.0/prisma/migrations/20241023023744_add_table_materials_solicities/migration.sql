/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "AccountUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dvrID" TEXT NOT NULL,

    CONSTRAINT "AccountUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dvr" (
    "id" TEXT NOT NULL,
    "name_Client" TEXT NOT NULL DEFAULT 'name_Client',
    "description" TEXT NOT NULL DEFAULT 'Descricao/Localizacao DVR',
    "model" TEXT NOT NULL DEFAULT 'modelo',
    "cams_installed" TEXT NOT NULL DEFAULT 'cameras instaladas',
    "user" TEXT NOT NULL DEFAULT 'usuario',
    "password" TEXT NOT NULL DEFAULT 'senha',
    "ip" TEXT NOT NULL DEFAULT 'ip',
    "cloud" TEXT NOT NULL DEFAULT 'cloud',
    "service_port" TEXT NOT NULL DEFAULT 'porta servico',
    "http_port" TEXT NOT NULL DEFAULT 'porta http',
    "ddns" TEXT NOT NULL DEFAULT 'ddns',
    "hd" TEXT NOT NULL DEFAULT 'Tamanho HD',
    "recording_days" TEXT NOT NULL DEFAULT 'Dias de gravacao',

    CONSTRAINT "Dvr_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solicities" (
    "id" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "cod_solicity" SERIAL NOT NULL,
    "solicity_type" TEXT NOT NULL DEFAULT 'Orçamento',
    "solicity" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Solicities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Materials" (
    "id" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Materials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccountUser_email_key" ON "AccountUser"("email");

-- AddForeignKey
ALTER TABLE "AccountUser" ADD CONSTRAINT "AccountUser_dvrID_fkey" FOREIGN KEY ("dvrID") REFERENCES "Dvr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
