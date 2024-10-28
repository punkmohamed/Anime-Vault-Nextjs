"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard"



const fetchAnime = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=8&page=${page}&order_by=popularity
`)
    const { data } = await response.json()
    const type = 'anime'

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
    ))
}

const fetchMovies = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=movie&limit=8&page=${page}&order_by=popularity
`)
    const { data } = await response.json()
    const type = 'movies'

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
    ))
}
const fetchOvas = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=ova&limit=8&page=${page}
`)
    const { data } = await response.json()
    const type = 'ovas'

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
    ))
}
const fetchSpecials = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=special&limit=8&page=${page}
`)
    const { data } = await response.json()
    const type = 'specials'

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
    ))
}

export {
    fetchAnime, fetchMovies, fetchOvas, fetchSpecials
}