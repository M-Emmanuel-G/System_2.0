"use client"

import { Dvr } from "@prisma/client";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface DvrProps{
    dvr:Dvr
}

export default function DvrItem({dvr}:DvrProps) {

    const router = useRouter()

    const goToDvrItem = ()=>{
        const loading = document.getElementById("Loading") as HTMLElement
        loading.style.display = "flex"
        router.push(`/DvrDetails/${dvr.id}`)
    }

    return (
        <div className="w-80 h-10 flex items-center justify-between rounded-2xl cursor-pointer">
            <span onClick={goToDvrItem}>{dvr.description}</span>
            <ChevronRight/>
        </div>
    );
}