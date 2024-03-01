import stats from "../../assets/stats_feature.png";
import nc from "../../assets/neetcode.png";
import sva from '../../assets/SVAP Dashboard.png'
import vhistory from '../../assets/v_history.png'
import cosapp from '../../assets/status_cosapp.png'
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
        <img src={cosapp} alt="cosapp" className="border rounded-lg mb-[10px]" />
        <img src={vhistory} alt="vhistory" className="border rounded-lg mb-[10px]" />
        <img src={vhistory} alt="vhistory" className="border rounded-lg mb-[10px]" />

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
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean at congue dui, et elementum quam.Proin sagittis maximus ex, nec tincidunt est gravida at.Aenean maximus auctor erat sit amet luctus.Nullam accumsan tortor id eros imperdiet varius.Nullam vehicula eget magna sed egestas.Proin vel mi tortor.Praesent dictum et risus a laoreet.Quisque finibus dui vel nunc feugiat, at ultrices turpis ultrices.Etiam ut nisi lorem.Morbi ultrices consectetur gravida.Donec purus mi, tempor nec semper quis, gravida ut nulla.Interdum et malesuada fames ac ante ipsum primis in faucibus.Quisque tempor at mi vel ultrices.Mauris sed condimentum ipsum.Maecenas volutpat in tellus condimentum tincidunt.",
  },
];
