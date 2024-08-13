import { DVRs, DvrsProps } from "../Data/register";
import CardService from "../components/CardService";
import Header from "../components/Header";
import ShowDVR from "../components/ShowDVR";

export default async function Clients() {

    const getClients = DVRs.map((client:DvrsProps, key:number)=>{
        return(
            <ShowDVR
                cams_installed={client.cams_installed}
                client={client.client}
                cloud={client.cloud}
                ddns={client.ddns}
                hd={client.hd}
                http_port={client.http_port}
                ip={client.ip}
                model={client.model}
                nickClient={client.nickClient}
                password={client.password}
                recording_days={client.recording_days}
                service_port={client.service_port}
                user={client.user}
                id={client.id}
                key={client.id}
            />
        )
    })

    return (
        <main className="w-screen h-screen flex flex-col bg-black">
            <Header/>
            <section className="w-full h-[90%] flex flex-col items-center overflow-y-auto">
                <h2 className="my-8 text-white text-2xl">Clientes</h2>
                {getClients}
            </section>
        </main>
    );
}