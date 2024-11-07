"use client"
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Form from 'next/form';
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

            <div className="flex gap-2 w-[60rem]">
                <Form action="/search" className="md:hidden mb-1 mx-3 mt-2 relative w-full">
                    <input name="query" placeholder="Search anime..." className="w-full bg-gray-800 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </Form>
                <button type="submit" className="md:hidden">
                    <Search className="w-6 h-6" />
                </button>
            </div>


            {children}
            <div className="flex  items-center gap-4 mx-3">
                <Form action="/search" className="hidden md:flex items-center relative">
                    <input
                        name="query"
                        placeholder="Search anime..."
                        className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 w-[200px] transition-all"
                    />
                    <button type="submit" className="cursor-pointer">
                        <Search className="w-4 h-4 absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </button>
                </Form>



                <button onClick={() => setOpen((prev) => !prev)} className="md:hidden cursor-pointer">
                    <Menu className="w-8 h-8 text-white" />
                </button>
            </div>
            <ul
                className={`fixed  inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 
          transition-transform transform  ${open ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}
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