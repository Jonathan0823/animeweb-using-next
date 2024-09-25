import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AnimeList.module.css";

type Anime = {
  id: number;
  title: string;
  images: string;
};

const AnimeList = ({ title, images, id }: Anime) => {
  return (
    <div className="ml-4 mr-6 relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
    <Link href={`/detail/${id}`}>
      <Image src={images} alt="image" width={350} height={350} className={`rounded-3xl w-full transition-transform group-hover:scale-110 duration-200 md:max-h-[440px] sm:max-h-[250px] max-h-[220px] ${styles.img}`}/>
      <h3 className="text-center font-bold md:text-xl p-4 text-md absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white">{title}</h3>
    </Link>
    </div>
  );
};

export default AnimeList;
