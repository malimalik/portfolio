import React from "react";

const Welcome = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="w-1/2 p-10">
        <h1 className="mb-4 mt-10 p-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Hey there, I am Ali - The TRW Super Soldier 🎖️
        </h1>

        <p className="mb-4 mt-10 p-l-10">
          I am a developer turned technical writer, and have been in The Real
          World for quite some time. It's changed my life.
        </p>
      </div>
      <div className="w-1/2 p-10">
        <img
          src="https://www.university.com/images/university-logo.png"
          alt="TRW"
          className="w-min h-auto"
        />
      </div>
    </section>
  );
};

export default Welcome;
