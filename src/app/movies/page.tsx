import HeaderContact from "@/components/HeaderContact"
import LoadMoreMovies from "@/components/LoadMoreMovies"
import { fetchMovies } from "../utils/actions"

const Movies = async () => {
    const { data } = await fetchMovies(1)
    return (
        <main className="sm:p-6 py-16 px-8 flex flex-col gap-10 bg-[#0F1117]   ">
            <HeaderContact title="Explore Movies" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {data}
            </section>
            <LoadMoreMovies />
        </main>
    )
}

export default Movies