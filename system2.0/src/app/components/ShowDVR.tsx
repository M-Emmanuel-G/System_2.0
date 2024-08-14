"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { DvrsProps } from "../Data/register";
import { ChevronRight } from "lucide-react";
import UpdateDVR from "./EditInfos";


export default function ShowDVR(dvr:DvrsProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-80 text-black text-xl bg-orange-500 rounded-xl p-4 flex my-2 items-center justify-between">{dvr.client} <ChevronRight/> </AlertDialogTrigger>
            <AlertDialogContent className="bg-black border-0 overflow-y-auto">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-amber-300">{dvr.client}</AlertDialogTitle>
                <AlertDialogDescription>
                <section className="w-full h-[500px] overflow-y-auto justify-center items-center text-white">
                <div className="py-2 flex justify-between">
                    <strong>Modelo DVR:</strong>
                    <span className="mr-4">{dvr.model}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Usuario:</strong>
                    <span className="mr-4">{dvr.user}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Senha:</strong>
                    <span className="mr-4">{dvr.password}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Cameras instaladas:</strong>
                    <span className="mr-4">{dvr.cams_installed}</span>
                </div>
                
                <div className="my-4">
                    <h2 className="text-xl text-amber-300">Redes</h2>
                </div>
                
                <div className="py-2 flex justify-between">
                    <strong>IP:</strong>
                    <span className="mr-4">{dvr.ip}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Porta de servico</strong>
                    <span className="mr-4">{dvr.service_port}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Porta HTTP</strong>
                    <span className="mr-4">{dvr.http_port}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>DDNS:</strong>
                    <span className="mr-4">{dvr.ddns}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Cloud/NS:</strong>
                    <span className="mr-4">{dvr.cloud}</span>
                </div>

                <div className="my-4">
                    <h2 className="text-xl text-amber-300">Armazenamento</h2>
                </div>

                <div className="py-2 flex justify-between">
                    <strong>Tamanho HD: </strong>
                    <span className="mr-4"> {dvr.hd}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Dias de armazenamento: </strong>
                    <span className="mr-4">{dvr.recording_days} dias</span>
                </div>
            </section>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <UpdateDVR
                        cams_installed={dvr.cams_installed}
                        client={dvr.client}
                        cloud={dvr.cloud}
                        ddns={dvr.ddns}
                        hd={dvr.hd}
                        http_port={dvr.http_port}
                        ip={dvr.ip}
                        model={dvr.model}
                        nickClient={dvr.nickClient}
                        password={dvr.password}
                        recording_days={dvr.recording_days}
                        service_port={dvr.service_port}
                        user={dvr.user}
                        id={dvr.id}
                        key={dvr.id}
                    />
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
}