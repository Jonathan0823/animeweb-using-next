import React from "react";
import { authUserSesion } from "@/app/libs/auth-libs";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const UserCollection = async () => {
  const userInfo = await authUserSesion();
  if (!userInfo) {
    redirect("/");
  }


  return (
    <>
      <section>
        <Link className="absolute top-24 left-8 bg-blue-400 p-2 px-5 rounded-3xl text-black hover:bg-blue-600 hover:text-white transition-all" href="/user/dashboard">Back</Link>
        <h3 className="text-center font-bold text-3xl my-6">My Collection</h3>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4 mx-5 ">
          <Link href="/" className="border-2 border-blue-400 relative">
            <Image src="" alt="" width={350} height={350} />
            <div className="absolute bg-blue-400 w-full bottom-0 py-5">
                <h4 className="text-center text-white">Anime Title</h4>
            </div>
          </Link>
          <Link href="/" className="border-2 border-blue-400 relative">
            <Image src="" alt="" width={350} height={350} />
            <div className="absolute bg-blue-400 w-full bottom-0 py-5">
                <h4 className="text-center text-white">Anime Title</h4>
            </div>
          </Link>
          <Link href="/" className="border-2 border-blue-400 relative">
            <Image src="" alt="" width={350} height={350} />
            <div className="absolute bg-blue-400 w-full bottom-0 py-5">
                <h4 className="text-center text-white">Anime Title</h4>
            </div>
          </Link>
          <Link href="/" className="border-2 border-blue-400 relative">
            <Image src="" alt="" width={350} height={350} />
            <div className="absolute bg-blue-400 w-full bottom-0 py-5">
                <h4 className="text-center text-white">Anime Title</h4>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default UserCollection;
