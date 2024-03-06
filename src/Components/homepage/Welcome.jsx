import React from "react";
import aboutDev from "../../assets/aboutDev.png";

const Welcome = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
      <div className="p-4 md:p-10">
        <h1 className="mb-6 mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-loose tracking-tight text-gray-900 dark:text-black">
          Hey, I am Ali Malik!
        </h1>

        <p className="mt-2 mb-4 text-base md:text-lg lg:text-lg font-normal dark:text-gray-600">
          I am a Full Stack Developer with a passion for tackling challenges and
          finding innovative solutions.{" "}
        </p>

        <p className=" mt-2 mb-[15px] text-lg font-normal text-gray-600 dark:text-gray-600">
          My experience at NeetCode, where I was the first employee, has been
          instrumental in shaping my approach to problem-solving and software
          development.
        </p>

        <p className="mt-2 mb-[15px] text-lg font-normal text-gray-600 dark:text-gray-600">
          I am eager to continue learning and growing in this dynamic field,
          collaborating with talented team members and contributing to impactful
          projects.
        </p>
        <p className="mt-2 mb-[15px] text-lg font-normal text-gray-600 dark:text-gray-600">
          Outside of work, I enjoy staying active and pursuing my interests,
          such as Olympic weightlifting. I am excited about the opportunities
          ahead and look forward to connecting with like-minded professionals.
          Feel free to explore my resume and portfolio to learn more about my
          journey and accomplishments.
        </p>
        <p className="mt-2 mb-[15px] text-lg font-normal text-gray-600 dark:text-gray-600">
          Let's connect on LinkedIn to discuss potential collaborations or
          opportunities.
        </p>
      </div>

      <div className="p-4 md:p-10 flex justify-center">
        <img
          src={aboutDev}
          alt="TRW"
          className="w-full md:max-w-full lg:max-w-none h-auto"
        />
      </div>
    </section>
  );
};

export default Welcome;
