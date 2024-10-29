import AnimeCard, { AnimeProp } from "@/components/AnimeCard"
import HeaderContact from "@/components/HeaderContact"


const page = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
    const search = (await searchParams).query
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(search)}`);
    if (!response.ok) throw new Error('Failed to fetch anime new');
    const { data } = await response.json()


    return (
        <main className="sm:p-6 py-16 px-8 flex flex-col gap-10 bg-[#0F1117]   ">
            <HeaderContact title="Search Result" />

            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

                {data.length > 0 ?
                    data?.map((item: AnimeProp, index: number) => (
                        <AnimeCard key={item.mal_id} anime={item} index={index} type={item?.type} />
                    )) :
                    (
                        <h1 className="text-3xl text-center">No results found</h1>
                    )
                }
            </section>

        </main>
    )
}

export default page