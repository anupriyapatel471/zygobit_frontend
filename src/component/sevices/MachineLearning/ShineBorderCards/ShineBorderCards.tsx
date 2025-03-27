import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
import shineBorderCardsData from "../../../../utils/content/shineBorderCards/mlAi.json";

export function ShineBorderCards() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
      {shineBorderCardsData.map((card, index) => (
        <ShineBorder
          key={index}
          className="relative flex ] w-full flex-col items-center justify-center overflow-hidden rounded-lg"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="size-full py-4 sm:p-5 rounded-xl overflow-hidden relative z-20">
            <div className="relative z-50 overflow-hidden">
              <span>
                <Image
                  src={"/images/dollar_icon.svg"}
                  alt="Dollar Icon"
                  width={50}
                  height={50}
                />
              </span>
              <div className="px-4">
                <h4 className="text-white font-semibold text-base sm:text-lg lg:text-xl tracking-wide my-4">
                  {card.title}
                </h4>
                <p className="text-white tracking-wide leading-relaxed text-sm sm:text-base">
                  {card.description}
                </p>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                className="object-contain"
                src={"/images/gray_stars_bg.png"}
                alt="Background"
                width={800}
                height={600}
              />
            </div>
          </div>
        </ShineBorder>
      ))}
    </div>
  );
}
