// "use server"

// import { db } from "@/lib/prisma"
// import { revalidatePath } from "next/cache"
// import { redirect } from "next/navigation"

// interface DvrProps{
//     id:string
//     model:string
//     user:string
//     password:string
//     qtdCam:string
//     ip:string
//     servicePort:string
//     httpPort:string
//     hd:string
//     cloud:string
//     ddns:string
//     recDays:string
// }

// export default async function UpdateDvr(dvr:DvrProps) {
  
//         await db.dvr.update({
//             data:{
//                 cams_installed:dvr.qtdCam,
//                 cloud:dvr.cloud,
//                 ddns: dvr.ddns,
//                 hd:dvr.hd,
//                 http_port:dvr.httpPort,
//                 model:dvr.model,
//                 password:dvr.password,
//                 ip:dvr.ip,
//                 recording_days:dvr.recDays,
//                 service_port:dvr.servicePort,
//                 user:dvr.user,
//             },
//             where:{id:dvr.id}
//         })

//         revalidatePath("/Clients/Postos/PostoShell")
//         redirect("/Clients/Postos/PostoShell")

    
// }
