"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TracingBeam } from "../../../components/ui/tracing-beam";
import calendarIcon from "../../../../public/images/calendar_icon.svg";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../../../zygobit_website_backend/amplify/data/resource";
import useAmplifyConfig from "@/hooks/useAmplify";
import { useParams } from "next/navigation";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  publishedDate: string;
  tags: string[];
}
const client = generateClient<Schema>();

export function TracingBeams() {
  const { Id } = useParams();

  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  useAmplifyConfig();

  const fetchBlogs = async (blogId: string) => {
    try {
      const res = await client.models.Blog.list({
        filter: { id: { eq: blogId } },
      });
      setBlogs(res.data as BlogPost[]);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  useEffect(() => {
    if (Id && typeof Id === "string") {
      fetchBlogs(Id);
    }
  }, [Id]);
  return (
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
              </div>
            ))}
          </div>
        </TracingBeam>
      )}
    </>
  );
}
