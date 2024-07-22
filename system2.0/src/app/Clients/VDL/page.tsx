import Link from "next/link";
import Header from "../../components/Header";

export default function VDL() {
    return (
        <main className="w-screen h-screen flex flex-col bg-black">
            <Header/>
            <section className="w-full h-[90%] flex flex-col items-center justify-center overflow-y-auto">
                <Link 
                    href="/Clients/VDL/Sinterizacao"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>Sinterização</strong>
                </Link>
                <Link 
                    href="/"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>Alto Forno</strong>
                </Link>
                <Link 
                    href="/"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>Capela</strong>
                </Link>
                <Link 
                    href="/"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>Tratamento térmico</strong>
                </Link>
                <Link 
                    href="/"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>PCP/Fundição 1 </strong>
                </Link>
                <Link 
                    href="/"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>Portaria</strong>
                </Link>
                <Link 
                    href="/"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>Usinagem</strong>
                </Link>
                <Link 
                    href="/"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>Predio Segurança</strong>
                </Link>
                <Link 
                    href="/"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>Administrativo</strong>
                </Link>
            </section>
        </main>
    );
}