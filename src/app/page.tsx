import React from "react";
import AnimeList from "./components/AnimeList";

const Home = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
  const data = await res.json();

  type Anime = {
    mal_id: number;
    title: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
  };

  return (
    <>
      <div className="text-2xl font-bold m-5 flex justify-between"><h1>
        Paling Populer</h1>
        <h2>Lihat semua</h2></div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3  grid-cols-2 gap-4">
        {data.data.map((item: Anime) => (
          <div key={item.mal_id} >
            <AnimeList id={item.mal_id} title={item.title} images={item.images.jpg.image_url} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
