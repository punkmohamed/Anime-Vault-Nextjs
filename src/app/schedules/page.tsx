

import AnimeCard, { AnimeProp } from "@/components/AnimeCard"
import HeaderContact from "@/components/HeaderContact"
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Schedules = async () => {
    const fetchSchedule = async (day: string) => {
        await delay(700);
        const response = await fetch(`https://api.jikan.moe/v4/schedules/${day}`);
        const { data } = await response.json();
        return data;
    };
    const saturday = await fetchSchedule("saturday");
    const sunday = await fetchSchedule("sunday");
    const monday = await fetchSchedule("monday");
    const tuesday = await fetchSchedule("tuesday");
    const wednesday = await fetchSchedule("wednesday");
    const thursday = await fetchSchedule("thursday");
    const friday = await fetchSchedule("friday");



    const type = 'anime'
    return (
        <main className="sm:p-6 py-16 px-8 flex flex-col gap-10 bg-[#0F1117]   ">
            <div className="mb-8 text-center">
                <h1 className="text-5xl font-bold text-white mb-2">Schedules</h1>
                <div className="h-1 w-24 bg-purple-500 mx-auto rounded-full"></div>
            </div>

            <HeaderContact title="Saturdays" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    saturday?.map((item: AnimeProp, index: number) => (
                        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
                    ))
                }
            </section>
            <HeaderContact title="Sunday" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    sunday?.map((item: AnimeProp, index: number) => (
                        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
                    ))
                }
            </section>
            <HeaderContact title="Monday" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    monday?.map((item: AnimeProp, index: number) => (
                        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
                    ))
                }
            </section>
            <HeaderContact title="Tuesday" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    tuesday?.map((item: AnimeProp, index: number) => (
                        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
                    ))
                }
            </section>
            <HeaderContact title="Wednesday" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    wednesday?.map((item: AnimeProp, index: number) => (
                        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
                    ))
                }
            </section>
            <HeaderContact title="Thursday" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    thursday?.map((item: AnimeProp, index: number) => (
                        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
                    ))
                }
            </section>
            <HeaderContact title="Friday" />
            <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    friday?.map((item: AnimeProp, index: number) => (
                        <AnimeCard key={item.mal_id} anime={item} index={index} type={type} />
                    ))
                }
            </section>
        </main>
    )
}

export default Schedules