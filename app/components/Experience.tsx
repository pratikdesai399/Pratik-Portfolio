"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracking-beam";
import tamu from "@/public/tamu.png";
import tamu_health from "@/public/tamu_health.png";
import nuance from "@/public/nuance.jpeg";
import { LuBrainCircuit } from "react-icons/lu";
import { MdCastForEducation } from "react-icons/md";

export function Experience() {
  return (
    <div id="experience" className="flex flex-col justify-center items-center">
      <div className="text-5xl font-bold mb-20">My Experience</div>
      <TracingBeam className="px-10">
        <div className="w-full mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div
              key={`content-${index}`}
              className="mb-10 flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:translate-y-2"
            >
              <div>
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-2">{item.location}</p>
                <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                <div className="text-sm prose prose-sm dark:prose-invert">
                  {item.description}
                </div>
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="experience thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mt-4 object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    badge: "Professional Experience",
    title: "Student Research Assistant",
    location: "Texas A&M University, College Station, TX",
    date: "Aug 2023 – May 2025",
    description: (
      <>
        <p>
          Leading the development of the OliviaKIDS website using Next.js,
          React.js, TypeScript, Tailwind CSS, Zod, and Zustand, resulting in
          effective coordination of a cross-functional team and a robust
          educational platform.
        </p>
        <p>
          Building a scalable backend infrastructure with Prisma and PostgreSQL,
          resulting in efficient data management and streamlined data handling.
        </p>
        <p>
          Enhancing development and deployment consistency by leveraging Docker
          for containerization, resulting in seamless deployment processes and
          reliable development environments.
        </p>
      </>
    ),
    image: tamu_health,
  },
  {
    badge: "Professional Experience",
    title: "Software Engineer",
    location: "Nuance Communications - A Microsoft Company, Pune, India",
    date: "Jul 2022 – Jul 2023",
    description: (
      <>
        <p>
          Led the development and optimization of a key application feature
          using Java, JavaScript, and PostgreSQL, resulting in a 20% improvement
          in user experience.
        </p>
        <p>
          Implemented microservices architecture, leveraging cloud technologies,
          reducing deployment time by 16% and enhancing system reliability.
        </p>
        <p>
          Spearheaded the design and implementation of a feature flag service,
          utilizing Spring Boot, PostgreSQL, and cloud infrastructure, enabling
          faster feature rollouts and improved application scalability.
        </p>
      </>
    ),
    image: nuance,
  },
  {
    badge: "Internship Experience",
    title: "Software Engineering Intern",
    location: "Nuance Communications - A Microsoft Company, Pune, India",
    date: "Jun 2021 – Aug 2021",
    description: (
      <>
        <p>
          Optimized data storage efficiency, achieving a 30% reduction in usage
          through strategic optimization methods using PostgreSQL on cloud
          infrastructure.
        </p>
        <p>
          Led internationalization efforts, enabling support for multiple
          languages and expanding application reach using cloud-based solutions.
        </p>
        <p>
          Migrated legacy components for Microsoft, resulting in a 23% reduction
          in system latency.
        </p>
      </>
    ),
    image: nuance,
  },
];
