"use client";

import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export function BannerGridBg() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,gray,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
