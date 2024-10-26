"use client"
import { fetchAnime } from "@/app/utils/actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
type AnimeProp = {
  anime: JSX.Element
}
let page = 2
function LoadMore() {

  const { ref, inView } = useInView();
  const [anime, setAnime] = useState<AnimeProp[]>([]);
  useEffect(() => {
    if (inView) {
      const getAnime = async () => {
        const data = await fetchAnime(page)
        setAnime((prevAnime) => [...prevAnime, ...data]);
        page++
      }
      getAnime()
    }

  }, [inView, anime]);
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        {anime}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
