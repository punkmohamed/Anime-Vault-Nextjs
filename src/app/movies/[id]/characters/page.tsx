import CharactersSection from '@/components/componentsAnimeDetails/CharactersSection';
import React from 'react'

import LoadMoreChar from '@/components/componentsAnimeDetails/LoadMoreChar';

const Characters = async ({ params }: { params: { id: string } }) => {
    const id = params.id

    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
    if (!res.ok) throw new Error('Failed to fetch characters');
    const { data: characters } = await res.json();


    const type = true

    return (
        <>
            <CharactersSection characters={characters} id={params?.id} type={type} />
            <LoadMoreChar characters={characters} />
        </>
    )
}

export default Characters