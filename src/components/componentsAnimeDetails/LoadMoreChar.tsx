"use client";
import { Character } from "@/app/anime/[id]/page";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const BATCH_SIZE = 10;

const LoadMoreChar = ({ characters }: { characters: Character[] }) => {
    const { ref, inView } = useInView();
    const [displayedCharacters, setDisplayedCharacters] = useState<Character[]>([]);
    const [endIndex, setEndIndex] = useState(BATCH_SIZE);

    useEffect(() => {
        if (inView) {
            const newBatch = characters.slice(endIndex, endIndex + BATCH_SIZE);
            setDisplayedCharacters((prev) => [...prev, ...newBatch]);
            setEndIndex((prev) => prev + BATCH_SIZE);
        }
    }, [inView, characters, endIndex]);

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {displayedCharacters?.map((char) => (
                    <div key={char?.character?.mal_id} className="bg-[#1A1C25] rounded-lg p-4 hover:bg-[#1F2937] transition-colors">
                        <div className="relative w-full pt-[130%] mb-3">
                            <Image
                                src={char?.character?.images?.jpg?.image_url || "/placeholder.jpg"}
                                alt={char?.character?.name || "Character"}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-sm font-semibold truncate text-white/90">{char?.character?.name || "Unknown Character"}</h3>
                        <p className="text-xs text-purple-400 mb-2">{char.role || "Unknown Role"}</p>
                        {char.voice_actors?.[0] && (
                            <div className="text-xs text-gray-400">
                                VA: {char.voice_actors[0].person.name}
                                <span className="text-gray-500"> ({char?.voice_actors[0].language})</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {displayedCharacters.length < characters.length - 10 && (
                <section className="flex justify-center items-center w-full mt-6">
                    <div ref={ref}>
                        <Image
                            src="/spinner.svg"
                            alt="Loading more characters"
                            width={56}
                            height={56}
                            className="object-contain"
                        />
                    </div>
                </section>
            )}
        </>
    );
};

export default LoadMoreChar;
