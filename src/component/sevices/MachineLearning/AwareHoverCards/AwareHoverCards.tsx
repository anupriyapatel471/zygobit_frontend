"use client";

import { DirectionAwareHover } from "../../../../components/ui/direction-aware-hover";
import cardsData from "../../../../utils/content/AwareHoverCards/mlAi.json";

export function AwareHoverCards() {
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {cardsData.map((card, i) => (
          <div
            key={i}
            className="w-full h-auto relative  flex items-center justify-center"
          >
            <DirectionAwareHover imageUrl={card.image}>
              <div className="w-full p-4 bg-[#D9D9D91A] backdrop-blur-xl rounded-b-xl border-t-0 border border-white ">
                <h3 className="font-semibold text-xl mb-3">{card.title}</h3>
                <p className="font-normal text-sm sm:text-base">
                  {card.description}
                </p>
              </div>
            </DirectionAwareHover>
          </div>
        ))}
      </div>
    </>
  );
}
