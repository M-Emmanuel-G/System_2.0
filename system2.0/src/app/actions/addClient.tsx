"use server"

import { db } from "@/lib/prisma";
import GetDate from "../services/GetDate";
import { revalidatePath } from "next/cache";

const saveClientDatabase = async (client:string) => {
    try {

        if(!client) return "Cliente não informado!"

        await db.clients.create(({
            data:{
                client:client,
                date: GetDate()
            }
           }))
         return "Cliente cadastrado com sucesso!"  
    } catch (error:any) {
        return error.message
    }
}
export default saveClientDatabase;

revalidatePath("/Clients")