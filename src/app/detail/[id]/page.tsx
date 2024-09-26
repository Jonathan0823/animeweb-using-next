import React from "react";
import getAnimeResponse from "@/app/libs/api";
import Image from "next/image";
import styles from "./Detail.module.css";

type Params = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Params) => {
  const data = await getAnimeResponse(`anime/${params.id}`, ``);
  console.log(data.data);
  return (
    <>
      <div className="text-2xl font-bold md:ml-5 ml-4 mb-2 mt-8 flex justify-between">
        {data.data.title}
      </div>
      <div className="text-lg font-bold m-5 mt-2 flex justify-between">
        {data.data.title_japanese}
      </div>
      <div className="flex md:flex-row flex-col justify-between max-w-full">
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
          <p className="text-lg font-bold m-5 mt-2">Sypnosis</p>
          <p className="text-lg font-bold m-5 mt-2 flex justify-between">
            {data.data.synopsis}
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
