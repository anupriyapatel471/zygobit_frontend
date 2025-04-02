"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../../../components/ui/tracing-beam";
import calendarIcon from "../../../../public/images/calendar_icon.svg";
import { useParams } from "next/navigation";
import { useBlog } from "@/hooks/dynamoDb/useBlog";
import Loader from "@/component/common/Loader/Loader";

export function TracingBeams() {
  const { id } = useParams();
  const filter = id ? { id: { eq: id } } : {};
  const { blogs, loading } = useBlog(filter);
  return loading ? (
    <Loader />
  ) : (
    <>
      {blogs.length > 0 && (
        <TracingBeam className="mt-24 sm:mt-32 mb-16 sm:mb-20">
          <div className="w-full antialiased sm:pt-4 relative">
            {blogs.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className=" text-white font-bold text-2xl sm:text-4xl w-fit mb-2  sm:mb-4">
                  {item.title}
                </h2>
                <b className="font-semibold text-sm block my-3">
                  Tag: {item.tags && item.tags.join(", ")}
                </b>
                <span className="flex items-center gap-2 text-xs ">
                  <Image
                    className=" object-cover"
                    src={calendarIcon}
                    alt="icon"
                    width={18}
                    height={18}
                  />
                  Published on {item.publishedDate}
                </span>

                <div className="text-sm sm:text-lg lg:text-xl  prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="w-full rounded-2xl my-5 lg:my-9 object-cover"
                    />
                  )}
                  {item.description}
                </div>
                <p className="text-sm sm:text-lg lg:text-xl">{item.title}</p>
                {Array.isArray(item.projectInfo) &&
                  item.projectInfo.length > 0 && (
                    <div className="mt-6">
                      {item.projectInfo.map((project, projIndex) => (
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
            ))}
          </div>
        </TracingBeam>
      )}
    </>
  );
}
