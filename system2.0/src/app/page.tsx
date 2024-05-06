import React, { useState } from "react"
import CardService from "./components/CardService"
import Image from "next/image"
import IconLogo from "../app/assets/ctts-icon.png"


export default function Home() {

 return (
    <main className="w-screen h-screen  flex min-h-screen flex-col items-center justify-between bg-black">
      <section className="w-full h-full flex justify-center items-center flex-col" >
        <Image
          src={IconLogo}
          alt=""
          className="w-64 h-32 my-12"
        />
        <CardService
          path="/SendOS"
          service="Enviar OS"
        />
        <CardService
          service="Armazenar Fotos"
          path="/UploadImg"
        />
      </section>
    </main>
  )
}
