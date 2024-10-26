
interface CardInfoProps{
    message:string
}

const CardInfo = (message:CardInfoProps) => {

    const verify = ()=>{
        
    }

    return ( 
        <div className="w-40 h-10 bg-red-400 text-sm flex items-center justify-center">
            <span>{message.message}</span>
        </div>
    );
}
 
export default CardInfo