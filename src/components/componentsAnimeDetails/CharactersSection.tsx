import { Character } from '@/app/anime/[id]/page'
import { Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const CharactersSection = ({ characters, id, type }: { characters: Character[], id: string, type?: boolean }) => {


    return (
        <div className="bg-[#161921] rounded-lg p-6 mb-8">
            <div className='flex  justify-between  items-center'>
                <h2 className="text-2xl font-bold mb-6 flex gap-2">
                    <Users className="w-6 h-6 text-purple-400" />
                    Characters & Voice Actors
                </h2>
                {!type && <Link href={`${id}/characters`} className='px-3 py-2 mb-6 text-white font-semibold rounded-lg bg-purple-700 hover:bg-purple-900 '>See all</Link>}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {characters && characters?.slice(0, 10).map((char) => (
                    <div key={char?.character?.mal_id} className="bg-[#1A1C25] rounded-lg p-4 hover:bg-[#1F2937] transition-colors">
                        <div className="relative w-full pt-[130%] mb-3">
                            <Image
                                src={char?.character?.images?.jpg?.image_url}
                                alt={char?.character?.name}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-sm font-semibold truncate text-white/90">{char?.character?.name}</h3>
                        <p className="text-xs text-purple-400 mb-2">{char?.role}</p>
                        {char?.voice_actors?.[0] && (
                            <div className="text-xs text-gray-400">
                                VA: {char?.voice_actors[0].person.name}
                                <span className="text-gray-500"> ({char?.voice_actors[0].language})</span>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CharactersSection