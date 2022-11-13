import React from "react";
import Card from "./Card";

export default function Hero() {
  return (
    <>
      <div className="max-w-full min-h-screen px-10 bg-purple-300 flex flex-col justify-center items-center">
        <h1 className="text-4xl mb-5">Shoes Cards</h1>
        <div className="flex justify-center items-center gap-5">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
