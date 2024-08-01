"use client"

import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import { codRegData } from "../Data/register";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Login() {

    const [register, setRegister] = useState<string>("")
    const router = useRouter()

    const login = (ev:any)=>{
        try {
            ev.preventDefault()
            if(!register) return alert("Digite sua matrícula.")
            const getUser = codRegData.filter((user:any)=>{ return user.cod === register})
            
            if(getUser.length === 0 ) return alert("Matricula inválida.")

                
            alert(`Bem vindo, ${getUser[0].name}`);
            router.push("/Clients")


        } catch (error:any) {
            alert(error.message)
        }
    }

    return (
        <main className="w-screen h-screen flex bg-black items-center justify-center flex-col">
            <Header/>
            <section className="w-full h-[90%] flex items-center justify-center flex-col">
              <form className="flex flex-col">
              <Input
                    value={register}
                    onChange={(ev)=>{setRegister(ev.target.value)}}
                    placeholder="Matrícula"
                />
                <span className="text-white">{}</span>
                <Button
                    onClick={login}
                className="bg-orange-400">Confirmar</Button>
              </form>
            </section>
        </main>
    );
}