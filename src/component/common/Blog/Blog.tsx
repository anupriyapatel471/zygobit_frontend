import React from "react";
import FeaturedBlog from "./Featuredblog/Featuredblog";
import { ChevronRight } from "lucide-react";

const Blog = () => {
  return (
    <>
      <section className="w-full mt-5 sm:mt-0  mb-12 sm:mb-16 overflow-hidden">
        <div
          data-aos="fade-left"
          className="w-full  sm:text-center px-4 lg:px-0"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient-custom">
            Featured Blogs
          </h2>
          <p className="sm:font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl my-2 sm:my-3">
            Using the latest technology and industry expertise, we built top-end
            Android and iOS-based applications that add value to the business
            and user experience.
          </p>
        </div>
        <div className="w-full px-4 lg:px-24 mt-10">
          <FeaturedBlog />
        </div>
        <div className="w-full flex justify-center mt-7 sm:mt-10">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            View All{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Blog;
