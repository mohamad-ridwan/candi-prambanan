import { Navbar } from "flowbite-react";
import logo from '@/images/logo.png'
import Image from "next/image";

export default function Brand() {
    return (
        <Navbar.Brand href="https://flowbite-react.com">
            <Image
                src={logo}
                alt="candi prambanan"
                height={30}
                width={30}
            />
            {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-2">Candi Prambanan</span>
        </Navbar.Brand>
    )
}