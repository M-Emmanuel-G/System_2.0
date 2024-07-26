'use client'

import React, { useState } from "react"
import emailjs, { send } from 'emailjs-com' 
import { useRouter } from "next/navigation"
import GetDate from "../services/GetDate"
import Input from "../components/Input"
import ModalAlert from "../components/modalAlert"
import Header from "../components/Header"
import Link from "next/link"
import jsPDF from "jspdf"
import dayjs from "dayjs"
import { LogoBase64 } from "../assets/ImageBase64"

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
  const [ns, setNs] = useState('')
  const [storage, setStorage] = useState('')
  const [recDays, setRecDays] = useState('')
  const [collaborator, setCollaborattor] = useState('Márcio')
  const [sentTo, setSendTo] = useState("")
  const [obs, setObs] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  const onClose = ()=>{
    setIsOpen(false)
  }

  // const form = (ev:React.FormEvent)=>{
  //   try {
  //   ev.preventDefault()

  //   const body:SendOsProps = {
  //     cliente: client,
  //     data:GetDate(),
  //     modelo: model,
  //     usuario: user,
  //     senha: password,
  //     Cameras_Instaladas: qtdCam,
  //     ip: ip,
  //     Porta_Servico: servicePort,
  //     Porta_HTTP: httpPort,
  //     ddns: ddns,
  //     Armazenamento: storage,
  //     Dias_de_gravacao: recDays,
  //     Observacao: obs,
  //     Email_Cliente: sentTo,
  //     colaborador: collaborator
  //   }

  //   if(!client || !model || ! user || !password || !qtdCam || !ip || !servicePort || !httpPort || !ddns || !storage || !recDays || !collaborator ) return alert("Todas as informacoes são necessarias!") 
  //   if(!sentTo.includes(".com") || !sentTo.includes("@")) return alert("Formato invalido de email");
      
     
  //     emailjs.send('service_ve702oh', 'template_qkpvdzv', body as any, '5ZxPWFsvg_-WP62gn')
  //     .then((result) => {
  //           router.push('/Processing')
  //     }, (error) => {
  //         console.log(error)
  //     });
    
    
  //   router.push("/Processing")
    
  //  } catch (error:any) {
  //   alert(error.message)
  //  }

  // }

  function createPdf() {

    const getInfos = `
     Data da preventiva:  ${dayjs().format("DD-MM-YYYY")}
     Nome do Cliente: ${client}
     Modelo/Marca do gravador: ${model}
     Usuario: ${user}
     Senha: ${password}
     Total de cameras instaladas: ${qtdCam}
     Cloud/NS: ${ns}
     IP: ${ip}
     Porta de Serviço: ${servicePort}
     Porta  HTTP: ${httpPort}
     Tamanho do HD/Armazenamento: ${storage}
     Tempo de Gravação: ${recDays}
 
                     Preventivas realizadas:
 
     conferir limpeza das lentes de cameras
     conferir limpeza dos sensores de alarmes
     conferir acesso remoto
     conferir se estao gravando por detecção de movimento
     conferir data e hora durante a reprodução
     conferir o sistema de sonorização
     conferir o sistema de de alarme
     conferir o sistema de interfonia
     limpeza do rack(Se necessário)
     limpeza interna do DVR.
     conferir se nobreak esta sustentando o sistema sem rede AC
     conferir estado físico das instalações / infra-estrutura

     Observações: 
        ${obs}
      `
 
 
   const doc = new jsPDF();
 
   const imgData = LogoBase64
   doc.addImage(imgData, 'PNG', 70, 0, 80, 30);
 
   // 1-position x
   // 2-position y
   // 3-size width
   // 5-size heigth
 
   // Adiciona título
   doc.setFontSize(16);
   doc.text(`${client}`, 20, 40);
 
   // Adiciona subtítulo
 //   doc.setFontSize(16);
 //   doc.text(dayjs().format("DD-MM-YYYY"), 40, 50);
 
   // Adiciona um parágrafo
   doc.setFontSize(12);
   doc.text(
     getInfos,
     15, 60, { maxWidth: 170 }
   );
 
   doc.text(`Segue abaixo o envio da O.S, referente a manutenção preventiva do ${client}`, 20,50)
 
   doc.text(`
   Obrigado por conta com os serviços da CTTS...
 
   Rua São Paulo, 103, Bela Vista, Itabirito-MG, CEP 35450-120
   
   TEL  (31) 3979-1063 / (31) 98855-0745
   
   ctts@ctts.com.br / mauricio@ctts.com.br
   
   CNPJ - 08.627124/0001-03      INSC. EST.  - 001.033.657.0074`, 18,240)
 
   // Adiciona uma linha
   doc.text(` Responsavel técnico: ${collaborator}`,20, 230);
 
   // Adiciona uma nova página e texto nela
 //   doc.addPage();
 //   doc.text('Página 2', 20, 20);
 
   // Salva o PDF com o nome especificado
   doc.save(`Preventiva-${client}.pdf`);
 }
 
 // Chama a função para criar o PDF
 
 const GeneratePDF = (ev:React.FormEvent)=>{
     try {

      ev.preventDefault()

      if(!client) return alert("Cliente não informado!")
      if(!model) return alert("Modelo de DVR/NVR não informado!")
      if(!user) return alert("Usuario não informado!")
      if(!password) return alert("Senha não informado!")
      if(!qtdCam) return alert("Quantidade de câmera não informado!")
      if(!ip) return alert("IP não informado!")
      if(!servicePort) return alert("Porta de serviço não informado!")
      if(!httpPort) return alert("Porta HTTP não informado!")
      if(!ns) return alert("Numero de série/CLOUD não informado!")
      if(!storage) return alert("Armazenamento não informado!")
      if(!recDays) return alert("Dias de gravação não informado!")
      if(!collaborator) return alert("Responsavel técnico não informado!")

      if(sentTo){
        if(!sentTo.includes("@") || !sentTo.includes(".com")) return alert("Formato de email invalido!")
      }

      // createPdf();

     } catch (error:any) {
      alert(error.message)
     }
 }

  return (
    <main className="w-screen h-screen min-h-screen flex flex-col items-center justify-between bg-black text-white">
      <section className="w-96 h-[90%] flex  items-center flex-col  overflow-y-auto">
        <h2 className="text-2xl my-8 text-amber-400">Formulario de Preventivas</h2>
        <form onSubmit={GeneratePDF}>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl text-amber-400">Informações Basicas</h3>
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
            <h3 className="text-xl text-amber-400">Rede:</h3>
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
            <Input
              value={ns}
              onChange={(ev)=>{setNs(ev.target.value)}}
              placeholder="Numero de serie/Cloud"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl text-amber-400">Armazenamento:</h3>
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
            <h3 className="text-xl text-amber-400">Informações Adicionais:</h3>
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
            <button className="w-80 h-8 bg-amber-400 text-xl rounded-xl my-4 mb-4">Enviar</button>
            <Link
              href="/"
              className="w-80 h-8 flex items-center justify-center bg-amber-400 text-xl rounded-xl p-0 m-0 my-4"
              >Voltar</Link>
          </div>
        </form>
      </section>
    </main>
  )
}
