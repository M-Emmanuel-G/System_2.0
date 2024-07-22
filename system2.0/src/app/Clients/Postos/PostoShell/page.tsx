import Header from "@/app/components/Header";
import Link from "next/link";

export default function PostoShell() {
 return (
   <main className="w-screen h-screen flex flex-col justify-center itmes-center">
        <Header/>
        <section className="w-full h-[90%] flex flex-col items-center overflow-y-auto">
        <Link 
            href="/Clients/Postos/PostoShell/DVR01"
            className=" w-96 h-20 bg-sky-200 rounded-xl my-2 flex justify-center items-center"
        >
            <strong>DVR Escritorio</strong>
        </Link>
        <Link 
            href="/Clients/Postos/PostoShell/DVR02"
            className=" w-96 h-20 bg-sky-200 rounded-xl my-2 flex justify-center items-center"
        >
            <strong>DVR Troca de Óleo</strong>
        </Link>
        </section>
   </main>
 );
}