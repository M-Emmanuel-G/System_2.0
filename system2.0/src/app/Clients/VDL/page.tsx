import Link from "next/link";
import Header from "../../components/Header";
import CardService from "@/app/components/CardService";

export default function VDL() {
    return (
        <main className="w-screen h-screen flex flex-col bg-black">
            <Header/>
            <section className="w-full h-[90%] flex flex-col items-center justify-center overflow-y-auto">
                <CardService
                    path="/Clients/VDL/Sinterizacao"
                    service="Sinterização"
                />
                <CardService
                    path="/Clients/VDL/Auto-Forno"
                    service="Auto-Forno"
                />
                <CardService
                    path="/Clients/VDL/Capela"
                    service="Capela"
                />
                <CardService
                    path="/Clients/VDL/Tratamento-Termico"
                    service="Tratamento Térmico"
                />
                <CardService
                    path="/Clients/VDL/PCP"
                    service="Fundicao/PCP"
                />
                <CardService
                    path="/Clients/VDL/Portaria"
                    service="Portaria"
                />
                <CardService
                    path="/Clients/VDL/Usinagem"
                    service="Usinagem"
                />
                <CardService
                    path="/Clients/VDL/Predio-Seguranca"
                    service="Predio Segurança"
                />
                <CardService
                    path="/Clients/VDL/Administrativo"
                    service="Administrativo"
                />
            </section>
        </main>
    );
}