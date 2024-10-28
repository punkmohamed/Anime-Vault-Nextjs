"use client"
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

const ClientNav = ({ children }: { children: ReactNode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
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

            <button onClick={() => setOpen((prev) => !prev)} className="md:hidden cursor-pointer">
                <Menu className="w-8 h-8 text-white" />
            </button>
            <ul
                className={`fixed  inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 
          transition-transform transform translate-x-full ${open && 'translate-x-0'} md:hidden z-40`}
            >
                <button onClick={() => setOpen((prev) => !prev)} className="absolute top-5 right-5 cursor-pointer">
                    <X className="w-8 h-8 text-white" />
                </button>

                {["/", "/Anime", "/Movies", "/Ovas", "/Specials", "/Schedules"].map((item) => (
                    <li key={item} className="text-2xl hover:text-purple-500">
                        <Link href={`${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item === '/' ? 'Home' : item.substring(1)}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default ClientNav