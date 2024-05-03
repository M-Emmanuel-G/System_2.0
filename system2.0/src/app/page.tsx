import React, { useState } from "react"
import CardService from "./components/CardService"
import Header from "./components/Header"


export default function Home() {

 return (
    <main className="w-screen h-screen  flex min-h-screen flex-col items-center justify-between bg-black">
      <Header/>
      <section className="w-full h-[90%] flex justify-center items-center flex-col" >
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
