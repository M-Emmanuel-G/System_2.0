"use client"

import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import { codRegData } from "../Data/register";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Login() {

    const [register, setRegister] = useState<string>("")
    const [error, setError] = useState<string>("")
    const router = useRouter()

    const login = (ev:any)=>{
        try {
            ev.preventDefault()
            if(!register) return setError("Digite sua matrícula.")
            const getUser = codRegData.filter((user:any)=>{ return user.cod === register})
            
            if(getUser.length === 0 ) return setError("Matricula invalida!")

                
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
                <h2></h2>
                <Input
                    value={register}
                    onChange={(ev)=>{setRegister(ev.target.value)}}
                    placeholder="Matrícula"
                    />
                    <span className=" h-10 text-red-600 text-center">{error}</span>
                    <Button
                        onClick={login}
                        className="bg-orange-500 hover:bg-orange-500">Confirmar
                    </Button>
              </form>
            </section>
        </main>
    );
}