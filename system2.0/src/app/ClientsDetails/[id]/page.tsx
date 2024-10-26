import ButtonBack from "@/app/components/ButtonBack";
import ButtonRemoveClients from "@/app/components/ButtonRemoveClients";
import DvrItem from "@/app/components/DvrItem";
import Header from "@/app/components/Header";
import Loading from "@/app/components/Loading";
import { db } from "@/lib/prisma";
import { Dvr } from "@prisma/client";
import { redirect } from "next/navigation";

interface ClientsDetailsProps{
    params:{
        id:string
    }
}

const ClientsDetail = async ({params}:ClientsDetailsProps) => {

    const getClient = await db.clients.findUnique({
        where:{
            id: params.id
        },
        include:{
            dvr:true
        }
    })

    if(!getClient) redirect("/Clients")

    const showDvrs = getClient.dvr.map((dvr:Dvr)=>{
        return(
            <DvrItem
                dvr={dvr}
            />
        )
    })
    

    return ( 
        <main className="w-screen h-screen flex flex-col">
            <Header/>
            <section className="w-full h-[10%] flex flex-col items-center justify-center">
                <div className="flex flex-col w-full text-center">
                    <div className="w-full flex justify-between items-center">
                        <span className=" text-xl mx-8 my-2 "> {getClient.client}</span>
                        <ButtonRemoveClients
                            id={getClient.id}
                        />
                    </div>
                </div>
            </section>
            <section className="w-full h-[70%] flex flex-col items-center"> 
                {!showDvrs ? "carregando" : showDvrs}
            </section>
            <footer className="flex w-full h-[10%] justify-center items-center">
                <ButtonBack/>
            </footer>
            <Loading/>
        </main>
    );
}
 
export default ClientsDetail;