import {
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  ExpressOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  BootstrapPlain,
  NodejsOriginal,
  MongodbPlain,
  PostmanPlain,
  MysqlOriginalWordmark,
  FigmaOriginal,
  TypescriptOriginal ,
  NestjsOriginal ,
  FirebaseOriginalWordmark ,
  MaterialuiPlain ,
  SequelizeOriginal ,
  GithubOriginal  
} from "devicons-react";
import php from '../assets/skillz/php.png'
import reactNative from'../assets/skillz/native.png'
import termius from '../assets/skillz/termius.jpg'
// Constants
const githubLink = "https://github.com/Dhiabenhassine";


// Work Experience Template
export const workExperienceTemplate = [

  {
    key:1,
    company: "Digitales Native", // Add company name here
    description: [
      "Defining Project Scope: Work closely with founders and stakeholders to define project goals, deliverables, timelines, and success criteria.Sprint Planning: Lead sprint planning sessions, ensuring that the team has clear, actionable tasks and understands priorities.Iteration Reviews and Retrospectives: Conduct regular reviews and retrospectives to evaluate progress, gather feedback, and continuously improve processes.Team Collaboration: Facilitate collaboration between development, design, marketing, and sales to ensure that project goals are met cohesively.", // Add description points here
    ],
    duration: "12-2023 - Present", // Add duration here
    designation: "Project Manager", // Add designation here
    type: "work",
  },
  {
    key: 2,
    company: "Digitales Native", // Add company name here
    description: [
      "Develop the backend for an Admin dashboard using Node.js, Express.js, and Sequelize.Develop an admin dashboard with a Material UI template.", // Add description points here
    ],
    duration: "02-2023 - 11-2023", // Add duration here
    designation: "Full-Stack Developer", // Add designation here
    type: "work",
  },
  {
    key: 3,
    company: "Freelance(sales store dashboard)", // Add company name here
    description: [
      "Develop the backend for an Admin dashboard using Node.js, Express.js, and Sequelize.Develop an admin dashboard with a Material UI template.", // Add description points here
    ],
    duration: "10/2023", // Add duration here
    designation: "Full-Stack Developer", // Add designation here
    type: "work",
  },
  {
    key: 4,
    company: "RebootKamp (RBK)", // Add company name here
    description: [
      "Develop the backend for an Admin dashboard using Node.js, Express.js, and Sequelize.Develop an admin dashboard with a Material UI template.", // Add description points here
    ],
    duration: "08-2022 - 02-2023", // Add duration here
    designation: "Full-Stack Developer", // Add designation here
    type: "work",
  },
  {
    key: 5,
    company: "PROMOCUISINE ( Cuisina + Marmotek)", // Add company name here
    description: [
      "Develop the backend for an Admin dashboard using Node.js, Express.js, and Sequelize.Develop an admin dashboard with a Material UI template.", // Add description points here
    ],
    duration: "06-2020 - 08-2022", // Add duration here
    designation: "Full-Stack Developer", // Add designation here
    type: "work",
  },
];

// GitHub Repositories
export const githubRepos = [

  {
    name: "Digitales Native",
    sousName:"Web Application - SuperHost",
    description: "'SuperHost' is a Tunisia-based platform similar to Airbnb, offering unique and affordable accommodations for travelers. It connects guests with local hosts, providing an authentic and personalized travel experience. The platform focuses on showcasing the rich culture and hospitality of Tunisia.",
    liveURL: "https://superhost.com.tn/",
  },
  {
    name: "PromoCuisine",
    sousName:"Dashboard Application",
    description:
      `A dashboard application for a sales department intern would feature a clean UI with a left-side navigation bar for easy access to key sections: Sales Overview, 
      Customer Management, and Reports. It includes a real-time sales tracker, customer data management, and a performance analytics section.`,
    //liveURL: `${githubLink}/GTA-VI-Early-Access-`,
  },
  {
    name: "Freelance",
    sousName:"Web Application - Admin Dashboard",
    description:
      "'Ghost Vape' is a web application for managing a vape store's sales and stock.",
    //liveURL: "https://emoji-tic-tac-toe.vercel.app/",
  },
  {
    name: "Hackathon",
    sousName:"Web Application - HACK EL-MAKEN",
    description:
      "Al Maken ” web application streamlines services, offering an organization and communication for both organizers and visitors.",
    //liveURL: `${githubLink}/GTA-VI-Early-Access-`,
  },
  {
    name: "Hackathon",
    sousName:"Web Application - eHealth Valley Hackathon",
    description:
      `”Digital Care” A web application for managing chemotherapy processes in a hospital.`,
    //liveURL: `${githubLink}/GTA-VI-Early-Access-`,
  },
  {
    name: "RBK",
    sousName:"Mobile Application -Tawelti",
    description:
      `”Tawelti” is a React Native application designed for reservation management at coffee shops, restaurants, and lounges`,
    //liveURL: `${githubLink}/GTA-VI-Early-Access-`,
  },

];

