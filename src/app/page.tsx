
import Banner from "@/components/Banner";
import AnimeNow from "@/components/AnimeNow/AnimeNow";
import NewestAnime from "@/components/NewestAnime/NewestAnime";
import TopAnime from "@/components/TopAnime/TopAnime";
import UpComing from "@/components/UpComing/UpComing";
import TopMovies from "@/components/TopMovies";
import TopOvas from "@/components/TopOvas";
import Specials from "@/components/Specials";
import TopCharacters from "@/components/TopCharacters";

import TableSkeleton from "@/components/TableSkeleton";
import { Suspense } from "react";
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const fetchAnimeData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch from ${url}`);
  const { data } = await response.json();
  return data;
};

// Define the data-fetching functions
const getAnimeNowData = async () => {
  const url = 'https://api.jikan.moe/v4/seasons/now?limit=4';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Anime Now');
  return data;
};

const getNewestAnimeData = async () => {
  const url = 'https://api.jikan.moe/v4/top/anime?filter=airing&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Newest Anime');
  return data;
};

const getUpcomingAnimeData = async () => {
  const url = 'https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Upcoming Anime');
  return data;
};

const getTopAnimeData = async () => {
  const url = 'https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Top Anime');
  return data;
};

const getTopMoviesData = async () => {
  const url = 'https://api.jikan.moe/v4/top/anime?type=movie&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Top Movies');
  return data;
};

const getSpecialsData = async () => {
  const url = 'https://api.jikan.moe/v4/anime?type=special&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Specials');
  return data;
};

const getTopOvasData = async () => {
  const url = 'https://api.jikan.moe/v4/top/anime?type=ova&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Top OVAs');
  return data;
};

const getTopCharactersData = async () => {
  const url = 'https://api.jikan.moe/v4/top/characters?limit=10';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Top Characters');
  return data;
};
const Home = async () => {
  const animeNowData = await getAnimeNowData();
  await delay(900);

  const newestAnimeData = await getNewestAnimeData();
  await delay(900);

  const upcomingAnimeData = await getUpcomingAnimeData();
  await delay(900);

  const topAnimeData = await getTopAnimeData();
  await delay(900);

  const topMoviesData = await getTopMoviesData();
  await delay(700);

  const specialsData = await getSpecialsData();
  await delay(700);

  const topOvasData = await getTopOvasData();
  await delay(900);

  const topCharactersData = await getTopCharactersData();
  await delay(900);
  return (
    <>
      <Banner />
      <main className="sm:p-6 py-16 px-8 flex flex-col gap-10 bg-[#0F1117] relative  ">
        <Suspense fallback={<TableSkeleton />}>
          <AnimeNow data={animeNowData} />
          <NewestAnime data={newestAnimeData} />
          <UpComing data={upcomingAnimeData} />
          <TopAnime data={topAnimeData} />
          <TopMovies data={topMoviesData} />
          <Specials data={specialsData} />
          <TopOvas data={topOvasData} />
          <TopCharacters characters={topCharactersData} />
        </Suspense>
      </main>
    </>
  );
}
export default Home