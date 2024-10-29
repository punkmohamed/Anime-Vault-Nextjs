import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import Link from "next/link";
type Genre = {
  mal_id: number;
  type: string; // added to match the JSON structure
  name: string;
  url: string; // added to match the JSON structure
};

type Studio = {
  mal_id: number;
  name: string;
};

type Images = {
  jpg: {
    image_url: string;
    small_image_url: string; // added to match the JSON structure
    large_image_url: string; // added to match the JSON structure
  };
  webp: {
    image_url: string;
    small_image_url: string; // added to match the JSON structure
    large_image_url: string; // added to match the JSON structure
  };
};

type Broadcast = {
  day: string;
  time: string;
  timezone: string;
  string: string;
};

type AiredProp = {
  from: string;
  to: string | null;
};

export type AnimeProp = {
  mal_id: number;
  url: string; // added to match the JSON structure
  images: Images;

  approved: boolean;
  titles: { type: string; title: string }[]; // array of titles
  title: string;
  title_english: string; // added to match the JSON structure
  title_japanese: string;
  title_synonyms: string[]; // added to match the JSON structure
  type: string;
  source: string; // added to match the JSON structure
  episodes: number;
  status: string; // added to match the JSON structure
  airing: boolean;
  aired: AiredProp;
  duration: string;
  rating: string; // added to match the JSON structure
  score: number;
  scored_by: number;
  rank: number; // added to match the JSON structure
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string; // added to match the JSON structure
  season: string | null;
  year: number | null;
  broadcast: Broadcast; // added to match the JSON structure
  studios: Studio[]; // array of studios
  genres: Genre[]; // array of genres
  explicit_genres: Genre[]; // array of explicit genres
  themes: Genre[]; // array of themes
  demographics: Genre[]; // array of demographics
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
  // const link = ${type === "TV" ? 'anime' : type === "Movie" ? 'movies' : type === "OVA" ? 'ovas' : type === "specials" ? 'specials' : type.toLowerCase()}
  console.log(type);
  const id = anime.mal_id.toString()
  return (
    <Link href={`/anime/${id}`}>
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
