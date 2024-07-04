"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import photo from "@/public/photo.jpg";
import ContactModal from "@/app/components/ContactModal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const name = "Pratik";

  return (
    <div className={`min-h-screen md:flex-row flex flex-col justify-center items-center gap-10 md:gap-20`}>
      <Image src={photo} alt="Photo" style={{ borderRadius: "50%" }} />

      <div className="flex flex-col gap-10 justify-center md:justify-center items-center relative">
        <p className="text-2xl text-gray-500 font-bold bounce-animation">Hello, I&apos;m</p>
        <h1 className="flex text-2xl md:text-5xl font-bold relative z-10 bounce-animation">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className="drop-letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <h1 className="text-xl md:text-3xl text-gray-500 font-bold bounce-animation">
          Full Stack Web Developer
        </h1>
        <div className="flex gap-4">
          <a
            href="./RESUME.pdf"
            download
            className="p-5 border-2 rounded-full border-black hover:bg-gray-500 hover:text-black bounce-animation"
          >
            Download CV
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-5 border-2 rounded-full text-white bg-black px-7 hover:bg-gray-500 hover:text-white bounce-animation"
          >
            Contact Info
          </button>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/pratikdesai399/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bounce-animation"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/pratikdesai399"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bounce-animation"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Hero;
