import { truncateText } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../../../components/ui/bento-grid";
import { useBlog } from "@/hooks/dynamoDb/useBlog";
export default function FeaturedBlog() {
  const { blogs } = useBlog();
  return (
    <BentoGrid className=" mx-auto md:auto-rows-[21rem]">
      {blogs.slice(0, 6).map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={truncateText(item.description)}
          image={item.image}
          category={item.category}
        />
      ))}
    </BentoGrid>
  );
}
