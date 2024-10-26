"use client"

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import RemoveClient from "../actions/removeClient";

interface ButtonProps{
    id:string
}

export default function ButtonRemoveClients(id:ButtonProps) {

    const router = useRouter()

    const remove = async ()=>{
        try {

            const loading = document.getElementById("Loading") as HTMLElement
            loading.style.display = "flex"

            const response = await RemoveClient(id.id)
            alert(response)
            router.back()
            loading.style.display = "none"
        } catch (error:any) {
            alert(error.message)
        }
    }
    
 return (
   <Button onClick={remove} className="bg-transparent hover:bg-transparent">
    <X className="w-6 h-6 text-red-500"/>
   </Button>
 );
}