import React from "react";
import AnimeList from "@/app/components/AnimeList";
import getAnimeResponse from "@/app/libs/api";

type Params = {
  params: {
    keyword: string;
  };
};

const Page = async ({ params }: Params) => {
  const data = await getAnimeResponse("anime", `q=${params.keyword}&sfw=true`);
  const decodedKeyword = decodeURI(params.keyword);
  console.log(data);
  return (
    <>
    {data.data.length === 0 ? <div className="text-2xl font-bold m-5 flex flex-row gap-4  ">No results found for <h1 className="text-blue-500">{decodedKeyword}</h1></div> : <div className="text-2xl font-bold m-5 flex justify-between">
        <div className="flex gap-2">
        <h1>Showing results for</h1>
        <h1 className="text-blue-500">{decodedKeyword}</h1>
        </div>
      </div>}
      
      <AnimeList api={data} />
    </>
  );
};

export default Page;
