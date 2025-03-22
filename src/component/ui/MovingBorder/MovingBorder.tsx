"use client";
import React from "react";
import { Button } from "../../../components/ui/moving-border";
import Image from "next/image";
import calendarIcon from "../../../../public/images/calendar_icon.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useRouter } from "next/navigation";
import { truncateText } from "@/lib/utils";
import Loader from "@/component/common/Loader/Loader";
import { useBlog } from "@/hooks/dynamoDb/useBlog";

interface MovingBordersProps {
  selectedCategory: string;
}

export function MovingBorders({ selectedCategory }: MovingBordersProps) {
  const router = useRouter();
  const filter =
    selectedCategory === "All" ? {} : { category: { eq: selectedCategory } };

  const { blogs, loading } = useBlog(filter);

  return loading ? (
    <Loader />
  ) : (
    <Carousel>
      <CarouselContent>
        {blogs.map((card) => (
          <CarouselItem
            key={card.id}
            className="flex justify-center mx-auto md:basis-1/2 lg:basis-1/3"
          >
            <Button
              onClick={() => router.push(`/blog/${card.id}`)}
              className="bg-white/5 cursor-pointer rounded-2xl overflow-hidden backdrop-blur-lg text-white border border-[#7C2D12]"
            >
              <div className="w-full overflow-hidden relative h-[184px]">
                <Image src={card.image} alt="BlogCard" fill />
              </div>
              <div className="w-full text-left p-4 sm:px-6 sm:py-5">
                <div className="w-full flex justify-between">
                  <span className="block w-fit py-1 px-2 rounded-sm bg-white text-[#431407] font-medium text-[10px]">
                    {card.category}
                  </span>
                  <span className="flex items-center gap-2 text-xs">
                    <Image
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
                <p className="text-sm">{truncateText(card.description)}</p>
              </div>
            </Button>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
