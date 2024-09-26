import React from "react";
import AnimeList from "@/app/components/AnimeList";

type Params = {
  params: {
    keyword: string;
  };
};

const Page = async ({ params }: Params) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${params.keyword}`
  );
  const data = await res.json();
  const decodedKeyword = decodeURI(params.keyword);
  return (
    <>
      <div className="text-2xl font-bold m-5 flex justify-between">
        <div className="flex gap-2">
        <h1>Showing results for</h1>
        <h1 className="text-blue-500">{decodedKeyword}</h1>
        </div>
      </div>
      <AnimeList api={data} />
    </>
  );
};

export default Page;
