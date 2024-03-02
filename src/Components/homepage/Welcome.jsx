import React from "react";

const Welcome = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center">
      {/* Text Content */}
      <div className="w-full md:w-1/2 p-4 md:p-10">
        <h1 className="mb-10 mt-10 text-4xl font-extrabold leading-loose tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Hey, I am Ali Malik
        </h1>

        <p className="mt-2 mb-[15px] text-lg font-medium text-gray-800 dark:text-gray-800">
          I am a developer/technical writer and online course creator.
        </p>

        <p className=" mt-2 mb-[15px] text-lg font-medium text-gray-800 dark:text-gray-800">
          Most of my expertise lie in doing Full Stack Web Development, React
          and Tailwind, which, by the way if you are wondering is what was used
          to create this website.
        </p>

        <p className="mt-2 mb-[15px] text-lg font-medium text-gray-800 dark:text-gray-800">
          I am about 1.5 years out from University. My most recent work
          experience has been working at NeetCode, in which I was the first
          employee. I am now looking to work in a company which I can bring even
          more value to. I have not only been a software engineer but also wrote
          courses in the software engineering niche.
        </p>
        <p className="mt-2 mb-[15px] text-lg font-medium text-gray-800 dark:text-gray-800">
          When I am not working, I like to spend time at the gym bettering myself. My most recent endeavor is olympic weightlifting.
          I have been training for 1 year and preparing to compete this year.
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 p-4 md:p-10 flex justify-center">
        <img
          src="https://www.university.com/images/university-logo.png"
          alt="TRW"
          className="w-3/4 md:w-auto h-auto"
        />
      </div>
    </section>
  );
};

export default Welcome;
