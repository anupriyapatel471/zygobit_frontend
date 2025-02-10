"use client";

import EcommerceTabbing from "@/component/ui/EcommerceTabbing/EcommerceTabbing";
import React, { useEffect } from "react";
import Aos from "aos";
import ContactForm from "@/component/common/ContactForm/ContactForm";
import Image from "next/image";
import latestBlog from "../../../public/images/latest_blog.png";
import calendarIcon from "../../../public/images/calendar_icon.svg";
import BlogPost from "../../../public/images/blogPost.png";

const BlogPage = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      {/* blog section */}
      <section className="w-full bg-black px-4 xl:px-24 py-8 mt-16">
        <div className="w-full  grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-4 xl:gap-12">
          <div className="w-auto h-96 xl:h-[530px] cursor-pointer relative rounded-2xl overflow-hidden">
            <div className="size-full absolute top-0 left-0 bg-black/50"></div>
            <Image
              className=" object-cover"
              src={latestBlog}
              alt="BlogImg"
              fill
              />
            <div className="w-full absolute bottom-5 left-0 px-4 xl:px-14">
              <span className="block w-fit py-1 px-2 rounded-sm bg-gradient-to-b from-orange-600 to-orange-800 text-white font-medium text-[10px]">
                Technology
              </span>
              <h3 className="font-bold text-base sm:text-xl mt-4">
                Auto Sales October 2022: Why Did Car Sales Drop On A Sequential
                Basis?
              </h3>
              <p className="text-sm sm:text-base my-3 sm:my-6">
                October was another positive month for auto companies where most
                auto-makers continued sales momentum from September - the start
                of the auspicious occasion and festive season.{" "}
              </p>
              <span className="flex items-center gap-2 text-xs ">
                <Image
                  className=" object-cover"
                  src={calendarIcon}
                  alt="icon"
                  width={18}
                  height={18}
                />
                Joined December 2021
              </span>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-8 sm:gap-4">
            <div className="w-full cursor-pointer flex flex-wrap sm:flex-nowrap gap-4 items-center">
              <div className="w-28 h-28 object-cover sm:w-40 sm:h-40 rounded-sm overflow-hidden relative">
                <Image
                  className=" object-cover"
                  src={BlogPost}
                  alt="BlogPost"
                  fill
                />
              </div>
              <div className="w-full sm:w-[calc(100%-10rem)]">
                <span className="block w-fit py-1 px-2 rounded-sm bg-gradient-to-b from-orange-600 to-orange-800 text-white font-medium text-[10px]">
                  Technology
                </span>
                <h3 className="sm:font-bold text-base mt-3 sm:mt-1">
                  Uber (UBER) Q3 Results: Uber share price rally on strong
                </h3>
                <p className="text-sm sm:text-base my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium
                </p>
                <span className="flex items-center gap-2 text-xs ">
                  <Image
                    className=""
                    src={calendarIcon}
                    alt="icon"
                    width={18}
                    height={18}
                  />
                  December 2021
                </span>
              </div>
            </div>
            <div className="w-full cursor-pointer flex flex-wrap sm:flex-nowrap gap-4 items-center">
              <div className="w-28 h-28 object-cover sm:w-40 sm:h-40 rounded-sm overflow-hidden relative">
                <Image
                  className=" object-cover"
                  src={BlogPost}
                  alt="BlogPost"
                  fill
                />
              </div>
              <div className="w-full sm:w-[calc(100%-10rem)]">
                <span className="block w-fit py-1 px-2 rounded-sm bg-gradient-to-b from-orange-600 to-orange-800 text-white font-medium text-[10px]">
                  Technology
                </span>
                <h3 className="sm:font-bold text-base mt-3 sm:mt-1">
                  Uber (UBER) Q3 Results: Uber share price rally on strong
                </h3>
                <p className="text-sm sm:text-base my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium
                </p>
                <span className="flex items-center gap-2 text-xs ">
                  <Image
                    className=""
                    src={calendarIcon}
                    alt="icon"
                    width={18}
                    height={18}
                  />
                  December 2021
                </span>
              </div>
            </div>
            <div className="w-full cursor-pointer flex flex-wrap sm:flex-nowrap gap-4 items-center">
              <div className="w-28 h-28 object-cover sm:w-40 sm:h-40 rounded-sm overflow-hidden relative">
                <Image
                  className=" object-cover"
                  src={BlogPost}
                  alt="BlogPost"
                  fill
                />
              </div>
              <div className="w-full sm:w-[calc(100%-10rem)]">
                <span className="block w-fit py-1 px-2 rounded-sm bg-gradient-to-b from-orange-600 to-orange-800 text-white font-medium text-[10px]">
                  Technology
                </span>
                <h3 className="sm:font-bold text-base mt-3 sm:mt-1">
                  Uber (UBER) Q3 Results: Uber share price rally on strong
                </h3>
                <p className="text-sm sm:text-base my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium
                </p>
                <span className="flex items-center gap-2 text-xs ">
                  <Image
                    className=""
                    src={calendarIcon}
                    alt="icon"
                    width={18}
                    height={18}
                  />
                  December 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-9 mb-16">
        <div className="w-full px-4 lg:px-0">
          <EcommerceTabbing />
        </div>
      </section>

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default BlogPage;
