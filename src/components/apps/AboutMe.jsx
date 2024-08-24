import React from "react";
import {
  educationExperience,
  skills,
  githubRepos,
} from "../../data/data";
import { TypeAnimation } from "react-type-animation";
import "./aboutMe.css"


const ProjectCard = ({ repo }) => {


  return (
    <div className="bg-neutral-900/80 rounded-md px-4 pt-3 hover:translate-x-1 hover:-translate-y-1 duration-300 text-selection">
      <div className="flex items-center justify-between">
    
      </div>
      <h3 className="font-bold mt-1">{repo.name}</h3>
      <h4>{repo.sousName}</h4>
      <p className="text-white-700 mt-4 text-sm">{repo.description}</p>
     <a href="https://superhost.com.tn/">{repo.liveURL}</a>
    </div>
  );
};

const Skill = ({ icon, name, size }) => (
  <div
    className={`w-[${
      size === 48 ? "6em" : "5em"
    }] h-24 flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2`}
  >
    {React.cloneElement(icon, { size })}
    <div className="text-balance text-center text-sm select-none pt-2">
      {name}
    </div>
  </div>
);

const SkillsList = ({ x, y }) => (
  <div className="flex flex-wrap gap-2">
    <>
      {skills.slice(x, y).map((skill) => (
        <Skill key={skill.key} icon={skill.icon} name={skill.name} size={48} />
      ))}
    </>
  </div>
);

const AboutMe = ({ page, handleDivClick, expandedDiv }) => {
  const renderPageContent = () => {
    switch (page) {
      case "About Me":
        return (
          <div className="hero min-h-auto justify-start">
            <div className="hero-content flex-col lg:flex-row">
            <div id="home" className="hero-container">
      <div className="hero-content">
        <div className="left">
          <div className="info">
            <h2 className="hero-title">
              Hello, In my Home 
            </h2>
            <TypeAnimation
              sequence={["Web Developer", 2000, "About me", 2000, ""]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="hero-animation"
            />
            <p className="hero-description">
            I'm Ben Hassine Med DHIA ,Experienced Full-Stack Developer skilled in Node.js, 
            <br/>Express.js, and Sequelize, with a focus on scalable API development. 
            <br/>Proven track record in creating robust backend solutions and admin dashboards. 
            Strong background in project management and team collaboration.
            </p>
          </div>
        
        </div>
    
      </div>
    </div>
            </div>
          </div>
        );
      case "Education":
        return (
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-8">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-3">
                <time className="font-mono text-lg italic">
                  {educationExperience[0].graduation}
                </time>
                <div className="text-xl font-bold font-3xl">
                  {educationExperience[0].institution}
                </div>
                {educationExperience[0].degree}
              </div>
              <hr className="bg-gray-500" />
            </li>
            <li>
              <hr className="bg-gray-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-3">
                <time className="font-mono text-lg italic">
                  {educationExperience[1].graduation}
                </time>
                <div className="text-xl font-bold font-3xl">
                  {educationExperience[1].institution}
                </div>
                {educationExperience[1].degree}
              </div>
              <hr className="bg-gray-500" />
            </li>
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-3">
                <time className="font-mono text-lg italic">
                  {educationExperience[2].graduation}
                </time>
                <div className="text-xl font-bold font-3xl">
                  {educationExperience[2].institution}
                </div>
                {educationExperience[2].degree}
              </div>
              <hr className="bg-gray-500" />
            </li>
            <li>
              <hr className="bg-gray-500" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-3">
                <time className="font-mono text-lg italic">
                  {educationExperience[3].graduation}
                </time>
                <div className="text-xl font-bold font-3xl">
                  {educationExperience[3].institution}
                </div>
                {educationExperience[3].degree}
              </div>
              <hr className="bg-gray-500" />
            </li>
          </ul>
        );
      case "Skills":
        return (
          <div className="main-container flex h-screen relative">
            {expandedDiv === 0 && (
              <>
                <div
                  className="w-[5em] h-28 flex flex-col pt-2 items-center rounded-md hover:bg-white hover:bg-opacity-20"
                  onDoubleClick={() => handleDivClick(1)}
                >
                  <img
                    src="/images/apps/folder.png"
                    alt="Technical"
                    className="w-12 h-12"
                  />
                  <div className="text-balance text-center text-sm select-none pt-2">
                    Technical Skills
                  </div>
                </div>

                <div
                  className="w-[5em] h-28 flex flex-col pt-2 items-center rounded-md hover:bg-white hover:bg-opacity-20"
                  onDoubleClick={() => handleDivClick(2)}
                >
                  <img
                    src="/images/apps/folder.png"
                    alt="Soft"
                    className="w-12 h-12"
                  />
                  <div className="text-balance text-center text-sm select-none pt-2">
                    Soft Skills
                  </div>
                </div>

                <div
                  className="w-[5em] h-28 flex flex-col pt-2 items-center rounded-md hover:bg-white hover:bg-opacity-20"
                  onDoubleClick={() => handleDivClick(3)}
                >
                  <img
                    src="/images/apps/folder.png"
                    alt="Design"
                    className="w-12 h-12"
                  />
                  <div className="text-balance text-center text-sm select-none pt-2">
                    Design Skills
                  </div>
                </div>
              </>
            )}

            {expandedDiv === 1 && (
              <div className="flex absolute top-0 gap-2">
                <SkillsList x={0} y={17} />
              </div>
            )}

            {expandedDiv === 2 && (
              <div className="flex absolute top-0 gap-1">
                <div className="w-[6.5em] h-28 flex flex-col pt-2 items-center rounded-md hover:bg-white hover:bg-opacity-20">
                  <img
                    src="/images/folders/communication.png"
                    alt="Communication"
                    className="w-12 h-12"
                  />
                  <div className="text-pretty text-center text-sm select-none pt-2">
                    Communication
                  </div>
                </div>
                <div className="w-[6em] h-28 flex flex-col pt-2 items-center rounded-md hover:bg-white hover:bg-opacity-20">
                  <img
                    src="/images/folders/teamwork.png"
                    alt="Teamwork"
                    className="w-12 h-12"
                  />
                  <div className="text-pretty text-center text-sm select-none pt-2">
                    Teamwork
                  </div>
                </div>
                <div className="w-[5em] h-28 flex flex-col pt-2 items-center rounded-md hover:bg-white hover:bg-opacity-20">
                  <img
                    src="/images/folders/problem.png"
                    alt="Problem"
                    className="w-12 h-12"
                  />
                  <div className="text-pretty text-center text-sm select-none pt-2">
                    Problem Solving
                  </div>
                </div>
                <div className="w-[6em] h-28 flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20">
                  <img
                    src="/images/folders/management.png"
                    alt="Project"
                    className="w-12 h-12"
                  />
                  <div className="text-pretty text-center text-sm select-none pt-2">
                    Project Management
                  </div>
                </div>
              </div>
            )}

            {expandedDiv === 3 && (
              <div className="flex absolute top-0 gap-2">
                <SkillsList x={17} y={20} />
              </div>
            )}
          </div>
        );
      case "Projects":
        return (
          <div>
            <div className="grid sm:grid-cols-2 gap-2">
              {githubRepos.map((repo, index) => (
                <ProjectCard key={index} repo={repo} />
              ))}
            </div>
          </div>
        );
      case "Resume":
        return (
          <main className="border-0 flex w-full justify-center opacity-75 mt-2 text-sm">
            too bored to make a resume.
          </main>
        );
      default:
        return "404 not found";
    }
  };

  return (
    <main className="h-[100vh] w-full ml-2.5 mt-2">{renderPageContent()}</main>
  );
};

export default AboutMe;
