"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { DiPostgresql, DiRuby } from "react-icons/di";
import { FaAws, FaJava, FaPython } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiFlask, SiMicrosoftazure, SiTypescript } from "react-icons/si";
import { TbBrandCpp, TbFileTypeSql } from "react-icons/tb";

const About = () => {
  const [note, setNote] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNoteChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can implement your logic to send the note and email via email service or API
    console.log("Submitting note:", note);
    console.log("Submitting email:", email);
    // Example API or service call:
    // sendNoteByEmail(note, email);

    // Reset form after submission
    setNote("");
    setEmail("");
    setSubmitted(true);
  };

  return (
    <div id="about" className="flex flex-col gap-20 items-center m-20">
      <div className="text-center">
        <h1 className="text-xl text-gray-500 mb-4">Get to know more</h1>
        <h1 className="text-5xl font-bold text-gray-800">About Me</h1>
      </div>

      <div className="w-full flex flex-col md:flex-row md:gap-10">
        <div className="md:w-1/3 flex flex-col justify-start items-center bg-white shadow-md rounded-2xl p-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:translate-y-2">
          <GiSkills size={40} className="text-4xl text-blue-600 mb-4" />
          <h1 className="text-xl font-bold mb-2">Skills</h1>
          <div className="flex flex-col items-center md:flex-row w-full gap-4 justify-center">
            <div className="w-1/2 flex flex-col justify-center gap-4">
              <SkillIcon icon={<FaJava size={32} />} text="Java" />
              <SkillIcon icon={<FaPython size={32} />} text="Python" />
              <SkillIcon
                icon={<IoLogoJavascript size={32} />}
                text="JavaScript"
              />
              <SkillIcon icon={<SiTypescript size={32} />} text="TypeScript" />
              <SkillIcon icon={<DiRuby size={32} />} text="Ruby" />
              <SkillIcon icon={<TbBrandCpp size={32} />} text="C/C++" />
              <SkillIcon icon={<TbFileTypeSql size={32} />} text="SQL" />
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-4">
              <SkillIcon
                icon={<BiLogoSpringBoot size={32} />}
                text="Spring Boot"
              />
              <SkillIcon icon={<SiFlask size={32} />} text="Flask" />
              <SkillIcon icon={<RiNextjsFill size={32} />} text="Next.js" />
              <SkillIcon icon={<RiReactjsFill size={32} />} text="React.js" />
              <SkillIcon icon={<FaAws size={32} />} text="AWS" />
              <SkillIcon icon={<DiPostgresql size={32} />} text="Postgresql" />
              <SkillIcon icon={<SiMicrosoftazure size={32} />} text="Azure" />
            </div>
          </div>
          {/* <h1>More skills to be added</h1> */}
        </div>
        <div className="md:w-2/3 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-6 p-6">
            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <LuBrainCircuit size={32} className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Experience
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li className="mb-1">
                  1.5 years of Professional Work Experience
                </li>
                <li className="mb-1">Full Stack Web Development</li>
              </ul>
            </div>

            <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MdCastForEducation
                  size={32}
                  className="text-4xl text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Education
              </h3>
              <ul className="list-none text-gray-600">
                <li className="mb-4">
                  <p className="font-medium">Master of Computer Science</p>
                  <p>Texas A&M University - College Station</p>
                  <p className="text-sm text-gray-500">2023 to 2025</p>
                </li>
                <li>
                  <p className="font-medium">B.Tech</p>
                  <p>College of Engineering Pune</p>
                  <p className="text-sm text-gray-500">2018 to 2022</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl p-10 bg-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:translate-y-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h1 className="text-xl font-bold mb-2">Leave a Note for me!</h1>
              <textarea
                value={note}
                onChange={handleNoteChange}
                className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-600 transition duration-300"
                rows={5}
                placeholder="Write your note here..."
                required
              />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-gray-600 transition duration-300"
                placeholder="Your Email (optional but recommended)"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
              >
                Submit Note
              </button>
              {submitted && (
                <p className="text-green-600">Note submitted successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// SkillIcon component for displaying individual skill icons with text
const SkillIcon: React.FC<{ icon: JSX.Element; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex items-center gap-2">
    {icon}
    <span className="text-lg text-gray-700">{text}</span>
  </div>
);

// InfoBlock component for displaying experience and education blocks
const InfoBlock: React.FC<{
  icon: JSX.Element;
  title: string;
  content: string[];
}> = ({ icon, title, content }) => (
  <div className="w-full md:w-1/2 border-2 border-gray-500 rounded-2xl p-10 hover:scale-105 hover:shadow-lg  hover:translate-y-2 transition duration-300 relative">
    {icon}
    <h1 className="text-xl font-bold mb-2">{title}</h1>
    {content.map((item, index) => (
      <p key={index} className="font-bold text-gray-500">
        {item}
      </p>
    ))}
  </div>
);

export default About;
