import React from "react";
import resume from "../../util/Resume_AliMalik.pdf";
const Resume = () => {
  return (
    <>
      <section className="mx-12 md:mx-56 lg:mx-72 mt-10 mb-20">
        <div className="mb-6 items-center flex justify-center">
          <h1 className="mb-2 mt-2 mx-20 p-4 md:p-3 text-lg font-bold leading-loose tracking-tight text-gray-900 md:text-2xl lg:text-5xl dark:text-black text-center">
            My Work Timeline
          </h1>
          <a
            href={resume}
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
            View PDF
          </a>
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
                Improved user engagement and retention by developing a data
                analytics feature (Angular) that provided personalized course
                progress visualization with filtering options. Collaborated with
                another engineer to optimize insights, resulting in a 10%
                increase in course completion rates.
              </li>
              <li>
                Accelerated user onboarding and streamlined the learning
                experience by developing a course roadmap tool. Rapidly learned
                Angular and Bulma to deliver an intuitive UI, resulting in a 20%
                reduction in new user support inquiries.
              </li>
              <li>
                Enhanced user learning experience by designing a quiz feature
                (Bulma, Angular) that breaks down complex coding interview
                problems. This approach fosters better understanding and has
                been used by over 10,000 learners.
              </li>
            </ul>
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
            <h2 class="mb-2 text-md font-semibold dark:text-gray-700">
              Full Stack Content Management System
            </h2>

            <ul class="text-gray-500 list-disc list-inside dark:text-gray-600 mb-4 space-y-4">
              <li>
                Rapidly learned React and Node.js (no prior experience) to
                architect a scalable Content Management System that streamlined
                AI training for the University’s Student Virtual Assistant (IBM
                Watson). This CMS empowered content creators, eliminating the
                need for weekly meetings with the AI Architect and significantly
                improving the AI update process, impacting 49,700+ students.
              </li>
              <li>
                Adapted the Formik library and collaborated with users and the
                AI team to design a user-friendly content upload form
                (Material-UI) that integrates seamlessly with Watson’s approval
                workflow. This streamlined process empowers 20+ contributors and
                ensures high-quality training data for the AI.
              </li>
            </ul>
            <h2 class="mb-2 text-md font-semibold dark:text-gray-700">
              Full Stack Course Offering System
            </h2>

            <ul class="text-gray-500 list-disc list-inside dark:text-gray-600 mb-4 space-y-4">
              <li>
                Accelerated course approvals by 82% through a full-stack system
                (PHP, MySQL - learned rapidly). Collaborated with a diverse team
                of 9 and incorporated user feedback to streamline the process
                for 11 faculties, reducing student wait times and impacting
                55,700+ learners.
              </li>
              <li>
                Boosted accountability and streamlined team collaboration by
                architecting a scalable version history feature (PHP, MySQL).
                Designed a two-table solution to optimize data management,
                enabling easy error resolution and fostering transparent
                communication.
              </li>
              <li>
                Streamlined development and ensured timely delivery by
                leveraging Docker and WSL-2. Utilized Docker containers to
                guarantee a consistent development environment for myself and
                collaborators, leading to accurate sprint demos and adherence to
                the 4-month release schedule.
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
                Boosted efficiency and user experience by automating badge
                awarding for the University’s LMS. Developed a custom plugin
                (PHP, JavaScript, MySQL) with streamlined Docker-based
                deployment. Designed automatic email notifications to enhance
                the user feedback loop. 200 students impacted.
              </li>
              <li>
                Boosted efficiency and enhanced user experience by developing a
                custom feature that enabled simultaneous awarding of multiple
                badges. This streamlined workflows and directly contributed to a
                15% increase in department enrollment.
              </li>
            </ul>
          </li>
        </ol>
      </section>
    </>
  );
};

export default Resume;
