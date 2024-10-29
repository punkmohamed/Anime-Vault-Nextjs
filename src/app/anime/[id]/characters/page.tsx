
import CharactersSection from '@/components/componentsAnimeDetails/CharactersSection';
import React from 'react'

import LoadMoreChar from '@/components/componentsAnimeDetails/LoadMoreChar';
type PageProps = {
    params: { id: string };
};

const Characters = async ({ params }: PageProps) => {
    const { id } = params;
    if (!id) {
        throw new Error('ID parameter is missing');
    }

    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
    if (!res.ok) throw new Error('Failed to fetch characters');
    const { data: characters } = await res.json();


    const type = true
    if (!characters) return <h1>somthing is wrong</h1>
    return (
        <>
            <CharactersSection characters={characters} id={id} type={type} />
            <LoadMoreChar characters={characters} />
        </>
    )
}

export default Characters