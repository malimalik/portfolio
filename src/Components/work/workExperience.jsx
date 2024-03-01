import stats from "../../assets/stats_feature.png";
import nc from "../../assets/neetcode.png";
import sva from "../../assets/SVAP Dashboard.png";
import vhistory from "../../assets/v_history.png";
import cosapp from "../../assets/status_cosapp.png";
import hlln from "../../assets/hlln.png"
import hlln_2 from "../../assets/hllln_2.png"
export const workExperiences = [
  {
    title: "Development at NeetCode",
    about:
      "Working at LeetCode's competitor, being the first employee of the company and reaching 10,000 users.",
    modalHeader: "NeetCode",
    body: (
      <div className="mx-[30px]">
        <p className="font-sans">
          NeetCode was my first experience out of University. Known to drive 3%
          of the overall traffic to LeetCode, the most used software engineering
          preparation resource on the internet, I was the first employee of the
          company. I wrote technical articles for all the courses and did
          front-end work which ended up in a statistics feature, which helped
          students track their progress.
        </p>
        <br />
        <p>
          Though I worked on a bunch of features, the one that was the most
          technically complex was the statistics feature.
        </p>
        <br />
        <img src={stats} alt="stats" className="border rounded-lg" />
        <p>
          It doesn't look complex on the front-end but this feature is specific
          to each user and allows them to view the progress they have made in
          each of their "easy", "medium" and "hard" questions.
        </p>
        <br />
        <h2 className="text-3xl font-bold">The complexity</h2>
        <br />
        <p>
          Most of the complexity for this project stems from the backend. The
          backend makes use of Firebase and the front-end is built using
          Angular. The hardest part of this was fetching data from the backend,
          filtering out the problems according to their difficulty and fetching
          the correct user to display them on screen.
        </p>
        <br />
        <p>
          Not only this, but the next cool project that I did was done creating
          a roadmap for all the courses that NeetCode offers. It served as a way
          to guide students about which order they should take the course in, as
          in what is recommended from the authors. This, again, required having
          to fetch all the user specific information specifically with regards
          to the progress of the user for each specific course from the backend
          and displaying it on the front-end. This was mostly Firebase, Angular
          etc.
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
    title: "Development at IT Innovation @ York University",
    about:
      "Working in a team of 7 to build the first CMS of Higher Education in Canada and 55,000 students.",

    modalHeader: "IT Innovation Lab @ York University",
    body: (
      <div className="mx-[30px]">
        <p className="font-sans">
          IT Innovation Lab is a department within York University. During my
          time there, I worked with the Director and 7 other cross functional
          team members to create two applications.{" "}
        </p>
        <br />
        <p>
          The first project that I worked on was the Content Management System.
          This was the first of its kind and was showcased at the CASCON
          conference in 2022.
        </p>
        <br />
        <img src={sva} alt="stats" className="border rounded-lg" />
        <br />
        <p>
          The project was built specifically for an AI Bot using IBM Watson. The
          data inside the CMS would be sent directly to IBM Watson. This allowed
          the user to submit the content from their department, effectively
          allowing us to train the chat-bot.
        </p>
        <br />
        <h2 className="text-3xl font-bold">The complexity</h2>
        <br />
        <p>
          The primary reason for developing this was to sell to other
          Universities who did not have an AI Architect.
        </p>
        <br />
        <p>
          Not only this, but the next cool project that I did was done creating
          a roadmap for all the courses that NeetCode offers. It served as a way
          to guide students about which order they should take the course in, as
          in what is recommended from the authors. This, again, required having
          to fetch all the user specific information specifically with regards
          to the progress of the user for each specific course from the backend
          and displaying it on the front-end. This was mostly Firebase, Angular
          etc.
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
    title: "Faculty of Health @ York University",
    about:
      "My first ever development job, building a digital badge plug-in to automate course completion progress.",

    modalHeader: "Faculty of Health YorkU work",
    body: (
      <div className="mx-[30px]">
        <p className="font-sans">
          This was my first ever development job. The main tasks that I had to do here had to do with 
          creating a front-end theme and creating a full fledged digital app awarding plug-in, which awarded digital 
          badges at the end of course completion.
        </p>
        <br />
        <p>
          This first one that you see below is a custom front-end page that I created just for Faculty of Health, within the learning management system.
          This theme was to be only used by the students in the Faculty of Health
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
          The entire Learning Management System was written in PHP and through the use of PHP, custom CSS and JavaScript, I was able to develop this.
          I was required to learn all of these on the go and I did.
        </p>
        <br />
        <p>
          The image below shows the result of using the plug-in I developed and how it automatically awards badges to the student upon course completion.
        </p>
        <br />
        <img
          src={hlln_2}
          alt="cosapp"
          className="border rounded-lg mb-[10px]"
        />

        <br />
        <blockquote className="p-[15px] bg-slate-100 border rounded-[5px]">
          Fun fact: This screenshot was actually taken the first time I got the front-end and the back-end to work.
        </blockquote>
      </div>
    ),
  },
];
