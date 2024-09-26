"use client";
import React, { useState, useEffect } from "react";
import HeaderMenu from "../components/Util/HeaderMenu";
import Pagination from "../components/Util/Pagination";
import AnimeList from "../components/AnimeList";
import getAnimeResponse from "../libs/api";


interface TopAnimeData {
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
const TopAnime = () => {
  

  const [page, setPage] = useState(1);
  const [data, setData] = useState<TopAnimeData>({
    pagination: {
      last_visible_page: 0,
    },
    data: [],
  });


  useEffect(() => {
    const fetchAnime = async () => {
      const data = await getAnimeResponse("top/anime", `sfw=true&limit=20&page=${page}`);
      setData(data);
    };

    fetchAnime();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Top Anime🔥 #${page}`} />
      <AnimeList api={data} />
      <Pagination page={page} lastpage={data.pagination.last_visible_page} setPage={setPage}/>
    </>
  );
};

export default TopAnime;
