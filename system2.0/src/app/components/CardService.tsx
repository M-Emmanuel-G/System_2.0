import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface CardProps{
    service:string
}

const CardService = ({service}:CardProps)=> {
 return (
    <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <Link href="SendOS">{service}</Link>
    </CardContent>
  </Card>
  
 );
}

export default CardService