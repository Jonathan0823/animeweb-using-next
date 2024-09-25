import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AnimeList.module.css";

type Anime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

const AnimeList = ({ api }: { api: { data: Anime[] } }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3  grid-cols-2 gap-4 mb-9">
      {api.data.map((anime: Anime) => (
      <div className="ml-4 mr-6 relative max-w-xs overflow-hidden rounded-2xl shadow-lg group" key={anime.mal_id}>
        <Link href={`/detail/${anime.mal_id}`}>
          <Image
            src={anime.images.jpg.image_url}
            alt="image"
            width={350}
            height={350}
            className={`rounded-3xl w-full transition-transform group-hover:scale-110 duration-200 md:max-h-[440px] sm:max-h-[250px] max-h-[220px] ${styles.img}`}
          />
          <h3 className="text-center font-bold md:text-xl p-4 text-md absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white">
            {anime.title}
          </h3>
        </Link>
      </div>
      ))}
    </div>
  );
};

export default AnimeList;
