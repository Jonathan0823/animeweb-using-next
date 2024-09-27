import React from "react";
import Link from "next/link";
import { authUserSesion } from "@/app/libs/auth-libs";
import Image from "next/image";
import ProfilePic from "@/assets/images/person.png"

const UserActionButton = async () => {
  const session = await authUserSesion();

  return (
    <div>
      {session ? (
        <Link href="/api/auth/signout" className="md:text-xl ">
          <div className="w-10 h-10">
            <Image src={session?.image || ""} width={40} height={40} alt="profile picture" className="rounded-full"/>
          </div>
        </Link>
      ) : (
        <Link href="/api/auth/signin" className="md:text-xl ">
          <div className="w-10 h-10">
          <Image src={ProfilePic} width={40} height={40} alt="profile picture"/>
          </div>
        </Link>
      )}
    </div>
  );
};

export default UserActionButton;
