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
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import { useState } from "react";
import Input from "./Input";
// import UpdateDvr from "../actions/UpdateDVR";
import { dvr } from "@prisma/client";
import { DvrsProps } from "../Data/register";
import GeneratePDF from "../actions/generatePDF";

export default function UpdateDVR(dvr:DvrsProps) {

    const [model, setModel] = useState<string>(dvr.model)
    const [user, setUser] = useState<string>(dvr.user)
    const [password, setPassword] = useState<string>(dvr.password)
    const [qtdCam, setQtdCam] = useState<string>(dvr.cams_installed)
    const [ip, setIp] = useState<string>(dvr.ip)
    const [servicePort, setServicePort] = useState<string>(dvr.service_port)
    const [httpPort, setHttpPort] = useState<string>(dvr.http_port)
    const [hd, setHd] = useState<string>(dvr.hd)
    const [cloud, setCloud] = useState<string>(dvr.cloud)
    const [ddns, setDdns] = useState<string>(dvr.ddns)
    const [recDays, setRecDays] = useState<string>(dvr.recording_days)

    dayjs.locale('pt-br');
    dayjs.extend(localeData);

    const saveUpdate = async ()=>{

        const body:DvrsProps = {
            id:dvr.id,
            model,
            user,
            password,
            cams_installed:qtdCam,
            ip,
            service_port: servicePort,
            http_port: httpPort,
            hd,
            cloud,
            ddns,
            recording_days: recDays,
            client: dvr.client,
            nickClient: dvr.nickClient
        
        }
        
        GeneratePDF(body)

       alert("PDF gerado com sucesso!")

    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-[400px] h-[42px] text-black bg-sky-600 rounded-xl my-4">Gerar PDF</AlertDialogTrigger>
            <AlertDialogContent className="bg-black border-0 overflow-y-auto">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-orange-500 text-2xl text-center mb-8">{dvr.client}</AlertDialogTitle>
                <AlertDialogDescription>
                <section className="w-full h-[500px] overflow-y-auto justify-center items-center text-white">
                    <form className=" w-full flex flex-col items-center">
                    <h2 className="text-xl text-sky-600 text-start">Informações básicas</h2>
                        <Input
                            onChange={(ev)=>{setModel(ev.target.value)}}
                            value={model}
                            placeholder="Modelo"
                        />
                        <Input
                            onChange={(ev)=>{setUser(ev.target.value)}}
                            value={user}
                            placeholder="Usuário"
                        />
                        <Input
                            onChange={(ev)=>{setPassword(ev.target.value)}}
                            value={password}
                            placeholder="Senha"
                        />
                        <Input
                            onChange={(ev)=>{setQtdCam(ev.target.value)}}
                            value={qtdCam}
                            placeholder="Cameras instaladas"
                        />
                        <h2 className="text-xl text-sky-600 text-start">Rede:</h2>
                        <Input
                            onChange={(ev)=>{setIp(ev.target.value)}}
                            value={ip}
                            placeholder="IP"
                        />
                        <Input
                            onChange={(ev)=>{setHttpPort(ev.target.value)}}
                            value={httpPort}
                            placeholder="Porta HTTP"
                        />
                        <Input
                            onChange={(ev)=>{setServicePort(ev.target.value)}}
                            value={servicePort}
                            placeholder="Porta de servico"
                        />
                        <Input
                            onChange={(ev)=>{setCloud(ev.target.value)}}
                            value={cloud}
                            placeholder="CLOUD"
                        />
                        <Input
                            onChange={(ev)=>{setDdns(ev.target.value)}}
                            value={ddns}
                            placeholder="DDNS"
                        />
                        <h2 className="text-xl text-sky-600 text-start">Armazenamento:</h2>
                        <Input
                            onChange={(ev)=>{setHd(ev.target.value)}}
                            value={hd}
                            placeholder="HD"
                        />
                        <Input
                            onChange={(ev)=>{setRecDays(ev.target.value)}}
                            value={recDays}
                            placeholder="Dias de gravação"
                        />
                    </form>
                </section>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction className="bg-emerald-400 hover:bg-emerald-500" onClick={saveUpdate}>Salvar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
}