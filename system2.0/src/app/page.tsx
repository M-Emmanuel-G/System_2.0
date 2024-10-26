import React from "react"
import Header from "./components/Header"
import { db } from "@/lib/prisma"
import CardInfo from "./components/CardInfo"
import Image from "next/image"

export default async function Home() {

  const infoClients = await db.clients.findMany({
    include:{
      dvr:true
    }
  })

  const messageClients = `${infoClients.length} clients cadastrados.`

 return (
    <main className="w-screen h-screen  flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <section className="w-full h-[90%] flex  items-center flex-col" >
        
      </section>
    </main>
  )
}
