"use client";
import React from "react";
import { LayoutGrid } from "../../../components/ui/layout-grid";

interface MobileAppGridProps {
  cards: {
    id: number;
    content: React.ReactNode;
    className: string;
    title: string;
    thumbnail: string;
  }[];
}

export function MobileAppGrid({ cards }: MobileAppGridProps) {
  return (
    <div className="w-full h-screen">
      <LayoutGrid cards={cards} />
    </div>
  );
}
