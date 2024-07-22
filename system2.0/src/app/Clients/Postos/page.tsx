import Link from "next/link";
import Header from "../../components/Header";

export default function GasStation() {
    return (
        <main className="w-screen h-screen flex flex-col bg-black">
            <Header/>
            <section className="w-full h-[90%] flex flex-col items-center justify-center overflow-y-auto">
                <Link 
                    href="/Clients/Postos/PostoShell"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>Posto Shell</strong>
                </Link>
                <Link 
                    href="/Clients/Postos/PostoIpiranga"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>Posto Ipiranga</strong>
                </Link>
                <Link 
                    href="/Clients/Postos/PostoIpiranga"
                    className=" w-96 h-[50px] bg-sky-200 rounded-xl flex justify-center items-center my-2"
                >
                    <strong>Posto Total</strong>
                </Link>
                
            </section>
        </main>
    );
}