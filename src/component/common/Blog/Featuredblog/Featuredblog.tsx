import { truncateText } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../../../components/ui/bento-grid";
import { useBlog } from "@/hooks/dynamoDb/useBlog";
import { Loader } from "lucide-react";
export default function FeaturedBlog() {
  const { blogs, loading } = useBlog();

  return loading ? (
    <Loader />
  ) : (
    <BentoGrid className=" mx-auto md:auto-rows-[21rem]">
      {blogs.slice(0, 6).map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={truncateText(item.description, 100)}
          image={item.image}
          category={item.category}
        />
      ))}
    </BentoGrid>
  );
}
