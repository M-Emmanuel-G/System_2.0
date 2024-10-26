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
import SaveDvrDatabase from "../actions/addDvr";


interface SaveDvrProps{
    name_Client: string
    description: string
    model: string
    cams_installed: string
    user: string
    password: string
    ip: string
    cloud: string
    service_port: string
    http_port: string
    ddns: string
    hd: string
    recording_days: string
    clientID: string
}

interface ClientsProps{
    id:string
    client:string
    date:string
}



export default function SaveDvrs(clients:any) {

    const showClients = clients.clients.map((client:ClientsProps)=>{
        return(
            <option
                className="w-80 h-8 text-black bg-transparent"
                onClick={()=>{setClientID(client.id)}}
                >
                    {client.client}
            </option>
        )
    })

    
 
    const [model, setModel] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [user, setUser] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [qtdCam, setQtdCam] = useState<string>("")
    const [ip, setIp] = useState<string>("")
    const [servicePort, setServicePort] = useState<string>("")
    const [httpPort, setHttpPort] = useState<string>("")
    const [hd, setHd] = useState<string>("")
    const [cloud, setCloud] = useState<string>("")
    const [ddns, setDdns] = useState<string>("")
    const [recDays, setRecDays] = useState<string>("")
    const [clientID, setClientID] = useState<string>("")

    dayjs.locale('pt-br');
    dayjs.extend(localeData);

    const saveDvr = async ()=>{

        const loading = document.getElementById("Loading") as HTMLElement
        
        const body:SaveDvrProps = {
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
            description,
            clientID,
            name_Client:""
        }
        
        loading.style.display = "flex"

        const response = await SaveDvrDatabase(body)
        alert(response)

        loading.style.display = "none"

    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className=" my-4">Cadastrar DVR</AlertDialogTrigger>
            <AlertDialogContent className="bg-black-1/2 border-0 overflow-y-auto">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-orange-500 text-2xl text-center mb-8">Cadastrar DVR</AlertDialogTitle>
                <AlertDialogDescription>
                <section className="w-full h-[500px] overflow-y-auto justify-center items-center text-white">
                    <form className=" w-full flex flex-col items-center text-center">
                    <h2 className="text-xl text-sky-600 text-start my-4">Informações básicas</h2>
                        <div className="flex flex-col">
                            <strong>Cliente</strong>
                            <select
                                className="w-80 h-8 my-4 text-center text-black"
                            >
                                <option value="client">Escolha um Cliente!</option>
                                {showClients}
                            </select>
                        </div>  
                        <div className="flex flex-col">
                            <strong>Modelo DVR</strong>
                            <Input
                                onChange={(ev)=>{setModel(ev.target.value)}}
                                value={model}
                                placeholder="Modelo"
                            />
                        </div>
                        <div className="flex flex-col">
                            <strong>Usuário</strong>
                                <Input
                                    onChange={(ev)=>{setUser(ev.target.value)}}
                                    value={user}
                                    placeholder="Usuário"
                                />
                        </div>
                        <div className="flex flex-col">
                            <strong>Senha</strong>
                            <Input
                                onChange={(ev)=>{setPassword(ev.target.value)}}
                                value={password}
                                placeholder="Senha"
                            />
                        </div>
                        <div className="flex flex-col">
                            <strong>Cameras instaladas</strong>
                            <Input
                                onChange={(ev)=>{setQtdCam(ev.target.value)}}
                                value={qtdCam}
                                placeholder="Cameras instaladas"
                            />
                        </div>
                        <h2 className="text-xl text-sky-600 text-start">Rede:</h2>
                        <div className="flex flex-col">
                            <strong>IP</strong>
                            <Input
                                onChange={(ev)=>{setIp(ev.target.value)}}
                                value={ip}
                                placeholder="IP"
                            />
                        </div>
                        <div className="flex flex-col">
                            <strong>Porta HTTP</strong>
                            <Input
                                onChange={(ev)=>{setHttpPort(ev.target.value)}}
                                value={httpPort}
                                placeholder="Porta HTTP"
                            />
                        </div>
                        <div className="flex flex-col">
                            <strong>Porta de Servico</strong>
                            <Input
                                onChange={(ev)=>{setServicePort(ev.target.value)}}
                                value={servicePort}
                                placeholder="Porta de servico"
                            />
                        </div>
                        <div className="flex flex-col">
                            <strong>Cloud</strong>
                            <Input
                                onChange={(ev)=>{setCloud(ev.target.value)}}
                                value={cloud}
                                placeholder="CLOUD"
                            />
                        </div>                        
                        <div className="flex flex-col">
                            <strong>DDNS</strong>
                            <Input
                                onChange={(ev)=>{setDdns(ev.target.value)}}
                                value={ddns}
                                placeholder="DDNS"
                            />
                        </div>                        
                        <h2 className="text-xl text-sky-600 text-start">Armazenamento:</h2>
                        <div className="flex flex-col">
                            <strong>HD</strong>
                            <Input
                                onChange={(ev)=>{setHd(ev.target.value)}}
                                value={hd}
                                placeholder="HD"
                            />
                        </div>                        
                        <div className="flex flex-col">
                            <strong>Dias de gravação</strong>
                            <Input
                                onChange={(ev)=>{setRecDays(ev.target.value)}}
                                value={recDays}
                                placeholder="Dias de gravação"
                            />
                        </div>                        
                        <div className="flex flex-col">
                            <strong>Descrição</strong>
                            <Input
                                onChange={(ev)=>{setDescription(ev.target.value)}}
                                value={description}
                                placeholder="ex: CTTS Bela Vista"
                            />
                        </div>                          
                        <div className="w-full flex justify-center">
                        <AlertDialogFooter className="my-4 w-full flex flex-row items-center justify-center">
                            <AlertDialogCancel className="bg-red-400 border-0 hover:bg-red-500 hover:text-white my-2 mx-4" >Cancelar</AlertDialogCancel>
                            <AlertDialogAction className="bg-emerald-400 hover:bg-emerald-500" onClick={saveDvr}>Salvar</AlertDialogAction>
                        </AlertDialogFooter>
                        </div>                    
                    </form>
                </section>
                </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>

    );
}