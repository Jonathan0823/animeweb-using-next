import React from "react";
import AnimeList from "./components/AnimeList";
import Link from "next/link";

const Home = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
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
      <div className="text-2xl font-bold m-5 flex justify-between">
        <h1>Most Popular</h1>
        <Link
          href="/topanime"
          className="text-blue-600 hover:text-blue-800 hover:scale-110 transition-all"
        >
          More
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3  grid-cols-2 gap-4">
        {data.data.map((item: Anime) => (
          <div key={item.mal_id}>
            <AnimeList
              id={item.mal_id}
              title={item.title}
              images={item.images.jpg.image_url}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
