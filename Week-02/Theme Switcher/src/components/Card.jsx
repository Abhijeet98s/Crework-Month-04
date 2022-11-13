import React, { useContext } from "react";
import { ThemeContext } from "../Context";

export default function Card() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`${theme}-theme w-[50%] lg:w-[20%] p-2 flex flex-col justify-center items-center space-y-4 border border-black bg-white`}
      >
        <img src="/assets/shoeImg.jpg" alt="shoe-img" />
        <h1 className="text-2xl">Nike Jordan</h1>
        <button className={`${theme}-theme-btn p-2 rounded-md`}>
          Add To Cart
        </button>
      </div>
    </>
  );
}
