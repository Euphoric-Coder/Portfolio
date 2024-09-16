import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { SiKaggle } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import iitm from "./assets/iit.png"
import iitg from "./assets/iitg.png"
import bits from "./assets/bits.jpeg"
import java from "./assets/java.png"
import c from "./assets/c.png"
import cpp from "./assets/cpp.png"
import javascript from "./assets/javascript.png"
import typescript from "./assets/typescript.png"
import go from "./assets/go.png"
import html from "./assets/html.png"
import css from "./assets/css.png"
import python from "./assets/python.png"

const Info = {
  name: "Sagnik Dey",
  stack: [
    "a MERN Stack Developer",
    "an Aspiring SDE",
    "an Open-Source Contributor",
    "a Competitive Programmer",
    "a Freelancer",
  ],
  bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!",
};

const ProjectInfo = [
  {
    title: "MsgSync",
    desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
    image: ".png",
    live: true,
    technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
    link: "https://code-mars.github.io/Ekart/",
    github: "https://github.com/Code-Mars/Ekart/",
  },
  {
    title: "Facebook Clone",
    desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    image: "Facebook.png",
    live: true,
    technologies: [
      "React",
      "Springboot",
      "MongoDB",
      "Tailwind",
      "Tabler-Icons",
      "Firebase",
    ],
    link: "https://github.com/Code-Mars/Facebook-Clone",
    github: "https://github.com/Code-Mars/Facebook-Clone",
  },
  {
    title: "Spotify Clone",
    desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    image: "Spotify.png",
    live: false,
    technologies: [
      "React",
      "Springboot",
      "Tailwind",
      "Tabler-Icons",
      "MongoDB",
      "Firebase",
    ],
    link: "https://github.com/Code-Mars/Spotify-Clone",
    github: "https://github.com/Code-Mars/Spotify-Clone",
  },
  {
    title: "Travel Tracker",
    desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
    image: "Travel.png",
    live: false,
    technologies: ["Llama 3.1", "LangChain", "ChromaDB", "Streamlit", "Groq", "Python"],
    link: "https://github.com/Code-Mars/Travel-Tracker",
    github: "https://github.com/Code-Mars/Travel-Tracker",
  },
  {
    title: "Instagram Clone",
    desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    image: "Instagram.png",
    live: false,
    technologies: [
      "React",
      "Springboot",
      "Tailwind",
      "Heroicons",
      "Firebase",
      "MongoDB",
    ],
    link: "https://github.com/Code-Mars/Instagram-Clone",
    github: "https://github.com/Code-Mars/Instagram-Clone",
  },
  {
    title: "CodeX Code Editor",
    desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
    image: "CodeX.png",
    live: false,
    technologies: ["React", "Tailwind", "Ace Editor"],
    link: "https://github.com/Code-Mars/CodeX",
    github: "https://github.com/Code-Mars/CodeX",
  },
];

const SkillInfo = [
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Go",
      "Java",
      "Python",
    ],
  },
  {
    title: "Frameworks",
    skills: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "Socket.IO",
      "Vue.js",
      "Django",
      "Flask",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "FireBase", "MySQL", "SQLite"],
  },
  {
    title: "Deployment",
    skills: ["Netlify", "Vercel", "Heroku", "AWS", "GCP"],
  },
  {
    title: "Tools Used",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "Spring Tool Suite",
    ],
  },
  {
    title: "Area of Interest",
    skills: ["MongoDB", "FireBase", "MySQL", "SQLite"],
  },
];
const socialLinks = [
  { link: "https://github.com/Euphoric-Coder", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/sagnik-dey475",
    icon: IconBrandLinkedin,
  },
  { link: "https://www.kaggle.com", icon: SiKaggle },
  { link: "https://www.leetcode.com", icon: IconBrandLeetcode },
  { link: "https://www.upwork.com", icon: FaUpwork },
];

const ExperienceInfo = [
  {
    role: "Specialist Programmer",
    company: "Infosys",
    icon: iitm,
    date: "Oct 2023 - Present",
    desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
    skills: [
      "Springboot",
      "React JS",
      "Angular",
      "Node JS",
      "MySQL",
      "MongoDB",
      "Microservices",
    ],
  },
  {
    role: "System Engineer",
    company: "Infosys",
    icon: bits,
    date: "Nov 2022 - Sep 2023",
    desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    skills: [
      "Java",
      "MySQL",
      "Hibernate",
      "Selenium",
      "Jenkins",
      "JIRA",
      "Automation Testing",
    ],
  },
];
const EducationData = [
  {
    role: "Indian Institute of Technology, Guwahati",
    company: "Bachelor's Degree in Data Science & Artificial Intelligence",
    icon: iitg,
    date: "Sep 2024 - Jul 2028",
    desc: "Secured a CGPA of 10/10 consecutively from Semester 3 to Semester 7",
    skills: [
      "Data Structures & Alogorithms [DSA using C++]",
      "Recommendation Systems",
      "Time-Series Analysis & Forecasting",
      "Computer Systems & Performance [Computer Architecture]",
      "Network Programming & Client-Server Programming [Computer Networks]",
      "Relational Databases & Building Database Applications [Databases]",
      "Front-End Development",
    ],
    acronym: "BITS Pilani",
  },
  {
    role: "Indian Institute of Technology, Madras",
    company: "Bachelor's Degree in Data Science & Application",
    icon: iitm,
    date: "Jan 2024 - Sep 2027",
    desc: "Completed this 4-Year Degree Program in 3 Years and 4 Months",
    skills: [
      "Database Management Systems [DBMS]",
      "Programming Concepts in Java [OOPS]",
      "Data Structures & Algorithms [DSA using Python] ",
      "Node JS",
      "MySQL",
      "MongoDB",
      "Microservices",
    ],
    acronym: "IIT Madras",
  },
  {
    role: "Birla Institute of Technology & Science, Pilani",
    company: "Bachelor's Degree in Computer Science",
    icon: bits,
    date: "Aug 2023 - Jul 2027",
    desc: "Secured a CGPA of 10/10 consecutively from Semester 3 to Semester 7",
    skills: [
      "Data Structures & Alogorithms [DSA using C++]",
      "Object-Oriented Programming Systems [OOPS]",
      "Command-Line Interfaces & Scripting",
      "Computer Systems & Performance [Computer Architecture]",
      "Network Programming & Client-Server Programming [Computer Networks]",
      "Relational Databases & Building Database Applications [Databases]",
      "Front-End Development",
    ],
    acronym: "BITS Pilani",
  },
];
const Slugs = [
  "typescript",
  "spring",
  "javascript",
  "dart",
  "java",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, EducationData, Slugs };
