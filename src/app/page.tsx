import React from "react";
import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/Header";

const Home = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=8`
  );
  const topAnime = await res.json();
  const latestAnime = await res2.json();

  return (
    <>
      <section>
        <Header title="Top Anime" linktitle="See All" linkref="/topanime" />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title="Latest Anime" linktitle="See All" linkref="/latest" />
        <AnimeList api={latestAnime} />
      </section>
    </>
  );
};

export default Home;
