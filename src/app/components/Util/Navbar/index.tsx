import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {


  return (
    <nav className="bg-blue-500 flex justify-between p-4 md:flex-row flex-col">
      <Link href="/" className="font-bold text-white md:text-3xl text-2xl">
        ANIMELIST🤑
      </Link>
      <div className="flex gap-4 md:flex-row flex-col-reverse">
        <div className="block md:mr-20">
          <InputSearch />
        </div>
        <div className="flex absolute right-8">
          <button >
          <UserActionButton />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
