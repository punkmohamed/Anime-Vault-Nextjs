
import HeaderContact from "../HeaderContact"
import AnimeCard, { AnimeProp } from "../AnimeCard"

const TopAnime = async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=8')
    const { data } = await response.json()
    return (
        <div className="flex flex-col gap-5">
            <HeaderContact title="Top Anime" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    data?.map((item: AnimeProp, index: number) => (
                        <AnimeCard key={item.mal_id} anime={item} index={index} />
                    ))
                }
            </section>
        </div>
    )
}

export default TopAnime