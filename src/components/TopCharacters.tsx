import React from 'react';
import { Heart, Trophy } from 'lucide-react';
import Image from 'next/image';

// Define types for the API response
interface Character {
    mal_id: number;
    name: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
    favorites: number;
}

interface ApiResponse {
    data: Character[];
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
        current_page: number;
        items: {
            count: number;
            total: number;
            per_page: number;
        };
    };
}
const TopCharacters = async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/characters?limit=10');
    const { data: characters }: ApiResponse = await response.json();



    const getRankColor = (rank: number): string => {
        switch (rank) {
            case 1:
                return 'text-yellow-400';
            case 2:
                return 'text-gray-300';
            case 3:
                return 'text-amber-600';
            default:
                return 'text-purple-400';
        }
    };

    const getRankIcon = (rank: number) => {
        if (rank <= 3) {
            return <Trophy className={`${getRankColor(rank)} w-6 h-6`} />;
        }
        return <span className="text-purple-400 font-bold">#{rank}</span>;
    };

    return (
        <div className="min-h-screen bg-[#090b13] p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">Top Anime Characters</h1>
                    <div className="h-1 w-32 bg-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Table Container */}
                <div className="bg-[#0F1117] rounded-2xl shadow-xl border border-[#161921] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#040714]">
                                    <th className="px-6 py-5 text-left text-sm font-semibold text-purple-400">Rank</th>
                                    <th className="px-6 py-5 text-left text-sm font-semibold text-purple-400">Character</th>
                                    <th className="px-6 py-5 text-right text-sm font-semibold text-purple-400">Favorites</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#161921]">
                                {characters?.map((character, index) => (
                                    <tr
                                        key={character.mal_id}
                                        className="hover:bg-[#161921] transition-all duration-300 ease-in-out group"
                                    >
                                        <td className="px-6 py-4 w-24">
                                            <div className="flex items-center gap-2">
                                                {getRankIcon(index + 1)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <Image
                                                        src={character.images.jpg.image_url}
                                                        alt={character.name}
                                                        width={48}
                                                        height={48}
                                                        className="w-12 h-12 rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    <div className="absolute inset-0 rounded-lg ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300"></div>
                                                </div>
                                                <div>
                                                    <div className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                                                        {character.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Heart
                                                    className="w-4 h-4 text-purple-400 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-300"
                                                />
                                                <span className="text-purple-400 group-hover:text-pink-500 transition-colors duration-300">
                                                    {character.favorites}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCharacters;