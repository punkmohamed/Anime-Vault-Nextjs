import { Play } from "lucide-react"

const TrailerSection = ({ trailer }: { trailer: string | null }) => {
    return (
        <>
            {trailer && (
                <div className="bg-[#161921] rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Play className="w-6 h-6 text-red-500" />
                        Official Trailer
                    </h2>
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${trailer}`}
                            allowFullScreen
                        />
                    </div>
                </div>
            )}</>
    )
}

export default TrailerSection