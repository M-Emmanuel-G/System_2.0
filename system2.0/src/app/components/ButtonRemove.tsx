"use client"

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import RemoveDvr from "../actions/removeDvr";
import { useRouter } from "next/navigation";

interface ButtonProps{
    id:string
}

export default function ButtonRemove(id:ButtonProps) {

    const router = useRouter()

    const remove = async ()=>{
        try {

            const loading = document.getElementById("Loading") as HTMLElement
            loading.style.display = "flex"

            const response = await RemoveDvr(id.id)
            alert(response)
            router.back()
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