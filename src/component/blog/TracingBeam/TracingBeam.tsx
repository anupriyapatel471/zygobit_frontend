import React from "react";
import Image from "next/image";
import { TracingBeam } from "../../../components/ui/tracing-beam";

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
  slug: string;
}

export function TracingBeams({ blog }: { blog: Blog }) {
  const calendarIcon = "/images/calendar_icon.svg";

  return (
    <>
      {blog && (
        <TracingBeam className="mt-24 sm:mt-24 lg:mt-32 mb-0 sm:mb-14 lg:mb-20 px-0 sm:px-0 lg:px-0 max-w-[1248px] mx-auto">
          <div className="container remove-bg">
            <div className="w-full antialiased sm:pt-4 relative lg:pl-[60px]">
              <div className="sm:mb-10">
                <h1 className=" text-white font-medium sm:font-bold text-2xl sm:text-4xl w-fit mb-2  sm:mb-4">
                  {blog.title}
                </h1>
                <b className="font-light sm:font-semibold text-sm block my-3">
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

                <div className="text-sm sm:text-sm lg:text-xl  prose prose-sm dark:prose-invert">
                  <Image
                    src={blog.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="w-full rounded-2xl my-5 lg:my-9 object-cover"
                  />
                  {blog.description}
                </div>
                <p className="text-sm sm:text-sm lg:text-xl">{blog.title}</p>
                {Array.isArray(blog.projectInfo) &&
                  blog.projectInfo.length > 0 && (
                    <div className="mt-6">
                      {blog.projectInfo.map((project, projIndex) => (
                        <div key={`project-${projIndex}`} className="mb-4">
                          <h2 className="text-base sm:text-lg font-medium mb-2 sm:mb-0 sm:font-semibold">
                            {project.SubTitle}
                          </h2>
                          <p className="text-sm font-light sm:font-normal">
                            {project.SubDescription}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </TracingBeam>
      )}
    </>
  );
}
