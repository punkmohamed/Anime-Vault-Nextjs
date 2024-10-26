
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
export const revalidate = 60
const Home = () => {

  return (
    <>
      <Banner />
      <main className="sm:p-6 py-16 px-8 flex flex-col gap-10 bg-[#0F1117] relative  ">
        <AnimeNow />
        <Suspense fallback={<TableSkeleton />}>
          <NewestAnime />
          <UpComing />
          <TopAnime />
          <TopMovies />
          <Specials />
          <TopOvas />
          <TopCharacters />
        </Suspense>


      </main>
    </>
  );
}
export default Home