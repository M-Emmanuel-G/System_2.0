import Link from "next/link";
import Header from "../../components/Header";

export default function DVR02() {
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
            </section>
        </main>
    );
}