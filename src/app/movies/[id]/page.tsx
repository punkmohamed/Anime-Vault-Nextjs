
import HeroSection from '@/components/componentsAnimeDetails/HeroSection';
import TrailerSection from '@/components/componentsAnimeDetails/TrailerSection';
import SynpsisSection from '@/components/componentsAnimeDetails/SynpsisSection';
import CharactersSection from '@/components/componentsAnimeDetails/CharactersSection';
import EpisodesSection from '@/components/componentsAnimeDetails/EpisodesSection';
import SideSection from '@/components/componentsAnimeDetails/SideSection';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface AnimeDetails {
    title: string;
    synopsis: string;
    score: number;
    episodes: number;
    status: string;
    aired: { string: string };
    images: { jpg: { large_image_url: string } };
    genres: Array<{ name: string }>;
    studios: Array<{ name: string }>;
    duration: string;
    rating: string;
    trailer: {
        youtube_id: string | null;
        url: string;
        embed_url: string;
    };
}


export interface Character {
    character: {
        name: string;
        images: { jpg: { image_url: string } };
        mal_id: number;
    };
    role: string;
    voice_actors: Array<{
        person: {
            name: string;
            images: { jpg: { image_url: string } };
        };
        language: string;
    }>;
}

export interface Recommendation {
    entry: {
        mal_id: number;
        title: string;
        images: { jpg: { image_url: string } };
    };
}


async function getAnimeDetails(id: string) {
    await delay(500);
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
    if (!res.ok) throw new Error('Failed to fetch anime details');
    return res.json();
}

async function getAnimeCharacters(id: string) {
    await delay(500);
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
    if (!res.ok) throw new Error('Failed to fetch characters');
    return res.json();
}

async function getAnimeRecommendations(id: string) {
    await delay(500);
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/recommendations`);
    if (!res.ok) throw new Error('Failed to fetch recommendations');
    return res.json();
}
const MovieDetail = async ({ params }: { params: { id: string } }) => {



    const [animeData, charactersData, recommendationsData] = await Promise.all([
        getAnimeDetails(params.id),
        getAnimeCharacters(params.id),
        getAnimeRecommendations(params.id),
    ]);

    const anime: AnimeDetails = animeData.data;
    const characters: Character[] = charactersData.data;
    const recommendations: Recommendation[] = recommendationsData.data;
    if (!anime && !characters && !recommendations) return <h1>somthing is wrong</h1>
    return (
        <div className="min-h-screen bg-[#0F1117] text-white pb-10">
            {/* Enhanced Hero Section */}
            <HeroSection anime={anime} />
            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 mt-8">
                {/* Trailer Section */}
                <TrailerSection trailer={anime?.trailer?.youtube_id} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        {/* Synopsis Section */}
                        <SynpsisSection synopsis={anime?.synopsis} />
                        {/* Characters Section */}
                        <CharactersSection characters={characters} id={params?.id} />
                        {/* Episodes Section (if available) */}
                        <EpisodesSection episodes={anime?.episodes} duration={anime?.duration} />
                    </div>
                    {/* Side Info */}
                    <SideSection recommendations={recommendations} anime={anime} />
                </div>
            </div>
        </div>
    );
}

export default MovieDetail