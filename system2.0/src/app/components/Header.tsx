"use client"

import IconLogo from "../assets/ctts-icon.png"
import Image from "next/image"
import { ChevronLeftCircle } from "lucide-react"
import { useRouter } from "next/navigation"

const Header = ()=>{

    const router = useRouter()

    return (
        <header className="w-full h-[10%] flex bg-sky-600 items-center justify-center text-black">
            <div className="w-1/6 h-full flex justify-center items-center">
                <ChevronLeftCircle
                    className=" w-10 h-10"
                    onClick={()=>{router.back()}}/>
            </div>
            <div className="w-5/6 h-full flex justify-center">
                <Image src={IconLogo} alt="" className="w-40 h-16 relative right-10"/>
            </div>
        </header>
    )
}

export default Header