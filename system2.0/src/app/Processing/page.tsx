'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ModalAlert from "../components/modalAlert"

const Processing = ()=>{

    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        }, 3000)
    })

    return(
        <main className="w-screen h-screen flex justify-center items-center bg-black">
            <section id="process" className="w-[376px] h-[200px] flex items-center justify-center flex-col bg-white rounded-2xl">
                <h2 className="text-2xl">Sucesso...</h2>
                <h3 className="text-sm">Seu formulário foi enviado com sucesso!</h3>
            </section>
        </main>
    )

}

export default Processing