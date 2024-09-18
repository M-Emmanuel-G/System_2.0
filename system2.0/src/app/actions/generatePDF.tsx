"use client"

import jsPDF from "jspdf";
import { DvrsProps } from "../Data/register";
import dayjs, { localeData } from "dayjs";
import GetDate from "../services/GetDate";
import { LogoBase64 } from "../assets/ImageBase64";

const GeneratePDF = (dvr:DvrsProps) => {

    dayjs.locale('pt-br');
    dayjs.extend(localeData);


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
         Ddns: ${dvr.ddns} 
         Tamanho do HD/Armazenamento: ${dvr.hd}
         Tempo de Gravação: ${dvr.recording_days}
     
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

 
export default GeneratePDF;