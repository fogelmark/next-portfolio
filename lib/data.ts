import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import counter_app from "@/public/counter-app.png";
import leon_page from "@/public/leon-page.png";
import cabin_rental from "@/public/cabin-rental.png"
import next_blog from "@/public/next-blog.png"

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
    title: "Codecademy & freeCodeCamp",
    location: "Remote",
    description:
      "I wanted to try out programming, so I took some courses on Codecademy and freeCodeCamp",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Frontend Developer Program",
    location: "Stockholm",
    description:
      "Studied frontend development on KYH School of Applied Sciences. During this period I did my 6-month internship at STIM where primarily worked with React, TypeScript and Tailwind.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "Currently expanding my knowledge and skills while designing custom websites for clients. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, Node.js and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Counter App",
    description:
      "A PWA compatible counter app used for card games like Magic: The Gathering. Includes features like player count, score reset and color picker.",
    tags: ["React", "Vite", "CSS", "Sass", "Bootstrap"],
    imageUrl: counter_app,
    demo: "https://mtgcounterapp.netlify.app/"
  },
  {
    title: "LÉON Artist Page",
    description:
      "Soon to be official website for the artist LÉON.",
    tags: ["HTML", "JS", "CSS", "Sass"],
    imageUrl: leon_page,
    demo: "https://its-leon.netlify.app/"
  },
  {
    title: "Cabin Rental",
    description:
      "A fullstack cabin rental site I did for a school project. Includes features like date picker, log in, reservations and more.",
    tags: ["React", "Vite", "TypeScript", "MongoDB", "Axios", "Node.js", "SASS", "Bootstrap"],
    imageUrl: cabin_rental,
    demo: null
  },
  {
    title: "Dev Blog",
    description:
      "A blog where anyone can post about code related matters. Includes authentication with Kinde Auth.",
    tags: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Node.js", "Tailwind"],
    imageUrl: next_blog,
    demo: "https://next-blog-aff8x8bp0-alexs-projects-3d95c78a.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Aceternity",
] as const;
