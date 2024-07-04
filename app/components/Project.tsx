import Image from "next/image";
import React from "react";
import tamu_health from "@/public/tamu_health.png";
import nuance from "@/public/nuance.jpeg";
import tamu from "@/public/tamu.webp";

export default function Project() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="flex justify-center items-center text-5xl font-bold my-10">
        Experience
      </h1>

      <div className="relative flex flex-col md:flex-row w-full mb-10">
        <div className="w-full border-2 border-black rounded-xl p-10 m-2 md:m-10 flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <span className="text-2xl font-semibold mb-2">2020</span>
          <span>Hello</span>
          <Image src={tamu_health} alt="TAMU Health" />
        </div>
        <div className="w-full border-2 border-black rounded-xl p-10 m-2 md:m-10 flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <span className="text-2xl font-semibold mb-2">2020</span>
          <span>Hello</span>
          <Image src={tamu_health} alt="TAMU Health" />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row w-full mb-10">
        <div className="w-full border-2 border-black rounded-xl p-10 m-2 md:m-10 flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <span className="text-2xl font-semibold mb-2">2020</span>
          <span>Hello</span>
          <Image src={tamu_health} alt="TAMU Health" />
        </div>
        <div className="w-full border-2 border-black rounded-xl p-10 m-2 md:m-10 flex flex-col justify-center items-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
          <span className="text-2xl font-semibold mb-2">2020</span>
          <span>Hello</span>
          <Image src={tamu_health} alt="TAMU Health" />
        </div>
      </div>
    </div>
  );
}
