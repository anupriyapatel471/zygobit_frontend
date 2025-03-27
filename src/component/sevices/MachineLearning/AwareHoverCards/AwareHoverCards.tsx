"use client";

import { DirectionAwareHover } from "../../../../components/ui/direction-aware-hover";
import cardsData from "../../../../utils/content/AwareHoverCards/mlAi.json";

export function AwareHoverCards() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {cardsData.map((card, i) => (
          <div
            key={i}
            className="w-full h-auto relative  flex items-center justify-center"
          >
            <DirectionAwareHover imageUrl={imageUrl}>
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
