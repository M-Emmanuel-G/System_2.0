import Header from "@/app/components/Header";
import CardService from "@/app/components/CardService";


export default function SaoJose() {

 return (
    <main className="w-screen h-screen flex flex-col justify-center itmes-center bg-black text-white">
        <Header/>
        <section className="w-full h-[90%] flex flex-col items-center justify-center">
          <CardService
            path="/Clients/Jequeri/Sao-Jose/DVR01"
            service="DVR-01"
          />
          <CardService
            path="/Clients/Jequeri/Sao-Jose/DVR02"
            service="DVR-02"
          />
        </section>
    </main>
 );
}