import Project1 from "../../assets/project1.webp";
import Project2 from "../../assets/project2.webp";
import Project3 from "../../assets/project3.webp";
import Project4 from "../../assets/project3.webp";

export const projectsData = [
  {
    id: 1,
    image: Project1,
    title: "StackSense",
    category: "A",
    description:
      "Designed and implemented an optimized BERT-based model for tag prediction on StackOverflow, increasing F1-score from 0.548 to 0.567 through targeted fine-tuning and algorithmic enhancements.",
    link: "https://www.youtube.com/watch?v=moHQKFcGLdY",
  },
  {
    id: 2,
    image: Project2,
    title: "WhatsNxt",
    category: "B",
    description:
      "Engineered a multifunctional Chrome extension compatible with 5+ social media platforms, boosting user engagement through personalized features.",
    link: "https://github.com/pratikdesai399/WhatsNxt",
  },
  {
    id: 3,
    image: Project3,
    title: "Employee Management System",
    category: "C",
    description:
      "Designed and developed core Microservices for Employee Management System, encompassing Employee, Payroll, and Attendance functionalities.",
    link: "https://github.com/pratikdesai399/Journaling-App",
  },
  {
    id: 4,
    image: Project4,
    title: "Course Evaluation Summarizer",
    category: "D",
    description:
      "Automated analysis of course evaluations through a web application, reducing manual processing time by 90%.",
    link: "https://github.com/SoftwareEngineering606/CourseEvaluationSummarizer",
  },
  {
    id: 5,
    image: Project1,
    title: "HTTP Server",
    category: "E",
    description:
      "Developed a high-performance HTTP server using Python, capable of managing over 10,000 concurrent connections through advanced multithreading techniques. The server was designed to handle HTTP methods such as GET, POST, PUT, and DELETE, achieving low-latency response times even under heavy load. Integrated comprehensive logging and monitoring features to ensure consistent performance and facilitate debugging and maintenance.",
    link: "https://github.com/pratikdesai399/HTTP_Server",
  },
];

export const projectsNav = [
  { name: "All" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
];
