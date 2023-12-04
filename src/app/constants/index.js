import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import { works_01, works_02, works_03 } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Laravel API Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Consultant",
    company_name: "Consultoria contable e Informatica, S.A.",
    icon: web,
    iconBg: "#383E56",
    date: "Nov 2019 - Present",
    points: [
      "IT Support.",
      "Online billing.",
      "Online taxes.",
      "Personal projects with PHP, Laravel, JavaScript, React, NextJS.",
    ],
  },
  {
    title: "Senior Systems Developer Specialist",
    company_name: "Conduent",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jan 2015 - Oct 2019",
    points: [
      "Contributed with the BackEnd team to improve and update corporate core tools.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Improvement of the digital letter systems to clients, changing word and xml files to pdf documents.",
      "Working with C#, HTML, CSS, Javascript.",
    ],
  },
  {
    title: "Senior Software Developer",
    company_name: "Facilidades Organizacionales",
    icon: web,
    iconBg: "#383E56",
    date: "Jun 2014 - Dec 2014",
    points: [
      "Developing and maintaining web applications MVC design patterns and web services",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Working with C#, asp.net, windows forms",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Servicios Corporativos y Administrativos, S.A.",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Apr 2009 -Jun 2013",
    points: [
      "Contribute with the adoption of a new data flow for Wertern Union points of service.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing new features on core tools",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Herbert proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Herbert does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Herbert optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Windbnb",
    description:
      "Web-based platform that allows users to search, book, and manage rentals from various providers, providing a convenient and efficient solution.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: works_01,
    source_code_link: "https://github.com/herokudev/Windbnb",
  },
  {
    name: "Courses API",
    description:
      "Web API that enables users CRUD operations from different entities like teachers, courses, students. It's has swagger and postman documentation.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: works_02,
    source_code_link: "https://github.com/herokudev/Laravel-API",
  },
  {
    name: "WeatherApp",
    description:
      "Web app that consume api to forecast weather data from different locations. It will show data like temperature, wind humidity, visibility and air pressure.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: works_03,
    source_code_link: "https://github.com/herokudev/weatherApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
