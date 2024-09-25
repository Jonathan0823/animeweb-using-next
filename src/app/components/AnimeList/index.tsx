import React from "react";
import Image from "next/image";
import Link from "next/link";

type Anime = {
  id: number;
  title: string;
  images: string;
};

const AnimeList = ({ title, images, id }: Anime) => {
  return (
    <div className="ml-4 mr-6">
    <Link href={`/detail/${id}`}>
      <Image src={images} alt="image" width={350} height={350} className="rounded-3xl w-full"/>
      <h3 className="text-center font-bold md:text-xl p-4 text-md">{title}</h3>
    </Link>
    </div>
  );
};

export default AnimeList;
