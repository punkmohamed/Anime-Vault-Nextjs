import { Clock, SwordIcon } from "lucide-react";
import Image from "next/image";
import HeaderContact from "../HeaderContact";
import { AnimeProp } from "../AnimeCard";

const AnimeNow = async ({ data }: { data: AnimeProp[] }) => {

    const defaultAnime: AnimeProp = {
        mal_id: 0,
        title: "Default Title",
        title_japanese: "デフォルトタイトル",
        images: {
            webp: {
                large_image_url: '',
                image_url: "",
                small_image_url: ""
            },
            jpg: {
                image_url: "",
                small_image_url: "",
                large_image_url: ""
            }
        },
        type: "TV",
        episodes: 0,
        airing: false,
        aired: { from: "", to: null },
        duration: "",
        genres: [],
        studios: [],
        synopsis: "",
        popularity: 0,
        score: 0,
        scored_by: 0,
        members: 0,
        favorites: 0,
        season: null,
        year: null,
        url: "",
        approved: false,
        titles: [],
        title_english: "",
        title_synonyms: [],
        source: "",
        status: "",
        rating: "",
        rank: 0,
        background: "",
        broadcast: {
            day: "",
            time: "",
            timezone: "",
            string: ""
        },
        explicit_genres: [],
        themes: [],
        demographics: []
    };
    const news1: AnimeProp = data && data[0] ? data[0] : defaultAnime;
    const news2: AnimeProp = data && data[1] ? data[1] : defaultAnime;
    const news3: AnimeProp = data && data[2] ? data[2] : defaultAnime;
    const news4: AnimeProp = data && data[3] ? data[3] : defaultAnime;



    if (!news1 && !news2 && !news3 && !news4) return <h1>something is wrong</h1>
    return (
        <>
            <HeaderContact title="Recent" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-1">
                <div className="col-span-3 h-96 group relative overflow-hidden rounded-lg">
                    <Image
                        src={news1?.images?.webp?.large_image_url}
                        className="group-hover:scale-110 duration-500 ease-in-out group-hover:rotate-2 transition-all absolute inset-0 top-0 object-center h-full w-full rounded-lg"
                        width={500}
                        height={500}
                        alt={news1?.title}
                    />
                    <div className="flex flex-col gap-3 absolute bottom-0 w-full z-10 p-3 px-6 bg-gradient-to-t from-purple-700/90 via-purple-300/50 to-transparent">
                        <button className="p-0.5 w-fit text-sm font-semibold rounded-lg bg-white border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white uppercase">
                            anime
                        </button>
                        <h2 className="text-white text-2xl">{news1?.title}</h2>
                        <p className="line-clamp-3">{news1?.synopsis}</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <SwordIcon className="rounded-full text-white" /> <span>{news1?.demographics[0]?.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="rounded-full text-white" />
                                <span>{news1?.aired?.from?.split("T")[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 h-96 group relative overflow-hidden rounded-lg">
                    <Image
                        src={news2?.images?.webp?.large_image_url}
                        className="group-hover:scale-105 group-hover:rotate-2 transition-all absolute inset-0 top-0 object-cover object-left h-full w-full rounded-lg"
                        width={500}
                        height={500}
                        alt={news2?.title}
                    />
                    <div className="flex flex-col gap-3 absolute bottom-0 w-full z-10 p-3 bg-gradient-to-t from-purple-700/90 via-orange-300/50 to-transparent">
                        <button className="p-0.5 w-fit text-sm font-semibold rounded-lg bg-white border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white uppercase">
                            anime
                        </button>
                        <h2 className="text-white text-2xl">{news2?.title}</h2>
                        <p className="line-clamp-3">{news2?.synopsis}</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <SwordIcon className="rounded-full text-white" /> <span>{news2?.demographics[0]?.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="rounded-full text-white" />
                                <span>{news2?.aired?.from.split("T")[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 h-96 group relative overflow-hidden rounded-lg">
                    <Image
                        src={news3?.images?.webp?.large_image_url}
                        className="group-hover:scale-105 group-hover:rotate-2 transition-all absolute inset-0 top-0 object-cover object-left h-full w-full rounded-lg"
                        width={500}
                        height={500}
                        alt={news3?.title}
                    />
                    <div className="flex flex-col gap-3 absolute bottom-0 w-full z-10 p-3 bg-gradient-to-t from-purple-700/90 via-orange-300/50 to-transparent">
                        <button className="p-0.5 w-fit text-sm font-semibold rounded-lg bg-white border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white uppercase">
                            anime
                        </button>
                        <h2 className="text-white text-2xl">{news3?.title}</h2>
                        <p className="line-clamp-3">{news3?.synopsis}</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <SwordIcon className="rounded-full text-white" /> <span>{news3?.demographics[0]?.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="rounded-full text-white" />
                                <span>{news3?.aired?.from.split("T")[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 h-96 group relative overflow-hidden rounded-lg">
                    <Image
                        src={news4?.images?.webp?.large_image_url}
                        className="group-hover:scale-105 group-hover:rotate-2 transition-all absolute inset-0 top-0 object-cover object-left h-full w-full rounded-lg"
                        width={500}
                        height={500}
                        alt={news4.title}
                    />
                    <div className="flex flex-col gap-3 absolute bottom-0 w-full z-10 p-3 bg-gradient-to-t from-purple-700/90 via-orange-300/50 to-transparent">
                        <button className="p-0.5 w-fit text-sm font-semibold rounded-lg bg-white border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white uppercase">
                            anime
                        </button>
                        <h2 className="text-white text-2xl">{news4?.title}</h2>
                        <p className="line-clamp-3">{news4?.synopsis}</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <SwordIcon className="rounded-full text-white" /> <span>{news4?.demographics[0]?.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="rounded-full text-white" />
                                <span>{news4?.aired?.from.split("T")[0]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AnimeNow;
