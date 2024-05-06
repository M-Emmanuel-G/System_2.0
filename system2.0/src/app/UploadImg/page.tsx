
import { db } from "@/lib/prisma";
import Header from "../components/Header";
import UpButton from "../components/UploadButton";
import { Images } from "@prisma/client";
import Image from "next/image";


export default async function UploadImg() {

    const getImages = await db.images.findMany()

    const showImages = getImages.map((image:Images, key:number)=>{
        return(
            <div key={image.id} className="w-[370px] h-350px my-4" >
                <Image 
                    sizes="100vw" 
                    quality={100} 
                    src={image.imageUrl} 
                    alt="" 
                    width={0} 
                    height={0} 
                    className="w-[368px] h-[300px]"
                />
                <span>{image.nameArchive}</span>
            </div>
        )
    })
    

    return (
        <main className="w-screen h-screen min-h-screen flex flex-col items-center justify-between bg-black text-white">
            <section className="w-full h-[90%] flex flex-col items-center">
            <section className="w-full h-1/6">
                <UpButton/>
            </section>
            <section className="w-full h-5/6 flex flex-col items-center overflow-y-auto">
                {showImages}
            </section>
            </section>
        </main>
    );
}

// Retorno do Objeto da foto

// customId: null
// ​​
// key: "377ee2c1-e59d-4402-8672-7d07e43aab8b-4o63ls.png"
// ​​
// name: "unnamed.png"
// ​​
// serverData: null
// ​​
// size: 64939
// ​​
// type: "image/png"
// ​​
// url: "https://utfs.io/f/377ee2c1-e59d-4402-8672-7d07e43aab8b-4o63ls.png"