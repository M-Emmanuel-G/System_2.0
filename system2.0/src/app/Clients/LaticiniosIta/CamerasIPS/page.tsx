import CardService from "@/app/components/CardService";
import Header from "@/app/components/Header";

export default function CameraIPS() {
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
            <Header/>
            <section className="w-full h-[90%] flex flex-col items-center overflow-y-auto justify-center">
              <CardService
                service="Fabrica"
                path="/Clients/LaticiniosIta/CamerasIPS/Fabrica"
              />
            </section>
        </main>
 );
}