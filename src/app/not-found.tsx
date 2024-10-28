import { ArrowLeftCircleIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const notFound = () => {
    return (
        <div className="items-center justify-center flex flex-col h-96 mb-20 gap-5">
            <Image src="/404.png" className="object-contain size-72" width={300} height={300} alt="" />
            <h1 className="text-white text-3xl">404 Error</h1>
            <p className="text-white">Oops! We can&apos;t find this page.</p>

            <Link href='/' className="rounded-full bg-404 text-black flex gap-3 p-2 py-2" > <span><ArrowLeftCircleIcon /> </span>Back to homepage</Link>
        </div>
    )
}

export default notFound