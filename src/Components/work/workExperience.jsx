import stats from "../../assets/stats_feature.png";
import nc from "../../assets/neetcode.png";
import sva from "../../assets/sva_dashboard.png";
import vhistory from "../../assets/v_history.png";
import cosapp from "../../assets/status_cosapp.png";
import filters from "../../assets/cosap.png";
import hlln from "../../assets/hlln.png";
import hlln_2 from "../../assets/hllln_2.png";
import neetcode from "../../assets/neetcode.png";
import step2 from "../../assets/keyword_step1.png";
import step1 from "../../assets/keyword_step2.png";
import step3 from "../../assets/keyword_step3.png";
import step4 from "../../assets/keyword_step4.png";
export const workExperiences = [
  {
    cover: neetcode,
    title: "NeetCode",
    about:
      "Working at LeetCode's competitor, being the first employee of the company and reaching 10,000 users.",
    modalHeader: "My Work at NeetCode",
    body: (
      <div className="mx-[30px]">
        <p>
          NeetCode offers a wide range of courses that help software engineers
          prepare for their interviews. This ranges from data structures to
          algorithms to system design. Being the first employee, I collaborated
          directly with the founder to bring the website to how it looks today.
        </p>
        <br />

        <p>
          I wore multiple hats and did a wide range of work, including creating
          course content, visuals for courses, and of course coding features for
          the website.
        </p>
        <br />

        <h2 className="font-bold text-xl mb-2">Stats for Completed Problems</h2>

        <p>
          This feature is located on the website's most used page and it filters
          down the user progress and gives them real time feedback on their
          progress. This was extremely well received by users because preparing
          for software engineering interviews is challenging as is, and seeing a
          progress bar kept users motivated.
        </p>
        <br />

        <img src={stats} alt="stats" className="border rounded-lg" />
        <br />
        <p className="mb-2">
          Though the feature looks simple on the front-end, the complexity lies
          on the backend. To implement this feature into the existing codebase,
          I was required to learn Firebase functions, Angular RxJS subjects, all
          within a week. The biggest challenge was making sure the UI updates to
          reflect the stats of the user who is signed in.
        </p>

        <h2 className="font-bold text-xl mb-2">Course Roadmap</h2>

        <p>
          The feature you see below was more heavy on the front-end. It serves
          as a roadmap and helps students determine the order in which courses
          are recommended to be completed. To create this graph-like structure,
          I used an external library and the progress bar is specific to the
          user signed in. The hardest part of this was making this page
          responsive due to the external library being a little finnicky. If you
          visit the{" "}
          <a
            href="https://www.neetcode.io/roadmap"
            className="hover:underline font-medium "
          >
            roadmap page
          </a>
          , you can drag around the cards and rearrange them to your desired
          order, which I think is really useful.
        </p>
        <br />
        <img src={nc} alt="nc-roadmap" className="border rounded-lg" />
        <br />
        <blockquote className="p-[15px] bg-slate-100 border rounded-[5px]">
          No progress bar under a course card indicates that the course has not
          been started by the user.
        </blockquote>
      </div>
    ),
  },
  {
    cover: sva,
    title: "IT Innovation @ York University",
    about:
      "Working in a team of 7 to build the first CMS of Higher Education in Canada and 55,000 student and a proprietary course offering system to help offer courses to the students faster.",

    modalHeader: "My Work at IT Innovation - York University",
    body: (
      <div className="mx-[30px]">
        <p className="font-sans">
          IT Innovation Lab is a department within York University. I was
          involved in two major projects, both of which were launched to help
          thousands of students.
        </p>
        <br />
        <h2 className="font-bold text-xl mb-2">Content Management System</h2>
        <p className="mb-2">
          The content management system is a platform created to speed up the
          training of University's Student Virtual Assistant - powered by IBM
          Watson.
        </p>
        <p className="mb-2">
          Typically, the content creators produce the content, which is then
          uploaded to Watson by the AI Architect. This system enables the
          content creators to add content, send it for approval, and then have
          it uploaded directly to the Cloud, significantly speeding up the
          training process of the Virtual Assistant.
        </p>
        <img src={sva} alt="stats" className="border rounded-lg" />
        <br />
        <p className="mb-2">
          The above screenshot depicts the dashboard of the Content Management
          System and presents what users see upon logging in. They can view the
          latest tasks assigned to them and also request content from others
          within the system.
        </p>

        <blockquote className="p-[15px] bg-slate-100 border rounded-[5px] mb-2 shadow-lg font-semibold">
          The tasks section that you see on the right was coded solely by me.{" "}
        </blockquote>
        <p className="mb-2">
          The second feature I contributed to in this project was a complex
          form. It involved entering details of the content, implementing form
          validation, wiring it up with the back-end, and providing user
          feedback.
        </p>

        <details>
          <summary className="font-bold mb-2">
            Click here for a deeper dive into this feature.
          </summary>
          <p>
            The images below highlight the workflow of adding a new collection
            (one type of content).
          </p>
          <br />
          <img src={step1} alt="step-1" className="border rounded-lg mb-2" />
          <img src={step2} alt="step-2" className="border rounded-lg mb-2" />
          <img src={step3} alt="step-3" className="border rounded-lg mb-2" />
          <img src={step4} alt="step-4" className="border rounded-lg mb-2" />
        </details>

        <p>
          This project was also showcased at the IBM CASCON Conference 2022.
        </p>
        <br />

        <h2 className="font-bold text-xl mb-2">Course Offering System</h2>
        <p className="mb-2">
          This application was created to help reduce the time it takes for the
          registrar to approve the courses that faculties wish to offer during
          an academic year. Prior to this project, all the details would be
          communicated via email and Excel sheets, which proved to be highly
          ineffective.
        </p>

        <img
          src={filters}
          alt="filters"
          className="border rounded-lg mb-[10px]"
        />
        <img
          src={cosapp}
          alt="cosapp"
          className="border rounded-lg mb-[10px]"
        />

        <p className="mb-2">
          The table you see above was the backbone of the project. I solely
          coded this table, and most of its complexity lies in the backend.
        </p>

        <p className="mb-2">
          All the information above is fetched from a master database, which is
          updated once a week to reflect the latest changes through a CRON job.
          The biggest challenge was fetching the data from the database, getting
          it in the right format, and mapping it correctly, along with
          implementing the multiple filters observed above.
        </p>
        <p className="mb-2">
          The second notable feature I worked on was a version history feature.
          Since there are multiple users of the system, each user can make
          changes to the details of the course using the 'Actions' option.
        </p>

        <p className="mb-2">
          The highlighted field indicates a change in the value of a field,
          enabling the user to view the modifications made. This ensured that
          everyone was on the same page.
        </p>
        <img
          src={vhistory}
          alt="vhistory"
          className="border rounded-lg mb-[10px]"
        />
      </div>
    ),
  },
  {
    cover: hlln,
    title: "Faculty of Health @ York University",
    about:
      "My first ever development job, building a digital badge plug-in to automate course completion progress.",

    modalHeader: "My Work at Faculty of Health - York University",
    body: (
      <div className="mx-[30px]">
        <p>
          Faculty of Health is one of the 11 faculties. I worked within a
          department within the faculty for a summer to help develop features
          specific to the needs of the students within the faculty
        </p>

        <h2 className="font-bold text-xl mb-2">Custom Theme</h2>
        <p className="font-sans">
          The first project I was assigned with was creating a custom theme
          within the University's Learning Management System, tailored
          specifically for students enrolling in courses within the Faculty. I
          successfully delivered this within the first month of being in the
          position. The theme was primarily developed using CSS, PHP, and
          Vanilla JavaScript.
        </p>
        <br />
        <br />
        <img src={hlln} alt="stats" className="border rounded-lg" />
        <br />
        <p>The image you see above demonstrates the theme in production.</p>
        <br />
        <h2 className="font-bold text-xl mb-2">
          Digital Badge Awarding System
        </h2>

        <p className="mb-2">
          When students finish a course and all the assignments, they are
          offered certificates of completion. Previously, this was being done
          manually, through sending badges manually through email. With this
          plug-in, the badges are awarded automatically, with the Learning
          Management System handling it all.
        </p>
        <p>
          Upon completion of a course and all assignments, students are offered
          certificates of completion. Previously, this process was manual,
          involving the manual distribution of badges via email. With the
          implementation of this plugin, badges are now awarded automatically,
          with the Learning Management System handling the entire process.
        </p>

        <br />
        <img
          src={hlln_2}
          alt="cosapp"
          className="border rounded-lg mb-[10px]"
        />

        <br />
        <blockquote className="p-[15px] bg-slate-100 border rounded-[5px]">
          Fun fact: This screenshot was actually taken the first time I got the
          front-end and the back-end to work together.
        </blockquote>
      </div>
    ),
  },
];
