"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/moving-border";
import Image from "next/image";
import calendarIcon from "../../../../public/images/calendar_icon.svg";

import { generateClient } from "aws-amplify/data";
import type { Schema } from "../../../../../zygobit_website_backend/amplify/data/resource";
import useAmplifyConfig from "@/hooks/useAmplify";
import { useRouter } from "next/navigation";
const client = generateClient<Schema>();

interface BlogPost {
  category: string;
  createdAt: string;
  description: string;
  id: string;
  image: string;
  publishedDate: string;
  tags: string[];
  title: string;
  updatedAt: string;
}
interface MovingBordersProps {
  selectedCategory: string;
}

export function MovingBorders({ selectedCategory }: MovingBordersProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const router = useRouter();

  useAmplifyConfig();

  const fetchBlogs = async () => {
    try {
      let res;
      if (selectedCategory === "All") {
        res = await client.models.Blog.list();
      } else {
        res = await client.models.Blog.list({
          filter: { category: { eq: selectedCategory } },
        });
      }
      setBlogs(res.data as BlogPost[]);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [selectedCategory]);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7">
      {blogs.map((card) => (
        <Button
          key={card.id}
          onClick={() => router.push(`/Blog/${card.id}`)}
          className="bg-white/5 cursor-pointer rounded-2xl overflow-hidden backdrop-blur-lg text-white border  border-[#7C2D12]"
        >
          <div className="w-full overflow-hidden relative h-[184px]">
            <Image src={card.image} alt="BlogCard" fill />
          </div>
          <div className="w-full text-left p-4 sm:px-6 sm:py-5">
            <div className="w-full flex justify-between">
              <span className="block w-fit py-1 px-2 rounded-sm bg-white  text-[#431407] font-medium text-[10px]">
                {card.category}
              </span>
              <span className="flex items-center gap-2 text-xs ">
                <Image
                  className=""
                  src={calendarIcon}
                  alt="icon"
                  width={18}
                  height={18}
                />
                {card.publishedDate}
              </span>
            </div>
            <h3 className="sm:font-bold text-base mt-2 sm:mt-3 mb-2 sm:mb-4">
              {card.title}
            </h3>
            <p className="text-sm">{card.description}</p>
          </div>
        </Button>
      ))}
    </div>
  );
}
