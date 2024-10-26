import { db } from "@/lib/prisma";

const getClients = async() => {
    return await db.clients.findMany()
}
 
export default getClients;