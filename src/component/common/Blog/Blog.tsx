"use client";
import React from "react";
import FeaturedBlog from "./Featuredblog/Featuredblog";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <section className="w-full mt-5 sm:mt-0  mb-12 sm:mb-16 overflow-hidden">
        <div className="container remove-bg">
          <div data-aos="fade-left" className="w-full  sm:text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradiant-custom-second">
              Featured Blogs
            </h2>
            <p className="font-light sm:font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl my-2 sm:my-3">
              Using the latest technology and industry expertise, we built
              top-end Android and iOS-based applications that add value to the
              business and user experience.
            </p>
          </div>
          <div className="w-full  mt-5 sm:mt-5 lg:mt-10">
            <FeaturedBlog />
          </div>
          <div className="w-full flex justify-center mt-7 sm:mt-10">
            <Link href={"/blogs"}>
              <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                View All
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
