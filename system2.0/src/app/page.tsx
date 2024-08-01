import React, { useState } from "react"
import CardService from "./components/CardService"
import Image from "next/image"
import Icon from "./assets/ctts-icon.png"

export default function Home() {

 return (
    <main className="w-screen h-screen  flex min-h-screen flex-col items-center justify-between bg-black">
      <section className="w-full h-[90%] flex justify-center items-center flex-col" >
        <Image 
          src={Icon}
          alt=""
          width={0}
          height={0}
          quality={100}
          sizes="100vw"
          className="w-96 h-40"
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
      </section>
    </main>
  )
}
