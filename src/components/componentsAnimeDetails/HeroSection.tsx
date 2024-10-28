import { AnimeDetails } from "@/app/anime/[id]/page"
import { Clock, Film, Star } from "lucide-react"
import Image from "next/image"

const HeroSection = ({ anime }: { anime: AnimeDetails }) => {
    return (
        <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F1117]/80 to-[#0F1117]"></div>
            <Image
                src={anime?.images?.jpg.large_image_url}
                alt={anime?.title}
                fill
                className="object-cover opacity-40"
                priority
            />
            <div className="absolute bottom-0 left-0 p-8 w-full max-w-7xl mx-auto">
                <div className="flex items-start gap-8">
                    <div className="hidden md:block relative w-48 h-72 rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src={anime?.images.jpg.large_image_url}
                            alt={anime?.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold mb-4 text-white/90">{anime?.title}</h1>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {anime?.genres.map((genre) => (
                                <span
                                    key={genre?.name}
                                    className="px-4 py-1.5 rounded-full bg-purple-600/80 text-sm font-medium hover:bg-purple-500 transition-colors"
                                >
                                    {genre?.name}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-6 text-white/80">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <span className="font-semibold">{anime?.score}/10</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Film className="w-5 h-5 text-purple-400" />
                                <span>{anime?.episodes} Episodes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-green-400" />
                                <span>{anime?.duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection