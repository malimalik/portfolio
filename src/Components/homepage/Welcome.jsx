import React from "react";

const Welcome = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center">
      {/* Text Content */}
      <div className="w-full md:w-1/2 p-4 md:p-10">
        <h1 className="mb-2 mt-10 p-4 md:p-10 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Hey there, I am Ali - The TRW Super Soldier 🎖️
        </h1>

        <p className="mb-4 mt-2 p-4 md:p-10 text-lg font-medium text-gray-800 dark:text-gray-800">
          I am a developer who loves doing technical writing. I create articles and visuals for online course creators.
          See the testimonials below.
          <br />

          Oh and I also love writing blog posts, <strong>Check them out here.</strong>
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
