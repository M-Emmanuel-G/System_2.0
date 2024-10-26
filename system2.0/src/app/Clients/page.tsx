import { db } from "@/lib/prisma";
import Header from "../components/Header";
import { Clients } from "@prisma/client";
import ClientsItem from "../components/ClientsItem";
import SaveDvrs from "../components/AddDvr";
import SaveClient from "../components/AddClient";
import Loading from "../components/Loading";


const Clients = async () => {

    const getClients = await db.clients.findMany()

    const showClients = getClients.map((client:Clients, key:number)=>{
        return(
            <ClientsItem
                clients={client}
            />
        )
    })
    
    return (
        <main className="w-screen h-screen flex flex-col">
            <Header/>
            <section className="w-full h-[10%] flex justify-evenly">
                <SaveDvrs
                    clients={getClients}
                />
                <SaveClient/>
            </section>
            <section className="w-full h-[80%] flex items-center flex-col">
                {showClients}
            </section>
            <Loading/>
        </main>
     );
}
 
export default Clients;