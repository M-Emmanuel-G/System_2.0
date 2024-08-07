import Header from "@/app/components/Header";
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import { db } from "@/lib/prisma";
import ShowDVR from "@/app/components/ShowDVR";
import UpdateDVR from "@/app/components/EditInfos";


export default async function IpirangaPista() {

    dayjs.locale('pt-br');
    dayjs.extend(localeData);

    const allDvrs = await db.clients.findMany({
        include:{
            dvr:true
        },
        where:{
            id:"md28dk2-dn20f2nf82he02jdn2e8do2jd2fh2efj2"
        }
    })


 return (
   <main className="w-screen h-screen flex flex-col justify-center itmes-center bg-black text-white">
        <Header/>
        <section className="w-full h-[90%] flex flex-col items-center justify-center">
        <ShowDVR
                key={allDvrs[0].dvr[0].id}
                cams_installed={allDvrs[0].dvr[0].cams_installed}
                client={allDvrs[0].client}
                user={allDvrs[0].dvr[0].user}
                password={allDvrs[0].dvr[0].password}
                id={allDvrs[0].dvr[0].id}
                ip={allDvrs[0].dvr[0].ip}
                service_port={allDvrs[0].dvr[0].service_port}
                http_port={allDvrs[0].dvr[0].http_port}
                hd={allDvrs[0].dvr[0].hd}
                recording_days={allDvrs[0].dvr[0].recording_days}
                cloud={allDvrs[0].dvr[0].cloud}
                ddns={allDvrs[0].dvr[0].ddns}
                model={allDvrs[0].dvr[0].model}
                
            />
            <UpdateDVR
                 key={allDvrs[0].dvr[0].id}
                 cams_installed={allDvrs[0].dvr[0].cams_installed}
                 client={allDvrs[0].client}
                 user={allDvrs[0].dvr[0].user}
                 password={allDvrs[0].dvr[0].password}
                 id={allDvrs[0].dvr[0].id}
                 ip={allDvrs[0].dvr[0].ip}
                 service_port={allDvrs[0].dvr[0].service_port}
                 http_port={allDvrs[0].dvr[0].http_port}
                 hd={allDvrs[0].dvr[0].hd}
                 recording_days={allDvrs[0].dvr[0].recording_days}
                 cloud={allDvrs[0].dvr[0].cloud}
                 ddns={allDvrs[0].dvr[0].ddns}
                 model={allDvrs[0].dvr[0].model}
            /> 
        </section>
   </main>
 );
}