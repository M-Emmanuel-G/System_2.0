import CardService from "@/app/components/CardService";
import Header from "@/app/components/Header";

export default function Jequeri() {
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
        <Header/>
        <section className="w-full h-[90%] flex flex-col items-center overflow-y-auto justify-center">
            <CardService
                path="/"
                service="Jequeri OP"
            />
            <CardService
                path="/Clients/Jequeri/Mercearia"
                service="Jequeri Mercearia"
            />
            <CardService
                path="/"
                service="Jequeri Matriz"
            />
            <CardService
                path="/"
                service="Jequeri São José"
            />
        </section>
    </main>

    );
}