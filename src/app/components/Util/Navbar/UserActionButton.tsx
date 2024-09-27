
import React from "react";
import { authUserSesion } from "@/app/libs/auth-libs";
import Image from "next/image";
import ProfilePic from "@/assets/images/person.png";
import ProfilePicture from "./ProfilePicture";
import Link from "next/link";

const UserActionButton = async () => {
  const session = await authUserSesion();
  const profilepic = session?.image;
  

  return (
    <div>
      {session ? (
        <>
        
        <ProfilePicture image = {profilepic || ""} />

        </>
      ) : (
          <div className="w-10 h-10">
            <Link href="/api/auth/signin">
            <Image
              src={ProfilePic}
              width={40}
              height={40}
              alt="profile picture"
            />
            </Link>
          </div>
      )}
    </div>
  );
};

export default UserActionButton;
