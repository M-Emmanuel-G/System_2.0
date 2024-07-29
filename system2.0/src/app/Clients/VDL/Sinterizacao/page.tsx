"use client"

import Header from "@/app/components/Header";
import { Button } from "@/components/ui/button";
import jsPDF from 'jspdf';
// import * as fs from 'fs';
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'


export default function Sinterizacao() {

    dayjs.locale('pt-br');
    dayjs.extend(localeData);

function createPdf() {

   const getInfos = `







   Segue abaixo o envio da O.S, referente a manutenção preventiva do VDL Sinterização!

    Data de envio:  ${dayjs().format("DD-MM-YYYY")}
    Nome do Cliente: VDL Sinterização
    Modelo/Marca do gravador: mhdx-3116
    Usuario: admin  
    Senha: 
    Total de cameras instaladas: 16
    Cloud/NS: 
    IP: 
    Porta de Serviço: 37777
    Porta  HTTP: 8087
    Tamanho do HD/Armazenamento: 1 Terabytes
    Tempo de Gravação: 7 dias

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

//    function convertImageToBase64(filePath: string): string {
//     const imageBuffer = fs.readFileSync(filePath);
//     return imageBuffer.toString('base64');
//   }

  const doc = new jsPDF();

  // Adiciona título
  doc.setFontSize(22);
  doc.text('Preventiva VDL Sinterização', 20, 20);

  // Adiciona subtítulo
  doc.setFontSize(16);
  doc.text(dayjs().format("DD-MM-YYYY"), 20, 30);

  // Adiciona um parágrafo
  doc.setFontSize(12);
  doc.text(
    getInfos,
    20, 40, { maxWidth: 170 }
  );

  // Adiciona uma linha
  doc.line(20, 70, 190, 70);

  // Adiciona uma imagem (assumindo que você tenha uma imagem chamada 'logo.png' no diretório atual)
//   const imgData = convertImageToBase64("../../../../assets/ctts-icon.png") // Substitua '...' pelo conteúdo base64 da imagem
//   doc.addImage(imgData, 'PNG', 20, 80, 50, 50);

  // Adiciona uma nova página e texto nela
  doc.addPage();
  doc.text('Página 2', 20, 20);

  // Salva o PDF com o nome especificado
  doc.save('Jequeri-mercearia.pdf');
}

// Chama a função para criar o PDF

const GeneratePDF = ()=>{
    createPdf();
}

 return (
   <main className="w-screen h-screen flex flex-col justify-center itmes-center bg-black text-white">
        <Header/>
        <section className="w-full h-[90%] flex flex-col items-center">
            <section className="w-96 h-full overflow-y-auto justify-center items-center">
                <div className="py-2">
                    <h2 className="text-2xl my-4 text-amber-300">VDL Sinterização</h2>
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Modelo DVR:</strong>
                    {/* <span className="mr-4">YESHI</span> */}
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Usuario:</strong>
                    {/* <span className="mr-4">admin</span> */}
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Senha:</strong>
                    {/* <span className="mr-4">ctts0745</span> */}
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Cameras instaladas:</strong>
                    {/* <span className="mr-4">7</span> */}
                </div>
                
                <div className="my-4">
                    <h2 className="text-xl text-amber-300">Redes</h2>
                </div>
                
                <div className="py-2 flex justify-between">
                    <strong>IP:</strong>
                    {/* <span className="mr-4">192.168.0.49</span> */}
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Porta de servico</strong>
                    {/* <span className="mr-4">37777</span> */}
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Porta HTTP</strong>
                    {/* <span className="mr-4">80</span> */}
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Acesso remoto:</strong>
                    {/* <span className="mr-4">Sim</span> */}
                </div>
                <div className="py-2 flex justify-between">
                    <strong>DDNS:</strong>
                    {/* <span className="mr-4">Não se aplica</span> */}
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Cloud/NS:</strong>
                    {/* <span className="mr-4">WJCH004667P</span> */}
                </div>

                <div className="my-4">
                    <h2 className="text-xl text-amber-300">Armazenamento</h2>
                </div>

                <div className="py-2 flex justify-between">
                    <strong>Tamanho HD: </strong>
                    {/* <span className="mr-4"> 2TB</span> */}
                </div>
                <div className="py-2 flex justify-between">
                    <strong>Dias de armazenamento: </strong>
                    {/* <span className="mr-4">18 dias</span> */}
                </div>
                <div className="py-2 flex justify-center">
                    <Button className="my-8 w-52 bg-amber-400 text-black text-xl" onClick={GeneratePDF}>Gerar PDF</Button>
                </div>
            </section>
        </section>
   </main>
 );
}