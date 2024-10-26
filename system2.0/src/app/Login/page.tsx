"use client"

import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import { codRegData } from "../Data/register";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Loading from "../components/Loading";
import { setTimeout } from "timers";

export default function Login() {

    const [register, setRegister] = useState<string>("")
    const [error, setError] = useState<string>("")
    const router = useRouter()

    const login = (ev:any)=>{
        try {
            ev.preventDefault()

            const loading = document.getElementById("Loading") as HTMLElement
            const getUser = codRegData.filter((user:any)=>{ return user.keyAccess === register})

            if(!register || getUser.length === 0){
                setTimeout(() => {
                    setError("")
                }, 5000);
            }

            if(!register) return setError("Digite sua chave de acesso!.")
            
            if(getUser.length === 0 ) return setError("Chave de acesso invalida!")

            loading.style.display = "flex"
            alert(`Bem vindo, ${getUser[0].name}`);
            router.push("/Clients")


        } catch (error:any) {
            alert(error.message)
        }
    }

    return (
        <main className="w-screen h-screen flex items-center justify-center flex-col">
            <Header/>
            <section className="w-full h-[90%] flex items-center justify-center flex-col">
              <form className="flex flex-col">
                <h2 className=" text-center text-xl">Digite sua chave de acesso.</h2>
                <Input
                    value={register}
                    onChange={(ev)=>{setRegister(ev.target.value)}}
                    placeholder="Chave de acesso..."
                    />
                    <span className=" h-10 text-red-600 text-center">{error}</span>
                    <Button
                        autoFocus
                        onClick={login}
                        className="my-2 text-xl bg-sky-600 hover:bg-sky-600">Confirmar</Button>
              </form>
            </section>
            <Loading/>
        </main>
    );
}