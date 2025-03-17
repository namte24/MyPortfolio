import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pokedexImg from "@/public/pokedex.png";
import realstateImg from "@/public/realstate.png";
import weatherImg from "@/public/weather.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Master's Student in Applied Computing",
    location: "Wilfrid Laurier University, Canada",
    description:
      "Currently pursuing a Master's degree in Applied Computing, focusing on advanced computing concepts and applications in real-world scenarios.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
  {
    title: "Btech Computer Science",
    location: "Majitar, Sikkim",
    description:
    "I am a proud graduate with a Bachelor of Technology (B.Tech) degree in Computer Science. I have a strong foundation in computer science principles and a passion for technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Web Developer Intern",
    location: "Gangtok, Sikkim",
    description:
    "I had the valuable opportunity to work as a Web Developer Intern at NetSpeq Solution, where I contributed to the development of a booking application. During my internship, I gained hands-on experience with cutting-edge technologies such as .NET Core, Entity Framework, and MySQL. I actively participated in designing and coding various features of the application, further enhancing my skills in web development.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Gangtok, Sikkim",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Pokedex",
    description:
      "This is a Pokedex application .",
    tags: ["React", "Tailwind"],
    imageUrl: pokedexImg,
    visit: ["pokedex-2-rdczb5kxd-namte24s-projects.vercel.app"],
  },
  {
    title: "Weather App",
    description:
      "I created a Weather App using React, Tailwind CSS, and Redux, offering users real-time weather updates and forecasts in a sleek and user-friendly interface.",
    tags: ["React", "Redux", "Tailwind"],
    imageUrl: weatherImg,
    visit: ["https://weather-application-self.vercel.app/"],
  },
  {
    title: "Real Estate Front-End",
    description:
      "I crafted a Real Estate Front-End using React and Tailwind CSS, providing a stylish and intuitive platform for property listing exploration.",
    tags: ["React","Tailwind", "Framer"],
    imageUrl: realstateImg,
    visit: ["https://real-state-frontend-zeta.vercel.app/"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "C/C++",
  "Express",
  "Python",
] as const;