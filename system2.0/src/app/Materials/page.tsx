"use client"

import { useState } from "react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import { LogoBase64 } from "../assets/ImageBase64";
import dayjs from "dayjs";
import Input from "../components/Input";

export default function Materials() {

    const [client, setClient] = useState<string>("")
    const [materials, setMaterials] = useState<string>("")

    function createPdf(ev:React.FormEvent) {
        try {
          ev.preventDefault()

          if(!client) return alert("Cliente não informado!")
          if(client.length < 3) return alert("Cliente é necessario ter pelo menos 3 caracteres! ")
          if(!materials) return alert("Materiais utilizados não informado!")

        const getInfos = `

          Materiais utilizados: 

                    ${materials}
       
         `
     
     
       const doc = new jsPDF();
     
       const imgData = LogoBase64
       doc.addImage(imgData, 'PNG', 50, 10, 80, 30);
     
       // Adiciona título
       doc.setFontSize(16);
     
       // Adiciona subtítulo
       doc.setFontSize(12);
       doc.text(`${client}                                                                                                          ${dayjs().format("DD-MM-YYYY")}`, 40, 50);
     
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
       doc.save('Materiais-utilizados.pdf');
     
        } catch (error:any) {
          alert(error.message)
        }
    }

    return (
        <main className="w-screen h-screen flex flex-col bg-black">
            <Header/>
            <section className="w-full h-[90%] flex items-center justify-center text-white flex-col text-2xl">
                <h2 className="my-8" >Materiais utilizados</h2>
                <form className="flex flex-col" onSubmit={createPdf}>
                    <Input
                        onChange={(ev)=>{setClient(ev.target.value)}}
                        value={client}
                        placeholder="Nome do cliente"
                    />
                <textarea
                    className="text-black outline-none text-sm"   
                    cols={18}
                    rows={20}
                    value={materials}
                    onChange={(ev)=>{setMaterials(ev.target.value)}}
                    placeholder="Lista de materiais!"
                />
                    <Button className="w-80 h-12 my-4 bg-amber-400 text-xl hover:bg-amber-400">Gerar Lista</Button>
                </form>
            </section>
        </main>
    );
}