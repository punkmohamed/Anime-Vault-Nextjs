"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard"



const fetchAnime = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?limit=8&page=${page}&order_by=popularity
`)
    const { data } = await response.json()
    console.log(data, "data");

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} />
    ))
}

const fetchMovies = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=movie&limit=8&page=${page}&order_by=popularity
`)
    const { data } = await response.json()
    console.log(data, "data");

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} />
    ))
}
const fetchOvas = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=ova&limit=8&page=${page}
`)
    const { data } = await response.json()
    console.log(data, "data");

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} />
    ))
}
const fetchSpecials = async (page: number) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?type=special&limit=8&page=${page}
`)
    const { data } = await response.json()
    console.log(data, "data");

    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.mal_id} anime={item} index={index} />
    ))
}

export {
    fetchAnime, fetchMovies, fetchOvas, fetchSpecials
}