// Education Experience
export const educationExperience = [
  {
    key: 1,
    institution: "Full Stack Javascript Developer",
    graduation: "Aug 2022",
    degree: "RebootKamp (RBK)",
    type: "education",
  },
  {
    key: 2,
    institution: "Master degree in quality, safety and environment management",
    graduation: "Oct 2016",
    degree: "Leaders University -Tunisia",
    type: "education",
  },
  {
    key: 3,
    institution: "Applied License in international economics and finance",
    graduation: "Jun 2013",
    degree: "Faculty of economics and management - Tunisia",
    type: "education",
  },
  {
    key: 4,
    institution: "Baccalaureate",
    graduation: "Jun 2010",
    degree: "High school 7 November- Tunisia",
    type: "education",
  },
];

const iconSize = 15;
const iconClass = "mx-auto";

export const skills = [

  {
    key: 2,
    name: "JavaScript",
    type: "language",
    icon: JavascriptOriginal ? (
      <JavascriptOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 12,
    name: "Type Script",
    type: "tool",
    icon: TypescriptOriginal  ? (
      <TypescriptOriginal  className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 9,
    name: "Node.JS",
    type: "framework",
    icon: NodejsOriginal ? (
      <NodejsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 21,
    name: "Nest.JS",
    type: "framework",
    icon: NestjsOriginal ? (
      <NestjsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 22,
    name: "FireBase",
    type: "framework",
    icon: FirebaseOriginalWordmark ? (
      <FirebaseOriginalWordmark className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 10,
    name: "MongoDB",
    type: "database",
    icon: MongodbPlain ? (
      <MongodbPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 10,
    name: "Sequelize",
    type: "database",
    icon: SequelizeOriginal ? (
      <SequelizeOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 11,
    name: "Postman",
    type: "tool",
    icon: PostmanPlain ? (
      <PostmanPlain className={iconClass} size={iconSize} />
    ) : null,
  },

  {
    key: 13,
    name: "Express",
    type: "framework",
    icon: ExpressOriginal ? (
      <ExpressOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 14,
    name: "PhpMyAdmin",
    type: "framework",
    icon: php ? (
      <img src={php} alt="PhpMyAdmin" className={iconClass} style={{ width: '100%', height: '100%' }} />
    ) : null,
  },
  {
    key: 15,
    name: "MySQL",
    type: "database",
    icon: MysqlOriginalWordmark ? (
      <MysqlOriginalWordmark className={iconClass} size={iconSize} />
    ) : null,
  },

  {
    key: 5,
    name: "React",
    type: "framework",
    icon: ReactOriginal ? (
      <ReactOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 20,
    //name: "React Native",
    type: "framework",
    icon: reactNative ? (
      <img src={reactNative} alt="ReactNative" className={iconClass} style={{ width: '100%', height: '100%' }} />
    ) : null,
  },
  {
    key: 6,
    name: "Next.js",
    type: "framework",
    icon: NextjsOriginal ? (
      <NextjsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 7,
    name: "TailwindCSS",
    type: "framework",
    icon: TailwindcssOriginal ? (
      <TailwindcssOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 8,
    name: "Bootstrap",
    type: "framework",
    icon: BootstrapPlain ? (
      <BootstrapPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 8,
    name: "Material UI",
    type: "framework",
    icon: MaterialuiPlain ? (
      <MaterialuiPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 3,
    name: "HTML",
    type: "language",
    icon: Html5Original ? (
      <Html5Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 4,
    name: "CSS",
    type: "language",
    icon: Css3Original ? (
      <Css3Original className={iconClass} size={iconSize} />
    ) : null,
  },



  {
    key: 19,
    name: "Figma",
    type: "tool",
    icon: FigmaOriginal ? (
      <FigmaOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 23,
    name: "Git",
    type: "framework",
    icon: GithubOriginal ? (
      <GithubOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  
  {
    key: 24,
    name: "termius",
    type: "framework",
    icon: termius ? (
      <img src={termius} alt="PhpMyAdmin" className={iconClass} style={{ width: '100%', height: '100%' }} />
    ) : null,
  },
];

const appsData = [
  {
    id: 1,
    name: "Digital Natives",
    icon: "/images/apps/digital.png",
    action: "chrome",
    size: "w-18 h-18",
  },
  {
    id: 2,
    name: "About Me",
    icon: "/images/apps/folder.png",
    action: "explorer",
    size: "w-18 h-18",
  },
  {
    id: 3,
    name: "Recycle Bin",
    icon: "/images/apps/recyclebin.png",
    action: "recycle",
    size: "w-14 h-14",
  },
  {
    id: 4,
    name: "Microsoft Edge",
    icon: "/images/apps/edge.png",
    action: "browser",
    size: "w-11 h-11",
  },
  {
    id: 5,
    name: "Calculator",
    icon: "/images/apps/calculator.png",
    action: "calculator",
    size: "w-11 h-11",
  },
  {
    id: 6,
    name: "VS Code",
    icon: "https://laaouatni.github.io/w11CSS/images/vs-code.ico",
    action: "vscode",
    size: "w-8 h-8",
  },
  {
    id: 7,
    name: "Games",
    icon: "images/apps/game.png",
    action: "app",
    subAction: "game",
    size: "w-10 h-10",
  },
 
];

// Export default data
export default appsData;

// Social Media Links
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/mishanpoudel/",
  github: githubLink,
};
