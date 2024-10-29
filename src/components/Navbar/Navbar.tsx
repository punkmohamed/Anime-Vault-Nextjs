import Link from "next/link";
import ClientNav from "./ClientNav";

const Navbar = () => {
    return (
        <ClientNav>
            <div className="flex items-center justify-end w-full ">

                <ul
                    className="hidden md:flex gap-6 text-lg items-center"
                >
                    {["/", "/Anime", "/Movies", "/Ovas", "/Specials", "/Schedules"].map((item) => (
                        <li key={item} className="hover:text-purple-500">
                            <Link href={`${item.toLowerCase()}`} >{item === '/' ? 'Home' : item.substring(1)}</Link>
                        </li>
                    ))}
                </ul>

            </div>
        </ClientNav>
    );
};

export default Navbar;
