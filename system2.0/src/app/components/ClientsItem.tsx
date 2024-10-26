"use client"

import { Clients } from "@prisma/client";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import BagdeStyle from "./Bagde";
import { Badge } from "@/components/ui/badge";

interface ClientsItemsProps{
    clients:Clients
}

export default function ClientsItem({clients}:ClientsItemsProps) {

    const router = useRouter()
    
    const goToClientsDetails = ()=>{
        const loading = document.getElementById("Loading") as HTMLElement
        loading.style.display = "flex"

        router.push(`/ClientsDetails/${clients.id}`)
    }

    return (
        <div
            onClick={goToClientsDetails}
             className="w-80 h-10 flex  text-center justify-between items-center cursor-pointer">
            <span>{clients.client}</span>
            <div className="flex ">
                <Badge variant="outline">0</Badge>
                <ChevronRight/>
            </div>
        </div>
    );
}