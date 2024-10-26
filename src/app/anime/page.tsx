import LoadMore from "@/components/LoadMore"
import HeaderContact from "@/components/HeaderContact"
import { fetchAnime } from "../utils/actions"

const Anime = async () => {
    const data = await fetchAnime(1)
    return (
        <main className="sm:p-6 py-16 px-8 flex flex-col gap-10 bg-[#0F1117]   ">
            <HeaderContact title="Explore Anime" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {data}
            </section>
            <LoadMore />
        </main>
    )
}
export default Anime