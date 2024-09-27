"use client";
import React from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { useState } from "react";

interface Profile {
    image: string;
}

const ProfilePicture = (profile: Profile) => {
    const [dropdown, setDropdown] = useState(false);

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

      {dropdown && <Dropdown />}
    </>
  );
};

export default ProfilePicture;
