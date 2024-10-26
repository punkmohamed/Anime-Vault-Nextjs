"use client"
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

const ClientNav = ({ children }: { children: ReactNode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [isScrolled]);

    return (
        <nav className={`sticky top-0 ${isScrolled ? 'bg-nav' : 'bg-transparent '} text-white py-2 px-9 z-50 flex items-center justify-between transition-colors ease-out`}>
            <Image src="./logo.svg" className=" size-12 object-cover " width={40} height={40} alt="logo" />
            {children}
        </nav>
    )
}

export default ClientNav