"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function RemoveDvr(id:string) {
 try {
    
    const getDvr = await db.dvr.findUnique({
        where:{
            id
        }
    })

     if(!getDvr) return "Dvr não encontrado!"

     await db.dvr.delete({
        where:{
            id
        }
     })

     return "Dvr removido com sucesso!"

 } catch (error:any) {
    return error.message
 }
}

revalidatePath("/Clients")