import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import Link from "next/link";
type Genre = {
  mal_id: number;
  name: string;
};

type Studio = {
  mal_id: number;
  name: string;
};

type Images = {
  jpg: { image_url: string };
  webp: { image_url: string };
};

type Aired = {
  from: string;
  to: string | null;
};

export type AnimeProp = {
  mal_id: number;
  title: string;
  title_japanese: string;
  images: Images;
  type: string;
  episodes: number;
  airing: boolean;
  aired: Aired;
  duration: string;
  genres: Genre[];
  studios: Studio[];
  synopsis: string;
  popularity: number;
  score: number;
  scored_by: number;
  members: number;
  favorites: number;
  season: string | null;
  year: number | null;
};


interface Prop {
  anime: AnimeProp;
  index: number;
  type: string
}
const variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
}
function AnimeCard({ anime, index, type }: Prop) {

  return (
    <Link href={`/${type}/${anime.mal_id}`}>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="show"
        transition={
          {
            delay: index * 0.25,
            ease: "easeInOut",
            duration: 0.5
          }
        }
        viewport={{ amount: 0 }}
        className="relative w-full h-[300px] xl:w-full xl:h-[360px] rounded-lg shadow-lg group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="absolute inset-0">
          <Image
            src={anime.images.jpg.image_url}
            alt="Anime Cover"
            width={300}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute inset-0 bg-gradient-to-b  from-purple-500/60 via-purple-300/50 to-transparent h-1/2"></div>
        </div>
        <div className="absolute top-4 left-4 right-4 z-10">
          <button className="p-0.5 w-fit text-sm font-semibold rounded-lg bg-white border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white uppercase">anime</button>
          <h2 className="text-2xl font-bold text-white mt-2">{anime.title}</h2>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-[calc(100%-4rem)] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <div className="flex gap-2 flex-wrap mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <span className="px-2 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800">{anime.type}</span>
            <span className="px-2 py-1 rounded-full text-sm font-semibold bg-orange-100 text-orange-800">{anime.episodes} eps</span>
            <span className="px-2 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800">{anime.duration}</span>
          </div>
          <p className="text-white text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400 line-clamp-3">
            {anime.synopsis}
          </p>
        </div>
      </MotionDiv>
    </Link>
  );
}

export default AnimeCard;
