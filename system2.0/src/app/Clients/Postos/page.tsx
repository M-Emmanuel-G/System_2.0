import Header from "../../components/Header";
import CardService from "@/app/components/CardService";

export default async function GasStation() {
    
    return (
        <main className="w-screen h-screen flex flex-col bg-black">
            <Header/>
            <section className="w-full h-[90%] flex flex-col items-center justify-center overflow-y-auto">
                <CardService 
                    path="/Clients/Postos/PostoShell"
                    service="Posto Shell"
                />
                <CardService 
                    path="/Clients/Postos/PostoIpiranga"
                    service="Posto Ipiranga"
                />
                <CardService 
                    path="/Clients/Postos/PostoTotal"
                    service="Posto Total"
                />
            </section>
        </main>
    );
}