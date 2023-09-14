import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chromecloneImg from "@/public/chromeclone.png";
import movierecomderImg from "@/public/movierecommender.png";
import admindashboardImg from "@/public/admindashboard.png";
import myecomImg from "@/public/myecomImg.png"
import discordImg from "@/public/discord.jpg"
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
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation",
    location: "National Intitute of Technology, Kurukshetra",
    description:
      "I embarked on my academic journey by enrolling in a 4-year bachelor's program in Civil Engineering. Concurrently, I dedicated myself to acquiring and honing software engineering skills and practices.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Coding NInjas, DL",
    description:
      "I Interned at Coding Ninjas. Key responsibilities during the internship were- Taking doubt sessions om DSA questions. | Debugging codes. | Helping students in their assignments & various projects",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Home",
    description:
      "Upon graduating from college, I promptly embarked on a journey to enhance my skills. My toolkit encompasses React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. Additionally, I diligently practiced solving over 500 DSA problems on the LeetCode platform. I am currently open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Discord",
    description:
      "End-to-end fullstack and real-time discord clone, all with servers, channels, video calls, audio calls, editing and deleting messages as well as member roles.",
    tags: ["Next.js", "MySQL", "Tailwind","shadecn ui","Socket.io", "Clerk Authentication"],
    imageUrl: discordImg,
    linkUrl: "https://mydiscord-production-3233.up.railway.app/"
  },
  {
    title: "Ecom Website",
    description:
      "This website is fully functional as a typical e-commerce website, enabling users to add products to their cart and complete the checkout process using credit or debit cards.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Prisma","shadecn ui","NextAuth"],
    imageUrl: myecomImg,
    linkUrl: "https://bestmart-admin-xiiw.vercel.app/"
  },
  {
    title: "Admin Dashboard",
    description:
      "MERN Stack Admin Dashboard. Here we can manage the transections and revenue of your  ecom website.",
    tags: ["React", "Node.js", "MongoDb", "Tailwind", "MUI"],
    imageUrl: admindashboardImg,
    linkUrl: "https://admin-frontend-drt6.onrender.com"
  },
  {
    title: "Movie Recommender",
    description:
      "You have the option to search for your favorite movies and TV shows across a wide range of genres, as well as to explore current trending selections.",
    tags: ["React", "Redux", "TMDB API","MUI"],
    imageUrl: movierecomderImg,
    linkUrl: "https://ajcinema.vercel.app/"
  },
  {
    title: "Chrome Clone",
    description:
      "A small effort to clone chrome search engine to some extent",
    tags: ["React", "Redux","Google API","MUI"],
    imageUrl: chromecloneImg,
    linkUrl: "https://ajaybaghel120-google-search.netlify.app/"
  },
] as const;

export const skillsData = [
  "C++",
  "DSA",
  "DBMS",
  "Operating System",
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
  "Express",
  "Framer Motion",
] as const;