import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface CardProps{
    service:string
}

const CardService = ({service}:CardProps)=> {
 return (
    <Card className="w-[300px] h-[50px] flex justify-center items-center m-4">
      <CardContent className=" w-full h-full flex justify-center items-center m-0 p-0">
        <Link className="w-full h-full flex items-center justify-center" href="SendOS">{service}</Link>
      </CardContent>
    </Card>
  
 );
}

export default CardService