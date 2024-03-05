import Link from "next/link"
import IconLogo from "../assets/ctts-icon.png"
import Image from "next/image"

const Header = ()=>{
    return (
        <header className="w-full h-[10%] flex bg-white items-center justify-center text-black">
            <section className="w-2/6 h-full flex justify-center">
                <Image src={IconLogo} alt="" className="w-1/2 h-full"/>
            </section>
            <section className="w-4/6 h-full bg-white flex justify-start items-center">
                <Link href="/">Inicio</Link>
            </section>
        </header>
    )
}

export default Header