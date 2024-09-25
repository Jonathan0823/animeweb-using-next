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
  return (
    <>
      <div className="text-2xl font-bold m-5 flex justify-between">
        <h1>Showing results for {params.keyword}</h1>
      </div>
      <AnimeList api={data} />
    </>
  );
};

export default Page;
