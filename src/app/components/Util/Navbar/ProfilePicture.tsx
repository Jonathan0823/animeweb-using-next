"use client";
import React from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";

interface Profile {
    image: string;
}

const ProfilePicture = (profile: Profile) => {
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdown && event.target instanceof HTMLElement && !event.target.closest(".dropdown")) {
            setDropdown(false);
          }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, [dropdown]);

    const profilepic = profile;
  return (
    <>
      <div className="w-10 h-10">
        <Image
          src={profilepic.image || ""}
          width={40}
          height={40}
          alt="profile picture"
          className="rounded-full"
          onClick={() => setDropdown(!dropdown)}
        />
      </div>
      <div>
      {dropdown && <Dropdown />}
      </div>
    </>
  );
};

export default ProfilePicture;
