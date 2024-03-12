import React from "react";
import ProjectCard from "./ProjectCard";
const Work = () => {
  return (
    <section className="mx-32">
      <div className="my-8">
        <h1
          className="mb-2 mt-2 p-4 md:p-3 text-lg 
          font-bold leading-loose tracking-tight
           text-gray-900 md:text-2xl lg:text-5xl
           dark:text-black text-center"
        >
          My Past Experiences
        </h1>
      </div>

      <ProjectCard></ProjectCard>
    </section>
  );
};

export default Work;
