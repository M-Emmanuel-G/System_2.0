'use client'

import { useRouter } from "next/navigation"
import { useEffect, } from "react"
import { Button } from "@/components/ui/button"

const Processing = ()=>{

    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            const getProcess = document.getElementById("process")
            const getNextProcess = document.getElementById("nextProcess")
            if(getProcess){ getProcess.style.display = "none"}
            if(getNextProcess){ getNextProcess.style.display = "flex"}
        }, 3000)
    })

    return(
        <main className="w-screen h-screen flex justify-center items-center bg-black">
            <section  className="w-[376px] h-[200px] flex items-center justify-center flex-col  rounded-2xl">
                <div id="process" className="w-full h-full flex flex-col text-center items-center justify-center">
                    <span className="text-white">Aguarde.. Seu relatorio está sendo enviado!</span>
                </div>
                <div id="nextProcess"  className="w-full h-full items-center justify-center hidden flex-col text-white ">
                    <h2 className="text-xl text-white">Formulario enviado com sucesso...</h2>
                    <h3 className="my-2" > Deseja realizar outra preventiva?</h3>
                    <div className="flex my-8">
                        <Button className="w-40 bg-cyan-400 text-xl mx-2 hover:bg-cyan-400" onClick={()=>{router.push("/SendOS")}}>Sim</Button>
                        <Button className="w-40 bg-cyan-400 text-xl mx-2 hover:bg-cyan-400" onClick={()=>{router.push("/")}}>Não</Button>
                    </div>
                </div>
                
            </section>
        </main>
    )

}

export default Processing