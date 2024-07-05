import Image from "next/image";
import React from "react";
import tamu_health from "@/public/tamu_health.png";
import nuance from "@/public/nuance.jpeg";
import tamu from "@/public/tamu.webp";

export default function Project() {
  return (
    <div id="project" className="flex flex-col items-center bg-gray-50 py-10">
      <h1 className="text-5xl font-bold my-10">Recent Projects</h1>

      <div className="flex flex-wrap justify-center gap-6 w-full px-4 md:px-10">
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:translate-y-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            StackSense
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>Technologies:</strong> Flask, React, BERT, TensorFlow, LLM,
            Generative AI
          </p>
          <div className="text-gray-600 mb-4">
            <strong>Key Achievements:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>
                Developed a fine-tuned BERT tag prediction model, boosting
                F1-score from 0.548 to 0.567.
              </li>
              <li>
                Implemented KNN collaborative filtering with Universal Sentence
                Encoder for faster, more accurate tag suggestions
              </li>
              <li>Question recommendations on StackOverflow.</li>
            </ul>
          </div>
          <a
            href="https://github.com/yashpatil17/StackSense"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-black text-black py-2 px-4 rounded-full hover:bg-gray-200">
              View on GitHub
            </button>
          </a>
        </div>

        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:translate-y-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            WhatsNxt
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>Technologies:</strong> JavaScript, Node.js, React.js, SQL,
            REST API, Python, Flask, TensorFlow, Machine Learning
          </p>
          <div className="text-gray-600 mb-4">
            <strong>Key Features:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>
                Engineered multifunctional Chrome extension compatible across 5+
                social media platforms, elevating user engagement.
              </li>
              <li>
                Delivered features such as personalized auto-completion,
                auto-response, word correction, prediction, and emotion analysis
                with an average model accuracy of 93%.
              </li>
              <li>
                Engineered an auto-calendar link generation feature by improving
                an existing library, enhancing user productivity.
              </li>
            </ul>
          </div>
          <a
            href="https://github.com/pratikdesai399/WhatsNxt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-black text-black py-2 px-4 rounded-full hover:bg-gray-200">
              View on GitHub
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-full px-4 md:px-10 mt-6">
        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:translate-y-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Employee Management System
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>Technologies:</strong> Spring Boot, RestfulAPI, PostgreSQL,
            Spring Cloud, React.js, Node.js
          </p>
          <div className="text-gray-600 mb-4">
            <strong>Key Features:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>
                Designed and developed core Microservices for Employee
                Management System, encompassing Employee, Payroll, and
                Attendance functionalities.
              </li>
              <li>
                Implemented a notification service utilizing Twilio for
                messaging and RabbitMQ for message queuing.
              </li>
            </ul>
          </div>
          <a
            href="https://github.com/yourusername/EmployeeManagementSystem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-black text-black py-2 px-4 rounded-full hover:bg-gray-200">
              View on GitHub
            </button>
          </a>
        </div>

        <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:translate-y-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Course Evaluation Summarizer
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>Technologies:</strong> Ruby on Rails, ChatGPT API, React.js,
            PostgreSQL
          </p>
          <div className="text-gray-600 mb-4">
            <strong>Key Achievements:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>
                Automated and accelerated analysis of customer evaluation forms
                through a web application.
              </li>
              <li>
                Achieved key milestones: user-friendly interface, Google OAuth
                login, and PostgreSQL database setup.
              </li>
              <li>
                Enhanced system with AI-driven processing, improved testing, and
                stability for efficient analysis tool.
              </li>
            </ul>
          </div>
          <a
            href="https://github.com/yourusername/CourseEvaluationSummarizer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-black text-black py-2 px-4 rounded-full hover:bg-gray-200">
              View on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
