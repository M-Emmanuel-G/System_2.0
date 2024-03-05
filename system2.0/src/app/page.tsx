'use client'

import React, { useState } from "react"
import Input from "./components/Input"
import emailjs from 'emailjs-com' 
import GetDate from "./services/GetDate"
import { useRouter } from "next/navigation"
import ModalAlert from "./components/modalAlert"
import CardService from "./components/CardService"


export default function Home() {

 return (
    <main className="w-screen h-screen  flex min-h-screen flex-col items-center justify-between bg-black">
      <CardService
        service="Enviar OS"
      />
    </main>
  )
}
