import Image from "next/image";
import React from "react";
import logo from "@/public/logo.jpeg";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="min-h-[6rem] w-full flex flex-col justify-center md:flex-row md:justify-between">
      <div className="flex w-full md:w-1/2 justify-center items-center">
        <Image src={logo} alt="Logo" width={100} height={100} />
        <h1 className="text-3xl">Pratik Desai</h1>
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:flex-row md:gap-20 items-center justify-center mt-4 md:mt-0">
        <div className="text-xl">
            <Link href="#about">About</Link>
        </div>
        <div className="text-xl">Experience</div>
        <div className="text-xl">Projects</div>
        <div className="text-xl">Contact</div>
      </div>
    </div>
  );
}
