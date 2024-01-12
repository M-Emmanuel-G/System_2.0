'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ModalAlert from "../components/modalAlert"

const Processing = ()=>{

    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const onClose = ()=>{
        setIsOpen(false)
    }

    useEffect(()=>{
        setTimeout(()=>{
            setIsOpen(true)
        }, 3000)
    })

    return(
        <main className="w-screen h-screen">
            <section id="process" className="w-full h-full flex items-center justify-center flex-col">
                <h2 className="text-3xl">Aguarde...</h2>
                <h3 className="text-xl">Formulário está sendo enviado!</h3>
            </section>
            <section id="success" className="hidden">
                <h2>Formulário enviado com sucesso...</h2>
            </section>
            {isOpen && 
            <ModalAlert
                onClose={onClose}
                path="/"
            />
            }
        </main>
    )

}

export default Processing