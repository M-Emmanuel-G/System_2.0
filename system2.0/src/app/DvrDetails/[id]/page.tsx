import ButtonBack from "@/app/components/ButtonBack";
import ButtonRemove from "@/app/components/ButtonRemove";
import UpdateDVR from "@/app/components/EditInfos";
import Header from "@/app/components/Header";
import Loading from "@/app/components/Loading";
import { db } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

interface DvrDetailProps{
    params:{
        id:string
    }
}

export default async function DvrDetail({params}:DvrDetailProps) {
 
 const getDvr = await db.dvr.findUnique({
    where:{
        id: params.id
    }
 })

 if(!getDvr) redirect("/Clients") 

    return (
        <main className="w-screen h-screen flex flex-col">
            <Header/>
            <section className="w-full h-[70%] overflow-y-auto">
                <div className="w-full flex justify-between">
                    <h2 className="text-xl my-2 mx-8">{getDvr?.description}</h2>
                    <ButtonRemove
                        id={getDvr.id}
                    />
                </div>
                <div className=" mx-8 my-2">
                    <strong>Modelo: </strong>
                    <span>{getDvr?.model}</span>
                </div>
                <div className="mx-8 my-2">
                    <strong>Usuário: </strong>
                    <span>{getDvr?.user}</span>
                </div>
                <div className="mx-8 my-2">
                    <strong>Senha: </strong>
                    <span>{getDvr?.password}</span>
                </div>
                <div className="mx-8 my-2">
                    <strong>Cameras: </strong>
                    <span>{getDvr?.cams_installed}</span>
                </div>

                <div className="my-4 mx-8">
                    <h2 className="text-xl">Rede:</h2>
                </div>

                <div className="mx-8 my-2">
                    <strong>IP: </strong>
                    <span>{getDvr?.ip}</span>
                </div>
                <div className="mx-8 my-2">
                    <strong>Porta de serviço: </strong>
                    <span>{getDvr?.service_port}</span>
                </div>
                <div className="mx-8 my-2">
                    <strong>Porta http: </strong>
                    <span>{getDvr?.http_port}</span>
                </div>
                <div className="mx-8 my-2">
                    <strong>Cloud: </strong>
                    <span>{getDvr?.cloud}</span>
                </div>
                <div className="mx-8 my-2">
                    <strong>Ddns: </strong>
                    <span>{getDvr?.ddns}</span>
                </div>

                <div className="my-4 mx-8">
                    <h2 className="text-xl">Informações:</h2>
                </div>

                <div className="mx-8 my-2">
                    <strong>Armazenamento: </strong>
                    <span>{getDvr?.hd}</span>
                </div><div className="mx-8 my-2">
                    <strong>Dias de gravação: </strong>
                    <span>{getDvr?.recording_days} dias</span>
                </div>
            </section>
            <section className="w-full h-[20%] flex flex-col items-center justify-center">
                <UpdateDVR
                    cams_installed={getDvr.cams_installed}
                    client={getDvr.name_Client}
                    cloud={getDvr.cloud}
                    ddns={getDvr.ddns}
                    hd={getDvr.hd}
                    http_port={getDvr.http_port}
                    service_port={getDvr.service_port}
                    ip={getDvr.ip}
                    model={getDvr.model}
                    password={getDvr.password}
                    recording_days={getDvr.recording_days}
                    user={getDvr.user}
                    id={getDvr.id}
                    nickClient=""
                />
                <ButtonBack/>
           </section>
            <Loading/>
        </main>
 );
}