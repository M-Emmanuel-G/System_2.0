import Link from "next/link";
import Header from "../components/Header";

export default function Clients() {
    return (
        <main className="w-screen h-screen flex flex-col bg-black">
            <Header/>
            <section className="w-full h-[90%] flex flex-col items-center justify-center">
                <Link 
                    href="/VDL"
                    className=" w-96 h-20 bg-sky-200 rounded-xl my-2 flex justify-center items-center"
                >
                    <strong>VDL</strong>
                </Link>
                <Link 
                    href="/"
                    className=" w-96 h-20 bg-sky-200 rounded-xl my-2 flex justify-center items-center"
                >
                    <strong>Jequiri</strong>
                </Link>
                <Link 
                    href="/"
                    className=" w-96 h-20 bg-sky-200 rounded-xl my-2 flex justify-center items-center"
                >
                    <strong>Postos</strong>
                </Link>
            </section>
        </main>
    );
}