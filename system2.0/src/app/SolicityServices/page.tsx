"use client"

import { useState } from "react";
import Header from "../components/Header";
import jsPDF from "jspdf";
import { LogoBase64 } from "../assets/ImageBase64";
import dayjs from "dayjs";
import Input from "../components/Input";
import { Button } from "@/components/ui/button";

const SolicityService = () => {

    const [materials, setMaterials] = useState<string>("Cameras")
    const [client, setClient] = useState<string>("")
    const [solicity, setSolicity] = useState<string>("Orçamento")
    const [description, setDescription] = useState<string>("")

    function createPdf(ev:React.FormEvent) {
        try {
          ev.preventDefault()

          if(!client) return alert("Cliente não informado!")
          if(client.length < 3) return alert("No campo cliente, é necessário ter pelo menos 3 caractéres!")
          if(!materials) return alert("Solicitação não informada!")

        const getInfos = `

            Serviços solicitados

            ${materials}
       
         `
     
     
       const doc = new jsPDF();
     
       const imgData = LogoBase64
       doc.addImage(imgData, 'PNG', 50, 10, 80, 30);
     
       // Adiciona título
       doc.setFontSize(16);
     
       // Adiciona subtítulo
       doc.setFontSize(12);
       doc.text(`${client}                                                                                                ${dayjs().format("DD-MM-YYYY")}`, 40, 50);
     
       // Adiciona um parágrafo
       doc.setFontSize(12);
       doc.text(
         getInfos,
         15, 60, { maxWidth: 170 }
       );
     
       doc.text(`
     
       Rua São Paulo, 103, Bela Vista, Itabirito-MG, CEP 35450-120
       
       TEL  (31) 3979-1063 / (31) 98855-0745
       
       ctts@ctts.com.br / mauricio@ctts.com.br
       
       CNPJ - 08.627124/0001-03      INSC. EST.  - 001.033.657.0074`, 18,250)
     
       // Adiciona uma linha
     //   doc.line(20, 70, 190, 70);
     
       // Adiciona uma nova página e texto nela
     //   doc.addPage();
     //   doc.text('Página 2', 20, 20);
     
       // Salva o PDF com o nome especificado
       doc.save(`Solicitacao-${client}.pdf`);
     
        } catch (error:any) {
          alert(error.message)
        }
    }

    return (  
        <main className="w-screen h-screen flex flex-col items-center justify-center">
            <Header/>
            <section className="w-full h-[90%] flex items-center justify-center">
                <form className="flex flex-col" onSubmit={createPdf}>
                    <Input
                        onChange={(ev)=>{setClient(ev.target.value)}}
                        value={client}
                        placeholder="Nome do cliente"
                    />
                    <select
                      className="w-80 h-10 text-center bg-transparent"
                      onChange={(ev)=>{setSolicity(ev.target.value)}}
                      value={solicity}
                    >
                      <option>Orçamento</option>
                      <option>Manutenção</option>
                    </select>
                    <select
                      className="w-80 h-10 text-center bg-transparent"
                      onChange={(ev)=>{setMaterials(ev.target.value)}}
                      value={materials}
                    >
                      <option>Cameras</option>
                      <option>Alarme</option>
                      <option>Portao Eletronico</option>
                      <option>Rede</option>
                      <option>Sonorização</option>
                    </select>
                    <textarea
                      className="text-black outline-none text-sm text-center border-2 border-black rounded-xl"   
                      cols={18}
                      rows={15}
                      value={description}
                      onChange={(ev)=>{setDescription(ev.target.value)}}
                      placeholder="Descrição!"
                  />
                    
                    <Button className="w-80 h-12 my-4 bg-black text-xl hover:bg-black">Gerar Solicitação</Button>
                </form>
            </section>
        </main>
     );
}
 
export default SolicityService;