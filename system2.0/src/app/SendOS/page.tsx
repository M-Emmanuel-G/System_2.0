'use client'

import React, { useState } from "react"
import emailjs from 'emailjs-com' 
import { useRouter } from "next/navigation"
import GetDate from "../services/GetDate"
import Input from "../components/Input"
import ModalAlert from "../components/modalAlert"
import Header from "../components/Header"
import Link from "next/link"

interface SendOsProps{
  cliente:string,
  data:string
  modelo:string,
  usuario:string
  senha:string
  Cameras_Instaladas:string
  ip:string
  Porta_Servico:string
  Porta_HTTP:string
  ddns:string
  Armazenamento:string,
  Dias_de_gravacao:string
  colaborador:string
  Email_Cliente:string
  Observacao:string
}


export default function SendOS() {

  const [client, setClient] = useState('')
  const [model, setModel] = useState('')
  const [user, setUser] = useState('admin')
  const [password, setPassword] = useState('')
  const [qtdCam, setQtdCam] = useState('')
  const [ip, setIp] = useState('192.168.')
  const [servicePort, setServeicePort] = useState('')
  const [httpPort, setHttpPort] = useState('')
  const [ddns, setDdns] = useState('Não tem.')
  const [storage, setStorage] = useState('')
  const [recDays, setRecDays] = useState('')
  const [collaborator, setCollaborattor] = useState('Márcio')
  const [sentTo, setSendTo] = useState("")
  const [obs, setObs] = useState('')

  const [isOpen, setIsOpen] = useState(false)
  
  const router = useRouter()

  const onClose = ()=>{
    setIsOpen(false)
  }

  const form = (ev:React.FormEvent)=>{
    try {
    ev.preventDefault()

    const body:SendOsProps = {
      cliente: client,
      data:GetDate(),
      modelo: model,
      usuario: user,
      senha: password,
      Cameras_Instaladas: qtdCam,
      ip: ip,
      Porta_Servico: servicePort,
      Porta_HTTP: httpPort,
      ddns: ddns,
      Armazenamento: storage,
      Dias_de_gravacao: recDays,
      Observacao: obs,
      Email_Cliente: sentTo,
      colaborador: collaborator
    }

    if(!client || !model || ! user || !password || !qtdCam || !ip || !servicePort || !httpPort || !ddns || !storage || !recDays || !collaborator ) return alert("Todas as informacoes são necessarias!") 
    if(!sentTo.includes(".com") || !sentTo.includes("@")) return alert("Formato invalido de email");
      
     
      emailjs.send('service_ve702oh', 'template_qkpvdzv', body as any, '5ZxPWFsvg_-WP62gn')
      .then((result) => {
            router.push('/Processing')
      }, (error) => {
          console.log(error)
      });
    
    
    router.push("/Processing")
    
   } catch (error:any) {
    alert(error.message)
   }

  }

  return (
    <main className="w-screen h-screen min-h-screen flex flex-col items-center justify-between bg-black text-white">
      <section className="w-96 h-[90%] flex  items-center flex-col  overflow-y-auto">
        <h2 className="text-2xl my-8">Formulario de Preventivas</h2>
        <form onSubmit={form}>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl">Informações Basicas</h3>
            <Input
              value={client}
              onChange={(ev)=>{setClient(ev.target.value)}}
              placeholder="Nome do Cliente"
            />
            <Input
              value={model}
              onChange={(ev)=>{setModel(ev.target.value)}}
              placeholder="Modelo DVR"
            />
            <Input
              value={user}
              onChange={(ev)=>{setUser(ev.target.value)}}
              placeholder="Usuário"
            />
            <Input
              value={password}
              onChange={(ev)=>{setPassword(ev.target.value)}}
              placeholder="Senha"
            />
            <Input
              value={qtdCam}
              onChange={(ev)=>{setQtdCam(ev.target.value)}}
              placeholder="Cameras Instaladas."
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl">Rede:</h3>
            <Input
              value={ip}
              onChange={(ev)=>{setIp(ev.target.value)}}
              placeholder="IP"
            />
            <Input
              value={servicePort}
              onChange={(ev)=>{setServeicePort(ev.target.value)}}
              placeholder="Porta de Serviço"
            />
            <Input
              value={httpPort}
              onChange={(ev)=>{setHttpPort(ev.target.value)}}
              placeholder="porta HTTP"
            />
            <Input
              value={ddns}
              onChange={(ev)=>{setDdns(ev.target.value)}}
              placeholder="DDNS"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl">Armazenamento:</h3>
            <Input
              value={storage}
              onChange={(ev)=>{setStorage(ev.target.value)}}
              placeholder="Tamanho HD"
            />
            <Input
              value={recDays}
              onChange={(ev)=>{setRecDays(ev.target.value)}}
              placeholder="Dias de gravação"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl">Informações Adicionais:</h3>
            <textarea
              className="text-black outline-none"
              cols={28}
              rows={10}
              value={obs}
              onChange={(ev)=>{setObs(ev.target.value)}}
              placeholder="Observações..."
            />
            <select 
              value={collaborator}
              onChange={(ev)=>{setCollaborattor(ev.target.value)}}
              className="w-[326px] h-[30px] text-center text-gray-400 rounded-3xl my-2 bg-white"
            >
              <option>Márcio</option>
            </select>

            <Input
              placeholder="Enviar Para.."
              value={sentTo}
              onChange={(ev)=>{setSendTo(ev.target.value)}}
            />
            
          </div>
          <div className=" w-full flex items-center flex-col">
            <button className="w-80 h-8 bg-lime-400 rounded-xl my-2 mb-4">Enviar</button>
            <Link
              href="/"
              className="w-80 h-8 flex items-center justify-center bg-lime-400 rounded-xl p-0 m-0"
              >Voltar</Link>
          </div>
        </form>
      </section>
      {
        isOpen &&
        <ModalAlert
          text="Todas as informações precisam ser inseridas!"
          path="/"
          onClose={onClose}
        />
      }
    </main>
  )
}
