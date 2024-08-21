'use client'

import React, { useState } from "react"
import jsPDF from "jspdf"
import dayjs from "dayjs"
import { LogoBase64 } from "../assets/ImageBase64"
import { DVRs, DvrsProps } from "../Data/register"
import { Button } from "@/components/ui/button"

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

const teste = () => {

}
 


  const getClient = DVRs
    .filter((dvr: DvrsProps, key:number)=>{
      return dvr.nickClient === "Postos"
    })
    .map((dvr:DvrsProps, key:number)=>{

          function createPdf() {
           
            const getInfos = `

            Nome do Cliente: ${dvr.client}
            Modelo/Marca do gravador: ${dvr.model}
            Usuario: ${dvr.user}
            Senha: ${dvr.password}
            Total de cameras instaladas: ${dvr.cams_installed}
            IP: ${dvr.ip}
            Porta de Serviço: ${dvr.service_port}
            DDNS ${dvr.ddns}
            Cloud/NS: ${dvr.cloud}
            Porta  HTTP: ${dvr.http_port}
            Tamanho do HD/Armazenamento: ${dvr.hd}
            Tempo de Gravação: ${dvr.recording_days}
        
            
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
           doc.text(`Preventiva Postos V&G, Total e Ipiranga`, 20, 40);
         
           // Adiciona subtítulo
         //   doc.setFontSize(16);
         //   doc.text(dayjs().format("DD-MM-YYYY"), 40, 50);
         
           // Adiciona um parágrafo
           doc.setFontSize(12);
           doc.text(
             getInfos,
             15, 60, { maxWidth: 170 }
           );
         
          //  doc.text(`Preventiva Posto V&G, Total, Ipiranga`, 20,50)
         
           doc.text(`
           Obrigado por conta com os serviços da CTTS...
         
           Rua São Paulo, 103, Bela Vista, Itabirito-MG, CEP 35450-120
           
           TEL  (31) 3979-1063 / (31) 98855-0745
           
           ctts@ctts.com.br / mauricio@ctts.com.br
           
           CNPJ - 08.627124/0001-03      INSC. EST.  - 001.033.657.0074`, 18,240)
         
           // Adiciona uma linha
           doc.text(` Responsavel técnico: `,20, 230);
         
           // Adiciona uma nova página e texto nela
         //   doc.addPage();
         //   doc.text('Página 2', 20, 20);
         
           // Salva o PDF com o nome especificado
           doc.save(`Preventiva-.pdf`);
         }

    })


  
 

 
 // Chama a função para criar o PDF
 
 const GeneratePDF = (ev:React.FormEvent)=>{
     try {

  

     } catch (error:any) {
      alert(error.message)
     }
 }

  return (
    <main className="w-screen h-screen min-h-screen flex flex-col items-center justify-between bg-black text-white">
      <section className="w-96 h-[90%] flex  items-center flex-col  overflow-y-auto">
        <h2 className="text-2xl my-8 text-amber-400">Formulario de Preventivas</h2>
        <Button onClick={teste}>Gerar PDF</Button>
      </section>
    </main>
  )
}
