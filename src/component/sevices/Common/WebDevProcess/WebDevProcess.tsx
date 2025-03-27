import React, { ReactNode } from "react";
import { Timeline } from "@/components/ui/timelineSecond";

interface WebDevProcessProps {
  data: {
    title: string;
    content: ReactNode;
  }[];
}
export default function WebDevProcess({ data }: WebDevProcessProps) {
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
