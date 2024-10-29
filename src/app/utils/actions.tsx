"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard"



const fetchAnime = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=8&page=${page}&order_by=popularity
`)
    if (!response.ok) throw new Error('Failed to fetch anime new');

    const { data } = await response.json()
    const type = 'anime'
    if (!data) return <h1>somthing is wrong</h1>
    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
    ))
}

const fetchMovies = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=movie&limit=8&page=${page}&order_by=popularity
`)
    if (!response.ok) throw new Error('Failed to fetch anime new');
    const { data } = await response.json()
    const type = 'movies'
    if (!data) return <h1>somthing is wrong</h1>
    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
    ))
}
const fetchOvas = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=ova&limit=8&page=${page}
`)
    if (!response.ok) throw new Error('Failed to fetch anime new');
    const { data } = await response.json()
    const type = 'ovas'
    if (!data) return <h1>somthing is wrong</h1>
    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
    ))
}
const fetchSpecials = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=special&limit=8&page=${page}
`)
    if (!response.ok) throw new Error('Failed to fetch anime new');
    const { data } = await response.json()
    const type = 'specials'
    if (!data) return <h1>somthing is wrong</h1>
    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
    ))
}

export {
    fetchAnime, fetchMovies, fetchOvas, fetchSpecials
}