
import Banner from "@/components/Banner";
import AnimeNow from "@/components/AnimeNow/AnimeNow";
import NewestAnime from "@/components/NewestAnime/NewestAnime";
import TopAnime from "@/components/TopAnime/TopAnime";
import UpComing from "@/components/UpComing/UpComing";
import TopMovies from "@/components/TopMovies";
import TopOvas from "@/components/TopOvas";
import Specials from "@/components/Specials";
import TopCharacters from "@/components/TopCharacters";


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const fetchAnimeData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch from ${url}`);
  const { data } = await response.json();
  return data;
};

// Define the data-fetching functions with delay
const getAnimeNowData = async () => {
  await delay(1000); // Delay before fetching
  const url = 'https://api.jikan.moe/v4/seasons/now?limit=4';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Anime Now');
  return data;
};

const getNewestAnimeData = async () => {
  await delay(1000); // Delay before fetching
  const url = 'https://api.jikan.moe/v4/top/anime?filter=airing&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Newest Anime');
  return data;
};

const getUpcomingAnimeData = async () => {
  await delay(1000); // Delay before fetching
  const url = 'https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Upcoming Anime');
  return data;
};

const getTopAnimeData = async () => {
  await delay(1000); // Delay before fetching
  const url = 'https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Top Anime');
  return data;
};

const getTopMoviesData = async () => {
  await delay(1000); // Delay before fetching
  const url = 'https://api.jikan.moe/v4/top/anime?type=movie&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Top Movies');
  return data;
};

const getSpecialsData = async () => {
  await delay(1000); // Delay before fetching
  const url = 'https://api.jikan.moe/v4/anime?type=special&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Specials');
  return data;
};

const getTopOvasData = async () => {
  await delay(1000); // Delay before fetching
  const url = 'https://api.jikan.moe/v4/top/anime?type=ova&limit=8';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Top OVAs');
  return data;
};

const getTopCharactersData = async () => {
  await delay(1000); // Delay before fetching
  const url = 'https://api.jikan.moe/v4/top/characters?limit=10';
  const data = await fetchAnimeData(url);
  if (!data || data.length === 0) throw new Error('No data found for Top Characters');
  return data;
};
const Home = async () => {
  try {

    const [animeNowData, newestAnimeData, upcomingAnimeData, topAnimeData, topMoviesData, specialsData, topOvasData, topCharactersData] = await Promise.all([
      getAnimeNowData(),
      getNewestAnimeData(),
      getUpcomingAnimeData(),
      getTopAnimeData(),
      getTopMoviesData(),
      getSpecialsData(),
      getTopOvasData(),
      getTopCharactersData(),
    ]);

    return (
      <>
        <Banner />
        <main className="sm:p-6 py-16 px-8 flex flex-col gap-10 bg-[#0F1117] relative">

          <AnimeNow data={animeNowData} />
          <NewestAnime data={newestAnimeData} />
          <UpComing data={upcomingAnimeData} />
          <TopAnime data={topAnimeData} />
          <TopMovies data={topMoviesData} />
          <Specials data={specialsData} />
          <TopOvas data={topOvasData} />
          <TopCharacters characters={topCharactersData} />

        </main>
      </>
    );
  } catch (error) {
    console.error("Home component error:", error);
    return <div>Error loading data</div>; // Fallback UI on error
  }
}

export default Home