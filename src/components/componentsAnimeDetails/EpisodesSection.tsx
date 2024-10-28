import { Film } from "lucide-react"

type EpisodesSectionProps = {
    episodes: number,
    duration: string
}
const EpisodesSection = ({ episodes, duration }: EpisodesSectionProps) => {
    return (
        <>
            {episodes > 0 && (
                <div className="bg-[#161921] rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Film className="w-6 h-6 text-blue-400" />
                        Episodes
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {[...Array(episodes)].map((_, index) => (
                            <div key={index} className="bg-[#1A1C25] rounded-lg p-4 hover:bg-[#1F2937] transition-colors cursor-pointer">
                                <div className="text-lg font-semibold text-white/90">Episode {index + 1}</div>
                                <div className="text-xs text-gray-400 mt-1">
                                    Duration: {duration}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default EpisodesSection