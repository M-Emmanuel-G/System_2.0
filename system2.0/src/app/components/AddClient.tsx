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
import saveClientDatabase from "../actions/addClient";

export default function SaveClient() {

    const [client, setClient] = useState<string>("")
 
    dayjs.locale('pt-br');
    dayjs.extend(localeData);

    const saveClient = async ()=>{
        try {

            const loading = document.getElementById("Loading") as HTMLElement

            if(!client) alert("Cliente não informado!")
            loading.style.display = "flex"
            const response = await saveClientDatabase(client)

            alert(response)

            loading.style.display = "none"
        } catch (error:any) {
            alert(error.message)
        }

    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="my-4">Cadastrar Cliente</AlertDialogTrigger>
            <AlertDialogContent className="border-0 overflow-y-auto bg-black-1/2">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-orange-500 text-2xl text-center mb-8">Cadastrar cliente</AlertDialogTitle>
                <AlertDialogDescription>
                <section className="w-full h-[500px] overflow-y-auto justify-center items-center text-white">
                    <form className=" w-full flex flex-col justify-center items-center text-center">
                        <Input
                            value={client}
                            onChange={(ev)=>{setClient(ev.target.value)}}
                            placeholder="Nome do cliente"
                        />
                         <AlertDialogFooter className="my-4">
                            <AlertDialogCancel className="bg-red-400 border-0 hover:bg-red-500 hover:text-white" >Cancelar</AlertDialogCancel>
                            <AlertDialogAction className="bg-emerald-400 hover:bg-emerald-500" onClick={saveClient}>Salvar</AlertDialogAction>
                        </AlertDialogFooter>
                    </form>
                </section>
                </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>

    );
}