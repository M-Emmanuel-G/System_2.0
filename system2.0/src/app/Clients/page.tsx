import Link from "next/link";
import Header from "../components/Header";
import CardService from "../components/CardService";

export default function Clients() {
    return (
        <main className="w-screen h-screen flex flex-col bg-black">
            <Header/>
            <section className="w-full h-[90%] flex flex-col items-center">
                <h2 className="my-8 text-white text-2xl">Clientes</h2>
                <CardService
                    path="/Clients/VDL"
                    service="VDL"
                />
                <CardService
                    path="/Clients/Jequeri"
                    service="Jequiri"
                />
                <CardService
                    path="/Clients/Postos"
                    service="Postos"
                />
                <CardService
                    path="/Clients/JaymeMartins"
                    service="Escola Jayme Martins"
                />
                <CardService
                    path="/Clients/LaticiniosIta"
                    service="Laticinios-Ita"
                />
            </section>
        </main>
    );
}