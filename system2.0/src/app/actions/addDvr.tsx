"use server"

import { db } from "@/lib/prisma"

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

const SaveDvrDatabase = async (dvr:SaveDvrProps) => {
   try {

    if(!dvr.model) return "Modelo Dvr não foi informado!"
    if(!dvr.user) return "Usuário não foi informado!"
    if(!dvr.password) return "Senha não foi informado!"
    if(!dvr.cams_installed) return "Quantidade de cameras não foram informadas!"
    if(!dvr.ip) return "IP não foi informado!"
    if(!dvr.service_port) return "Porta de serviço não foi informada!"
    if(!dvr.http_port) return "Porta http não foi informada!"
    if(!dvr.cloud) return "Cloud não foi informado!"
    if(!dvr.ddns) return "Ddns não foi informado!"
    if(!dvr.hd) return "Hd não foi informado!"
    if(!dvr.recording_days) return "Dias de gravação não foram informados!"
    if(!dvr.description) return "Descrição não foi informada!"

    const getClient = await db.clients.findUnique({
        where:{
            id:dvr.clientID
        }
    })

    if(!getClient) return "Cliente não encontrado!"

    await db.dvr.create(({
        data:{
            model: dvr.model,
            user:dvr.user,
            password:dvr.password,
            cams_installed:dvr.cams_installed,
            ip:dvr.ip,
            service_port: dvr.service_port,
            http_port: dvr.http_port,
            hd:dvr.hd,
            cloud:dvr.cloud,
            ddns:dvr.ddns,
            recording_days: dvr.recording_days,
            description:dvr.description,
            clientID:dvr.clientID,
            name_Client:""
        }
    }))


    return "Dvr adicionado com sucesso!"

   } catch (error:any) {
    return error.message
   }
}
 
export default SaveDvrDatabase;