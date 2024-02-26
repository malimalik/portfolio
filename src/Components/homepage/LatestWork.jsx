import React from "react";
import BlogPostCard from "./Card/Card";
import { blogPosts } from "../../util/blogposts";

const LatestWork = () => {
  return (
    <section>
      <div className="w-min md:w-1/2 md:p-4">
        <h2 className="mb-2 mt-2 p-4 md:p-10 text-2xl font-extrabold leading-loose tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Latest Work
        </h2>
      </div>

      <div className="w-min md:w-1/2 md:p-4 flex flex-wrap">
        {blogPosts.map((post, index) => (
          <div key={index} className="w-full md:w-1/3 p-4 flex mb-2 mt-2">
            <BlogPostCard title={post.title} content={post.content} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
