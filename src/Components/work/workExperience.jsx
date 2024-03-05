import stats from "../../assets/stats_feature.png";
import nc from "../../assets/neetcode.png";
import sva from "../../assets/SVAP Dashboard.png";
import vhistory from "../../assets/v_history.png";
import cosapp from "../../assets/status_cosapp.png";
import hlln from "../../assets/hlln.png";
import hlln_2 from "../../assets/hllln_2.png";
import neetcode from "../../assets/neetcode.png";
export const workExperiences = [
  {
    cover: neetcode,
    title: "Development at NeetCode",
    about:
      "Working at LeetCode's competitor, being the first employee of the company and reaching 10,000 users.",
    modalHeader: "NeetCode",
    body: (
      <div className="mx-[30px]">
        <h4 className="text-2xl font-bold">Technologies Used</h4>
        <br />
        <p className="font-sans">
          TypeScript, Angular, Firebase Functions, Docker, Bulma
        </p>
        <br />

        <h2 className="text-2xl font-bold">My contributions</h2>
        <br />
        <p>
          Since NeetCode was just starting out when I joined, many of the
          features as they are now, I have made contributions to. The feature I
          am most proud of is the statistics feature that you see below.
        </p>
        <br />

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
        <p>
          Though the feature looks simple on the front-end, the complexity lies
          on the backend. To implement this feature into the existing codebase,
          I was required to learn Firebase functions, Angular RxJS subjects, all
          within a week. The biggest challenge was making sure the UI updates to
          reflect the stats of the user who is signed in, especially using RxJS.
        </p>
        <br />
        <br />
        <p>
          The feature you see below was more heavy on the front-end. What you
          see below serves as a roadmap to help students the order in which to
          take courses in. To create this graph-like structure, I used an
          external library and the progress bar is again, specific to the user
          signed in. The hardest part of this was making this page responsive.
          If you visit the{" "}
          <a
            href="https://www.neetcode.io/roadmap"
            className="hover:underline font-medium "
          >
            roadmap page
          </a>
          , you can drag around the cards and rearrange them to your desired
          order.
        </p>
        <br />
        <img src={nc} alt="nc-roadmap" className="border rounded-lg" />
        <br />
        <blockquote className="p-[15px] bg-slate-100 border rounded-[5px]">
          Notice how there is no progress bar if the course has not been
          started. It is conditional, that is.
        </blockquote>
      </div>
    ),
  },
  {
    cover: sva,
    title: "Development at IT Innovation @ York University",
    about:
      "Working in a team of 7 to build the first CMS of Higher Education in Canada and 55,000 students.",

    modalHeader: "IT Innovation Lab @ York University",
    body: (
      <div className="mx-[30px]">
        <p className="font-sans">
          IT Innovation Lab is a department within York University. During my
          time there, I worked with the Director and 7 other cross functional
          team members to create two applications.
        </p>
        <br />
        <p>
          The project you see below is a dashboard for a content management
          system created to speed up the training of the University's AI
          chatbot, backed by IBM Watson. This system liaises between the content
          creators and the Watson API since not all universities have an AI
          specialists who can interact with the Watson API.
        </p>
        <br />
        <img src={sva} alt="stats" className="border rounded-lg" />
        <br />
        <p>
          I worked on both the frontend and the backend of the project, from designing the UI, connecting forms
          to send data to the Watson API at the backend.
        </p>
        <br />
        <br />
        <p>
          This project was successful because it allowed the content creators of
          the content management system to upload content, eliminating the need
          to have meetings with AI architects on a weekly basis.
        </p>
        <br />
        <p>
          This project was also showcased at the IBM CASCON Conference 2022, and appealed massively to big Canadian Universities.
        </p>
        <br />
        <img
          src={cosapp}
          alt="cosapp"
          className="border rounded-lg mb-[10px]"
        />
        <img
          src={vhistory}
          alt="vhistory"
          className="border rounded-lg mb-[10px]"
        />
        <img
          src={vhistory}
          alt="vhistory"
          className="border rounded-lg mb-[10px]"
        />

        <br />
        <blockquote className="p-[15px] bg-slate-100 border rounded-[5px]">
          Notice how there is no progress bar if the course has not been
          started. It is conditional, that is.
        </blockquote>
      </div>
    ),
  },
  {
    cover: hlln,
    title: "Faculty of Health @ York University",
    about:
      "My first ever development job, building a digital badge plug-in to automate course completion progress.",

    modalHeader: "Faculty of Health YorkU work",
    body: (
      <div className="mx-[30px]">
        <p className="font-sans">
          This was my first ever development job. The main tasks that I had to
          do here had to do with creating a front-end theme and creating a full
          fledged digital app awarding plug-in, which awarded digital badges at
          the end of course completion.
        </p>
        <br />
        <p>
          This first one that you see below is a custom front-end page that I
          created just for Faculty of Health, within the learning management
          system. This theme was to be only used by the students in the Faculty
          of Health
        </p>
        <br />
        <img src={hlln} alt="stats" className="border rounded-lg" />
        <br />
        <p>
          The project was built specifically for an AI Bot using IBM Watson. The
          data inside the CMS would be sent directly to IBM Watson. This allowed
          the user to submit the content from their department, effectively
          allowing us to train the chat-bot.
        </p>
        <br />
        <h2 className="text-3xl font-bold">Tools involved</h2>
        <br />
        <p>
          The entire Learning Management System was written in PHP and through
          the use of PHP, custom CSS and JavaScript, I was able to develop this.
          I was required to learn all of these on the go and I did.
        </p>
        <br />
        <p>
          The image below shows the result of using the plug-in I developed and
          how it automatically awards badges to the student upon course
          completion.
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
          front-end and the back-end to work.
        </blockquote>
      </div>
    ),
  },
];
