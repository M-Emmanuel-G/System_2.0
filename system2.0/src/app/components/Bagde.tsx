import { Badge } from "@/components/ui/badge";
import { db } from "@/lib/prisma";

interface BadgeProps{
    id:string
}

export default async function BagdeStyle({id}:BadgeProps) {

    const getClient = await db.clients.findMany({
        where:{
            id
        },
        include:{
            dvr:true
        }
    })

    return (
        <Badge variant="outline">{getClient[0].dvr.length}</Badge>
    );
}