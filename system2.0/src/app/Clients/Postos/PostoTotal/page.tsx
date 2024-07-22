import Header from "@/app/components/Header";
import Link from "next/link";

export default function PostoTotal() {
 return (
   <main className="w-screen h-screen flex flex-col justify-center itmes-center bg-black">
        <Header/>
        <section className="w-full h-[90%] flex flex-col items-center justify-center overflow-y-auto">
        <Link 
            href="/Clients/Postos/PostoTotal/DVR01"
            className=" w-96 h-20 bg-sky-200 rounded-xl my-2 flex justify-center items-center"
        >
            <strong>DVR Pista</strong>
        </Link>
        <Link 
            href="/Clients/Postos/PostoTotal/DVR02"
            className=" w-96 h-20 bg-sky-200 rounded-xl my-2 flex justify-center items-center"
        >
            <strong>DVR Escritório</strong>
        </Link>
        </section>
   </main>
 );
}