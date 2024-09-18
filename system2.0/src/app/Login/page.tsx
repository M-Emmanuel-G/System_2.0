"use client"

import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import { codRegData } from "../Data/register";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Loading from "../components/Loading";

export default function Login() {

    const [register, setRegister] = useState<string>("")
    const [error, setError] = useState<string>("")
    const router = useRouter()

    const login = (ev:any)=>{
        try {
            ev.preventDefault()

            const loading = document.getElementById("Loading") as HTMLElement

            if(!register) return setError("Digite sua chave de acesso!.")
            const getUser = codRegData.filter((user:any)=>{ return user.keyAccess === register})
            
            if(getUser.length === 0 ) return setError("Chave de acesso invalida!")

            loading.style.display = "flex"
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
                <h2 className="text-white text-center text-xl">Digite a chave de acesso.</h2>
                <Input
                    value={register}
                    onChange={(ev)=>{setRegister(ev.target.value)}}
                    placeholder="Chave de acesso..."
                    />
                    <span className=" h-10 text-red-600 text-center">{error}</span>
                    <Button
                        onClick={login}
                        className="my-2 text-xl bg-sky-600 hover:bg-sky-600">Confirmar</Button>
              </form>
            </section>
            <Loading/>
        </main>
    );
}