/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../../../components/ui/tracing-beam";
import calendarIcon from "../../../../public/images/calendar_icon.svg";

interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tags?: string[];
  publishedDate?: string;
  projectInfo?: {
    SubTitle: string;
    SubDescription: string;
  }[];
}

export function TracingBeams({ blog }: { blog: Blog }) {
  return (
    <>
      <TracingBeam className="mt-24 sm:mt-32 mb-16 sm:mb-20">
        <div className="w-full antialiased sm:pt-4 relative">
          <div className="mb-10">
            <h2 className=" text-white font-bold text-2xl sm:text-4xl w-fit mb-2  sm:mb-4">
              {blog.title}
            </h2>
            <b className="font-semibold text-sm block my-3">
              Tag: {blog.tags && blog.tags.join(", ")}
            </b>
            <span className="flex items-center gap-2 text-xs ">
              <Image
                className=" object-cover"
                src={calendarIcon}
                alt="icon"
                width={18}
                height={18}
              />
              Published on {blog.publishedDate}
            </span>

            <div className="text-sm sm:text-lg lg:text-xl  prose prose-sm dark:prose-invert">
              <Image
                src={blog.image}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="w-full rounded-2xl my-5 lg:my-9 object-cover"
              />
              {blog.description}
            </div>
            <p className="text-sm sm:text-lg lg:text-xl">{blog.title}</p>
            {Array.isArray(blog.projectInfo) && blog.projectInfo.length > 0 && (
              <div className="mt-6">
                {blog.projectInfo.map((project, projIndex) => (
                  <div key={`project-${projIndex}`} className="mb-4">
                    <h3 className="text-lg font-semibold">
                      {project.SubTitle}
                    </h3>
                    <p className="text-sm">{project.SubDescription}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </TracingBeam>
    </>
  );
}
