import AnimeCard, { AnimeProp } from "./AnimeCard"
import HeaderContact from "./HeaderContact"


const TopOvas = async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime?type=ova&limit=8')
    const { data } = await response.json()

    return (
        <div className="flex flex-col gap-4" >
            <HeaderContact title="Top OVA's" />
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

export default TopOvas