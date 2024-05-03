"use client"
import { useState } from "react";
import Header from "../components/Header";
import { UploadButton } from "../components/UploadThings";

interface ImagesProps{
    images:string
}

export default function UploadImg() {

    const [imgs, setImgs] = useState<ImagesProps>()


    return (
        <main className="w-screen h-screen min-h-screen flex flex-col items-center justify-between bg-black text-white">
            <Header/>
            <section className="w-full h-[90%] flex flex-col items-center">
            <section className="w-full h-1/6">
                <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        setImgs({
                            images:res[0].url
                        },)
                    console.log(res)    
                    alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                    }}
                />
            </section>
            <section className="w-full h-5/6 bg-red-400">
                
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