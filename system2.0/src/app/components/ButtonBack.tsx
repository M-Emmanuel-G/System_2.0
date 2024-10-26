"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ButtonBack() {
 
const router = useRouter()
 
    return (
        <footer className="flex w-full h-[10%] justify-center items-center">
            <Button className="w-80" onClick={()=>{router.back()}}>Voltar</Button>
        </footer>
    );
}