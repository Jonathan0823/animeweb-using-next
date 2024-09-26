"use client";
import React from "react";
import YouTube from "react-youtube";
import { useState } from "react";

const VideoPlayer = ({ id }: { id: string }) => {
  const [isOpen, setOpen] = useState(true);

  const handleClose = () => setOpen((prev) => !prev);

  const opts = {
    height: "189",
    width: "336",
    playerVars: {
      autoplay: 1,
    },
    
  };
  return (
    <div className="fixed bottom-0 right-2">
      <button
        className="text-white float-right bg-slate-700 px-5"
        onClick={handleClose}
      >
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <YouTube videoId={id} opts={opts} />}
    </div>
  );
};

export default VideoPlayer;
