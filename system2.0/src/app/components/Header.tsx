"use client"

import IconLogo from "../assets/ctts-icon.png"
import Image from "next/image"
import { ChevronLeftCircle, Menu, MenuIcon } from "lucide-react"
import { useRouter } from "next/navigation"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import CardService from "./CardService"
  
  

const Header = ()=>{

    return (
        <header className="w-full h-[10%] flex items-center justify-center text-black bg-black">
            <div className="w-1/6 h-full flex justify-center items-center">
            <Sheet>
                <SheetTrigger>
                    <MenuIcon className="text-white"/>
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="bg-black-1/2 border-none"
                >
                    <SheetHeader>
                    <SheetTitle className="text-white text-2xl">Serviços</SheetTitle>
                    <SheetDescription>
                        <CardService
                            path="/"
                            service="Home"
                        /> 
                        <CardService
                            path="/SendOS"
                            service="Enviar OS"
                        />
                        <CardService
                            path="/Login"
                            service="Clientes"
                        />
                        <CardService
                            path="/Materials"
                            service="Materiais Utilizados"
                        />
                        <CardService
                            path="/SolicityServices"
                            service="Solicitação de serviços"
                        />
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            </div>
            <div className="w-5/6 h-full flex justify-center">
                <Image src={IconLogo} alt="" className="w-40 h-16 relative right-10"/>
            </div>
        </header>
    )
}

export default Header