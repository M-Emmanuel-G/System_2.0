"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import jsPDF from "jspdf";
import GetDate from "../services/GetDate";
import { LogoBase64 } from "../assets/ImageBase64";
import { dvr } from "@prisma/client";
import { DvrsProps } from "../Data/register";
import { ChevronRight } from "lucide-react";


export default function ShowDVR(dvr:DvrsProps) {

    dayjs.locale('pt-br');
    dayjs.extend(localeData);

    function createPdf() {

        const getInfos = `
     
     
     
     
     
     
     
        Segue abaixo o envio da O.S., referente a manutenção preventiva, de Posto Shell!
     
         Data de envio:  ${GetDate()}
         Nome do Cliente: ${dvr.client}
         Modelo/Marca do gravador: ${dvr.model}
         Usuario: ${dvr.user} 
         Senha: ${dvr.password}
         Total de cameras instaladas: ${dvr.cams_installed}
         IP: ${dvr.ip}
         Porta de Serviço: ${dvr.service_port}
         Porta  HTTP: ${dvr.http_port} 
         Tamanho do HD/Armazenamento: ${dvr.hd}
         Tempo de Gravação: ${dvr.recording_days} dias
     
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
     
     
     
     
     
     Obrigado por conta com os serviços da CTTS...
     
     Rua São Paulo, 103, Bela Vista, Itabirito-MG, CEP 35450-120
     
     TEL  (31) 3979-1063 / (31) 98855-0745
     
     ctts@ctts.com.br / mauricio@ctts.com.br
     
     CNPJ - 08.627124/0001-03      INSC. EST.  - 001.033.657.0074
     
        `
     
       const doc = new jsPDF();
     
       // Adiciona título
       doc.setFontSize(18);
       doc.text(`Preventiva: ${dvr.client}`, 20, 60);
     
       // Adiciona subtítulo
       doc.setFontSize(16);
       doc.text(dayjs().format("DD-MM-YYYY"), 20, 68);
     
       // Adiciona um parágrafo
       doc.setFontSize(12);
       doc.text(
         getInfos,
         20, 40, { maxWidth: 170 }
       );
     
       // Adiciona uma linha
       doc.line(20, 70, 190, 70);
     
    //    Adiciona uma imagem (assumindo que você tenha uma imagem chamada 'logo.png' no diretório atual)
       const imgData = LogoBase64 // Substitua '...' pelo conteúdo base64 da imagem
       doc.addImage(imgData, 'PNG', 80, 10, 60, 40);
     
       // Salva o PDF com o nome especificado
       doc.save(`Preventiva - ${dvr.client}.pdf`);
     }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-80 text-black text-xl bg-orange-500 rounded-xl p-4 flex my-2 items-center justify-between">{dvr.client} <ChevronRight/> </AlertDialogTrigger>
            <AlertDialogContent className="bg-black border-0 overflow-y-auto">
                <AlertDialogHeader>
                <AlertDialogTitle className="text-amber-300">{dvr.client}</AlertDialogTitle>
                <AlertDialogDescription>
                <section className="w-full h-[500px] overflow-y-auto justify-center items-center text-white">
                <div className="py-2 flex justify-between">
                    <strong>Modelo DVR:</strong>
                    <span className="mr-4">{dvr.model}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Usuario:</strong>
                    <span className="mr-4">{dvr.user}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Senha:</strong>
                    <span className="mr-4">{dvr.password}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Cameras instaladas:</strong>
                    <span className="mr-4">{dvr.cams_installed}</span>
                </div>
                
                <div className="my-4">
                    <h2 className="text-xl text-amber-300">Redes</h2>
                </div>
                
                <div className="py-2 flex justify-between">
                    <strong>IP:</strong>
                    <span className="mr-4">{dvr.ip}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Porta de servico</strong>
                    <span className="mr-4">{dvr.service_port}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Porta HTTP</strong>
                    <span className="mr-4">{dvr.http_port}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>DDNS:</strong>
                    <span className="mr-4">{dvr.ddns}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Cloud/NS:</strong>
                    <span className="mr-4">{dvr.cloud}</span>
                </div>

                <div className="my-4">
                    <h2 className="text-xl text-amber-300">Armazenamento</h2>
                </div>

                <div className="py-2 flex justify-between">
                    <strong>Tamanho HD: </strong>
                    <span className="mr-4"> {dvr.hd}</span>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Dias de armazenamento: </strong>
                    <span className="mr-4">{dvr.recording_days} dias</span>
                </div>
            </section>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={createPdf}>Gerar PDF</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
}