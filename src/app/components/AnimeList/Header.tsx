import React from "react";
import Link from "next/link";

interface Props {
    title: string;
    linktitle: string;
    linkref: string;
}

const Header = ({title, linktitle, linkref}: Props) => {
  return (
    <div className="text-2xl font-bold m-5 flex justify-between">
      <h1>{title}</h1>
      <Link
        href={linkref}
        className="text-blue-600 hover:text-blue-800 hover:scale-110 transition-all"
      >
        {linktitle}
      </Link>
    </div>
  );
};

export default Header;
