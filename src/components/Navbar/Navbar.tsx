import Link from "next/link";
import ClientNav from "./ClientNav";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    return (
        <ClientNav>
            <div className="flex items-center justify-between w-full">

                <input
                    id="menu-toggle"
                    type="checkbox"
                    className="hidden peer"
                />


                <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
                    <Menu className="w-8 h-8 text-white" />
                </label>

                <ul
                    className="hidden md:flex gap-6 text-lg items-center"
                >
                    {["Home", "Anime", "Movies", "Ovas", "Specials"].map((item) => (
                        <li key={item} className="hover:text-purple-500">
                            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                </ul>

                <ul
                    className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center gap-8 
          transition-transform transform translate-x-full peer-checked:translate-x-0 md:hidden z-40"
                >
                    {/* Close Icon */}
                    <label htmlFor="menu-toggle" className="absolute top-5 right-5 cursor-pointer">
                        <X className="w-8 h-8 text-white" />
                    </label>

                    {["Home", "Anime", "Movies", "Ovas", "Specials"].map((item) => (
                        <li key={item} className="text-2xl hover:text-purple-500">
                            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </ClientNav>
    );
};

export default Navbar;
