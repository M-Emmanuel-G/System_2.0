"use server"

import { db } from "@/lib/prisma"


interface UploadProps{
    imageUrl:string,
    nameArchive:string
}

export default async function AddImage({imageUrl, nameArchive}:UploadProps) {
    await db.images.create({
        data:{
            imageUrl,
            nameArchive
        }
    })
}