import React from "react";
import aboutDev from "../../assets/aboutDev.png";

const Welcome = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
      <div className="p-4 md:p-10">
        <h1 className="mb-6 mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-loose tracking-tight text-gray-900 dark:text-black">
          Hey, I am Ali Malik
        </h1>

        <p className="mt-2 mb-4 text-base md:text-lg lg:text-lg font-normal dark:text-gray-600">
          I am a developer/technical writer and online course creator.
        </p>

        <p className=" mt-2 mb-[15px] text-lg font-normal text-gray-600 dark:text-gray-600">
          Most of my expertise lie in doing Full Stack Web Development, React
          and Tailwind, which, by the way if you are wondering is what was used
          to create this website.
        </p>

        <p className="mt-2 mb-[15px] text-lg font-normal text-gray-600 dark:text-gray-600">
          I am about 1.5 years out from University. My most recent work
          experience has been working at NeetCode, in which I was the first
          employee. I am now looking to work in a company which I can bring even
          more value to. I have not only been a software engineer but also wrote
          courses in the software engineering niche.
        </p>
        <p className="mt-2 mb-[15px] text-lg font-normal text-gray-600 dark:text-gray-600">
          When I am not working, I like to spend time at the gym bettering
          myself. My most recent endeavor is olympic weightlifting. I have been
          training for 1 year and preparing to compete this year.
        </p>
        <p className="mt-2 mb-[15px] text-lg font-normal text-gray-600 dark:text-gray-600">
          I invite you to check my resume and my work. Hopefully I did a good
          job in helping you learn a few things about me.
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
