import React from "react";
import getAnimeResponse from "@/app/libs/api";
import Image from "next/image";
import styles from "./Detail.module.css";
import VideoPlayer from "@/app/components/Util/VideoPlayer";
import CollectionButton from "@/app/components/AnimeList/CollectionButton";
import { authUserSesion } from "@/app/libs/auth-libs";
import prisma from "@/app/libs/prisma";

type Params = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Params) => {
  const data = await getAnimeResponse(`anime/${params.id}`, ``);
  const user = await authUserSesion();
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: user?.email?.trim(), mal_id: data.data.mal_id
    }
  })

  return (
    <>
      <div className="text-2xl font-bold md:ml-5 ml-4 mb-2 mt-8 flex justify-between">
        {data.data.title}
        {!collection && user && <CollectionButton mal_id={data.data.mal_id} user_email={user?.email || ""} anime_title={data.data.title} images={data.data.images.jpg.large_image_url} />}
        
      </div>
      <div className="text-lg font-bold m-5 mt-2 flex justify-between">
        {data.data.title_japanese}
      </div>
      <div className="flex md:flex-row flex-col justify-between max-w-full mb-24">
        <div className="md:m-0">
          <Image
            src={data.data.images.jpg.image_url}
            alt="image"
            width={350}
            height={350}
            className={`rounded-3xl md:ml-5 md:max-w-96 sm:max-w-64 max-w-64 ml-14 ${styles.img} `}
          />
        </div>
        <div>
          <div className="md:ml-5 mx-4 md:mt-0 mt-10 flex flex-row gap-2 overflow-x-auto">
            <div className="w-36 flex flex-col justify-center items-center rounded border border-white">
              <p>Rank</p>
              <p>{data.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-white">
              <p>Score</p>
              <p>{data.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-white">
              <p>Popularity</p>
              <p>{data.data.popularity}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-white">
              <p>Type</p>
              <p>{data.data.type}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-white">
              <p>Source</p>
              <p>{data.data.source}</p>
            </div>
          </div>
          <div className="mt-10">
          <p className="text-lg font-bold m-5 mt-2">Sypnosis</p>
          <p className="text-lg m-5 mt-2 flex justify-between text-justify">
            {data.data.synopsis}
          </p>
          <VideoPlayer id={data.data.trailer.youtube_id} />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
