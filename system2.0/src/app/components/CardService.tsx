import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface CardProps{
    service:string
    path:string
}

const CardService = ({service, path}:CardProps)=> {
 return (
    <Card className="w-[300px] h-[40px] flex justify-center items-center relative m-4 bg-black border-none">
      <CardContent className=" w-full h-full flex justify-center items-center m-0 p-0">
        <Link className="w-full h-full flex items-center justify-center absolute bg-sky-600 text-black rounded-xl" href={path}>
        <strong>{service}</strong>
        </Link>
        <ChevronRight className="absolute right-4"/>
      </CardContent>
    </Card>
  
 );
}

export default CardService