// "use client"

// import {
//     AlertDialog,
//     AlertDialogAction,
//     AlertDialogCancel,
//     AlertDialogContent,
//     AlertDialogDescription,
//     AlertDialogFooter,
//     AlertDialogHeader,
//     AlertDialogTitle,
//     AlertDialogTrigger,
//   } from "@/components/ui/alert-dialog"
// import dayjs from 'dayjs'
// import localeData from 'dayjs/plugin/localeData'
// import { useState } from "react";
// import Input from "./Input";
// import UpdateDvr from "../actions/UpdateDVR";
// import { dvr } from "@prisma/client";

// export default function UpdateDVR(dvr:dvr) {

//     const [model, setModel] = useState<string>(dvr.model)
//     const [user, setUser] = useState<string>(dvr.user)
//     const [password, setPassword] = useState<string>(dvr.password)
//     const [qtdCam, setQtdCam] = useState<string>(dvr.cams_installed)
//     const [ip, setIp] = useState<string>(dvr.ip)
//     const [servicePort, setServicePort] = useState<string>(dvr.service_port)
//     const [httpPort, setHttpPort] = useState<string>(dvr.http_port)
//     const [hd, setHd] = useState<string>(dvr.hd)
//     const [cloud, setCloud] = useState<string>(dvr.cloud)
//     const [ddns, setDdns] = useState<string>(dvr.ddns)
//     const [recDays, setRecDays] = useState<string>(dvr.recording_days)

//     dayjs.locale('pt-br');
//     dayjs.extend(localeData);

//     const saveUpdate = async ()=>{

//         const body = {
//             id:dvr.id,
//             model,
//             user,
//             password,
//             qtdCam,
//             ip,
//             servicePort,
//             httpPort,
//             hd,
//             cloud,
//             ddns,
//             recDays
//         }
        
//        await UpdateDvr(body)

//        alert("DVR atualizado com sucesso!")

//     }

//     return (
//         <AlertDialog>
//             <AlertDialogTrigger className="w-80 text-black text-xl bg-orange-500 rounded-xl p-4 my-4">Atualizar DVR</AlertDialogTrigger>
//             <AlertDialogContent className="bg-black border-0 overflow-y-auto">
//                 <AlertDialogHeader>
//                 <AlertDialogTitle className="text-orange-500 text-2xl text-center mb-8">{dvr.name_Client}</AlertDialogTitle>
//                 <AlertDialogDescription>
//                 <section className="w-full h-[500px] overflow-y-auto justify-center items-center text-white">
//                     <form className=" w-full flex flex-col items-center">
//                     <h2 className="text-xl text-orange-500 text-start">Informações básicas</h2>
//                         <Input
//                             onChange={(ev)=>{setModel(ev.target.value)}}
//                             value={model}
//                             placeholder="Modelo"
//                         />
//                         <Input
//                             onChange={(ev)=>{setUser(ev.target.value)}}
//                             value={user}
//                             placeholder="Usuário"
//                         />
//                         <Input
//                             onChange={(ev)=>{setPassword(ev.target.value)}}
//                             value={password}
//                             placeholder="Senha"
//                         />
//                         <Input
//                             onChange={(ev)=>{setQtdCam(ev.target.value)}}
//                             value={qtdCam}
//                             placeholder="Cameras instaladas"
//                         />
//                         <h2 className="text-xl text-orange-500 text-start">Rede:</h2>
//                         <Input
//                             onChange={(ev)=>{setIp(ev.target.value)}}
//                             value={ip}
//                             placeholder="IP"
//                         />
//                         <Input
//                             onChange={(ev)=>{setHttpPort(ev.target.value)}}
//                             value={httpPort}
//                             placeholder="Porta HTTP"
//                         />
//                         <Input
//                             onChange={(ev)=>{setServicePort(ev.target.value)}}
//                             value={servicePort}
//                             placeholder="Porta de servico"
//                         />
//                         <Input
//                             onChange={(ev)=>{setCloud(ev.target.value)}}
//                             value={cloud}
//                             placeholder="CLOUD"
//                         />
//                         <Input
//                             onChange={(ev)=>{setDdns(ev.target.value)}}
//                             value={ddns}
//                             placeholder="DDNS"
//                         />
//                         <h2 className="text-xl text-orange-500 text-start">Armazenamento:</h2>
//                         <Input
//                             onChange={(ev)=>{setHd(ev.target.value)}}
//                             value={hd}
//                             placeholder="HD"
//                         />
//                         <Input
//                             onChange={(ev)=>{setRecDays(ev.target.value)}}
//                             value={recDays}
//                             placeholder="Dias de gravação"
//                         />
//                     </form>
//                 </section>
//                 </AlertDialogDescription>
//                 </AlertDialogHeader>
//                 <AlertDialogFooter>
//                 <AlertDialogCancel>Cancelar</AlertDialogCancel>
//                 <AlertDialogAction className="bg-emerald-400 hover:bg-emerald-500" onClick={saveUpdate}>Salvar</AlertDialogAction>
//                 </AlertDialogFooter>
//             </AlertDialogContent>
//         </AlertDialog>

//     );
// }