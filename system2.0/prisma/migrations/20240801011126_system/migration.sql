-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "dvr" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DVRs" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "cams_installed" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "cloud" TEXT NOT NULL,
    "service_port" TEXT NOT NULL,
    "http_port" TEXT NOT NULL,
    "ddns" TEXT NOT NULL,
    "hd" TEXT NOT NULL,
    "recording_days" TEXT NOT NULL,

    CONSTRAINT "DVRs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_id_fkey" FOREIGN KEY ("id") REFERENCES "DVRs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
