import React from "react";
import styles from "./Dropdown.module.css";
import Link from "next/link";

const Dropdown = () => {

  return (
    <div>
      <div className={`${styles.dropdown} absolute z-40 top-16 bg-blue-500`}>
        <ul className="text-white flex flex-col gap-4">
          <li><Link className="hover:text-blue-300" href="/user/dashboard">Profile</Link></li>
          <li><Link className="hover:text-blue-300" href="/api/auth/signout">Log Out</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
