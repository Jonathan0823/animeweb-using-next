import React from "react";
import { authUserSesion } from "@/app/libs/auth-libs";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

const UserDashboard = async () => {
  const userInfo = await authUserSesion();
  if (!userInfo) {
    redirect("/");
  }

  return (
    <>
      <div className="font-bold text-2xl gap-2 flex flex-col ">
        <h1 className="text-blue-400 text-center mt-7 text-3xl">User Dashboard</h1>
        <div className="flex justify-center mt-5">
          <Image
            src={userInfo?.image || ""}
            width={250}
            height={250}
            alt="profile picture"
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-6 mt-10">
          <h3>{userInfo?.email}</h3>
          <h3>{userInfo?.name}</h3>
        </div>
        <div className="flex justify-center items-center flex-row md:gap-20  gap-10 flex-wrap mt-10 mb-10">
          <Link className=" p-5 bg-blue-400 text-black  rounded-3xl hover:bg-blue-600 hover:text-white transition-all" href={"/user/collection"} >Collection</Link>
          <Link className=" p-5 bg-blue-400 text-black  rounded-3xl hover:bg-blue-600 hover:text-white transition-all" href={"/user/comments"}>Comments</Link>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
