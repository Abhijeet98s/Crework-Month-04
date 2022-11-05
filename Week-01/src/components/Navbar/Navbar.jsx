import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-3 px-5 text-black lg:px-24">
        <Link to="/">
          <h1 className="text-xl hover:text-blue-500 lg:text-2xl">
            Movie List App
          </h1>
        </Link>
        <ul className="hidden gap-7 font-semibold lg:flex">
          <Link to="/">
            <li className="transition-colors hover:text-blue-500">Home</li>
          </Link>
          <Link to="/search">
            <li className="transition-colors hover:text-blue-500">Search</li>
          </Link>
          <Link to="/about">
            <li className="transition-colors hover:text-blue-500">About</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
