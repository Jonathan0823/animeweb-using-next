"use client";
import React, { useState, useEffect } from "react";
import HeaderMenu from "../components/Util/HeaderMenu";
import Pagination from "../components/Util/Pagination";
import AnimeList from "../components/AnimeList";
import getAnimeResponse from "../libs/api";


interface LatestAnimeData {
  data: Anime[];
  pagination: {
    last_visible_page: number;
  };  
}

type Anime = {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};
const LatestAnime = () => {
  

  const [page, setPage] = useState(1);
  const [data, setData] = useState<LatestAnimeData>({
    pagination: {
      last_visible_page: 0,
    },
    data: [],
  });


  useEffect(() => {
    const fetchAnime = async () => {
      const data = await getAnimeResponse("seasons/now", `sfw=true&limit=20&page=${page}`);
      setData(data);
    };

    fetchAnime();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Latest Anime ⭐ #${page}`} />
      <AnimeList api={data} />
      <Pagination page={page} lastpage={data.pagination.last_visible_page} setPage={setPage}/>
    </>
  );
};

export default LatestAnime;
