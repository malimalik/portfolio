import React from "react";

const Resume = () => {
  return (
    <>
      <section className="mx-12 md:mx-56 lg:mx-72 mt-10 mb-20">
        <div className="mb-6">
          <h1 className="mb-2 mt-2 p-4 md:p-3 text-lg font-bold leading-loose tracking-tight text-gray-900 md:text-2xl lg:text-5xl dark:text-black text-center">
            My Work Timeline
          </h1>
        </div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-black">
              Software Developer @ NeetCode
              <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                Latest
              </span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 text-base">
              December 2022 - November 2023
            </time>
            <ul class="text-gray-500 list-disc list-inside dark:text-gray-600 mb-4 space-y-4">
              <li>
                Developed a stats feature in collaboration with another software
                engineer using Angular, which allows users to view their course
                and problem-solving progress by using various filters. This
                feature is used by 1000+ users a day.
              </li>
              <li>
                Coded a course roadmap tool, which provided an ordered structure
                for the user to take courses in, helping fast-track their
                learning significantly. This was done with Angular, Bulma, and
                Firebase in the backend.
              </li>
              <li>
                Engineered a front-end feature which allows users to take
                quizzes on coding interview problems and suggests further
                questions based on the current question. Built with Bulma and
                Angular, this feature has been used by more than 10,000 users.
              </li>
            </ul>
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 "
            >
              <svg
                class="w-3.5 h-3.5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>{" "}
              Download ZIP
            </a>
          </li>
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dar:text-black">
              Software Developer @ IT Innovation Lab York University
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              September 2021 - September 2022
            </time>
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-900">
              Full Stack Content Management System
            </h2>

            <ul class="text-gray-500 list-disc list-inside dark:text-gray-600 mb-4 space-y-4">
              <li>
                Engineered the full-stack development and deployment of a unique
                Content Management System (CMS) for the University’s IBM Watson
                Virtual Assistant Platform, utilizing React and Node.js. This
                CMS streamlined the AI training process for the University’s
                Virtual Assistant, significantly improving user retention and
                the digital learning experience for over 49,700 undergraduates.
              </li>
              <li>
                Swiftly learned React, Node.js, and Material-UI. Made immediate
                contributions, including a feature which allowed users to add
                content to the Watson backend via a form. This feature is used
                by 20 active content contributors.
              </li>
            </ul>
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-900">
              Full Stack Course Offering System
            </h2>

            <ul class="text-gray-500 list-disc list-inside dark:text-gray-600 mb-4 space-y-4">
              <li>
                Developed a full-stack course offering system using PHP, MySQL,
                and jQuery, streamlining the course approval process from 11 to
                2 months for 11 faculties and 55,700+ students.
              </li>
              <li>
                Engineered a version history feature with JavaScript and MySQL,
                streamlining workflows by enabling tracking of course detail
                changes resulting in identification of the contributor.
              </li>
              <li>
                Collaborated in three different teams in an agile environment,
                refining requirements and showcasing sprint demos every 2 weeks,
                which resulted in shipping the product in 4 months.
              </li>
            </ul>
          </li>
          <li class="ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-black">
              Software Developer @ Faculty of Health York University
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2021 - August 2021
            </time>
            <ul class="text-gray-500 list-disc list-inside dark:text-gray-600 mb-4 space-y-4">
              <li>
                Solely developed a digital badge plug-in for the University’s
                Learning Management System, utilizing PHP, JavaScript, and MySQL
                relational databases. The development and deployment processes
                were streamlined using a Docker containerized environment. This
                plug-in automated badge awarding and enhanced user experience
                through automatic email notifications.
              </li>
              <li>
                Developed a custom feature for the digital badge plug-in,
                enabling simultaneous awarding of multiple badges. This improved
                efficiency, streamlined the user experience, and contributed to
                a 15% increase in department enrollment.
              </li>
            </ul>
          </li>
        </ol>
      </section>
    </>
  );
};

export default Resume;
