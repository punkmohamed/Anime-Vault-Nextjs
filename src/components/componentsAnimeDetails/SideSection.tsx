import { AnimeDetails, Recommendation } from "@/app/anime/[id]/page"
import InfoItem from "./InfoItem"
import { Calendar, Clock, Film, Star, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const SideSection = ({ recommendations, anime }: { recommendations: Recommendation[], anime: AnimeDetails }) => {

    return (
        <div>
            <div className="bg-[#161921] rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Information</h2>
                <div className="space-y-4">
                    <InfoItem icon={<Star className="w-4 h-4 text-yellow-400" />} label="Score" value={`${anime?.score}/10`} />
                    <InfoItem icon={<Film className="w-4 h-4 text-blue-400" />} label="Episodes" value={anime?.episodes?.toString()} />
                    <InfoItem icon={<Calendar className="w-4 h-4 text-green-400" />} label="Aired" value={anime?.aired?.string} />
                    <InfoItem icon={<Clock className="w-4 h-4 text-purple-400" />} label="Duration" value={anime?.duration} />
                    <InfoItem icon={<Users className="w-4 h-4 text-pink-400" />} label="Studios" value={anime?.studios?.map(s => s.name).join(', ')} />
                </div>
            </div>

            {/* Recommendations */}
            {recommendations.length > 0 &&
                <div className="bg-[#161921] rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">You Might Also Like</h2>
                    <div className="space-y-4">
                        {recommendations?.slice(0, 5).map((rec) => (
                            <Link
                                href={`/anime/${rec?.entry.mal_id}`}
                                key={rec?.entry.mal_id}
                                className="flex items-center gap-4 bg-[#1A1C25] p-3 rounded-lg hover:bg-[#1F2937] transition-colors"
                            >
                                <div className="relative w-16 h-20 flex-shrink-0">
                                    <Image
                                        src={rec?.entry?.images?.jpg.image_url}
                                        alt={rec?.entry?.title}
                                        fill
                                        className="object-cover rounded"
                                    />
                                </div>
                                <p className="text-sm line-clamp-2 text-white/90">{rec?.entry?.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            }

        </div>
    )
}

export default SideSection