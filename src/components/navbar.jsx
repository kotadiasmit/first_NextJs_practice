"use client";
import { NavLink } from "@/NavLink";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const pathname = usePathname();
  const isActive = (href) => (pathname === href ? "active" : "");

  return (
    <nav className="flex justify-center">
      <ul className="flex mt-3">
        <li
          className={`ml-4 p-2 rounded-md hover:shadow-inner hover:shadow-slate-500 ${isActive(
            "/"
          )}`}
        >
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className={`ml-4 p-2 rounded-md hover:shadow-inner hover:shadow-slate-500 ${isActive(
            "/about"
          )}`}
        >
          <Link href={"/about"}> About</Link>
        </li>
        <li className="ml-4 p-2 rounded-md hover:shadow-inner hover:shadow-slate-500">
          <NavLink href={"/about/name"}>Name</NavLink>
        </li>
        <li className="ml-4 p-2 rounded-md hover:shadow-inner hover:shadow-slate-500">
          <NavLink href={"/about/Contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
