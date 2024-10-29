
import HeaderContact from "../HeaderContact"
import AnimeCard, { AnimeProp } from "../AnimeCard"

const TopAnime = async ({ data }: { data: AnimeProp[] }) => {

    const type = 'anime'
    if (!data) return <h1>somthing is wrong</h1>

    return (
        <div className="flex flex-col gap-5">
            <HeaderContact title="Top Anime" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    data?.map((item: AnimeProp, index: number) => (
                        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
                    ))
                }
            </section>
        </div>
    )
}

export default TopAnime