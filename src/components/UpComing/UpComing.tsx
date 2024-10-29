import HeaderContact from "../HeaderContact"
import AnimeCard, { AnimeProp } from "../AnimeCard"

const UpComing = async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=8')
    if (!response.ok) throw new Error('Failed to fetch anime new');
    const { data } = await response.json()
    const type = 'anime'
    if (!data) return <h1>somthing is wrong</h1>
    return (
        <div className="flex flex-col gap-5">
            <HeaderContact title="Up coming Anime" />
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

export default UpComing