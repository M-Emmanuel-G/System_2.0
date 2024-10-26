"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export default async function RemoveClient(id:string) {
 try {
    
    const getDvr = await db.clients.findUnique({
        where:{
            id
        }
    })

     if(!getDvr) return "Ciente não encontrado!"

     await db.clients.delete({
        where:{
            id
        }
     })

     return "Cliente removido com sucesso!"

 } catch (error:any) {
    return error.message
 }
}

revalidatePath("/Clients")