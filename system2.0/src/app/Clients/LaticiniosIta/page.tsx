import CardService from "@/app/components/CardService";
import Header from "@/app/components/Header";

export default function LaticiniosItaServices() {
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-black">
            <Header/>
            <section className="w-full h-[90%] flex flex-col items-center justify-center">
                <CardService
                    path="/Clients/LaticiniosIta/CamerasIPS"
                    service="Cameras IP"
                />
            </section>
        </main>
 );
}