"use client";
import { ContactnewForm } from "@/component/new/ContactNewForm";
import { gridButtonOpen } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface CardProps {
  id: number;
  title: string;
  content: string;
  className: string;
  bgClass: string;
  thumbnail?: string;
  boxIcon: string;
}

interface GridBoxesProps {
  GridBoxesHeading: string;
  GridBoxesDetail: string;
  cards: CardProps[];
}

const GridBoxes: React.FC<GridBoxesProps> = ({
  GridBoxesHeading,
  GridBoxesDetail,
  cards,
}) => {
  return (
    <section className="w-full sm:pt-10 pb-12 lg:pb-16 lg:pt-16">
      <div className="container remove-bg">
        <div className="w-full sm:text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradiant-custom-second">
            {GridBoxesHeading}
          </h2>
          <p className="sm:font-medium text-sm sm:text-base lg:text-xl max-w-6xl mx-auto mt-3 lg:mt-5">
            {GridBoxesDetail}
          </p>
        </div>
        <div className="w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-10">
            {cards.map((card) => (
              <div
                key={card.id}
                className={
                  `w-full max-h-[165px] sm:max-h-[220px] lg:max-h-[324px] lg:min-h-[324px] overflow-hidden ` +
                  `transition-all duration-300 group p-4 lg:p-10 ${card.className} rounded-2xl hover:bg-[#1E1E20] ` +
                  `${card.bgClass} relative`
                }
              >
                {card.thumbnail && (
                  <div className="w-full h-full group-hover:invisible transition-all duration-300 absolute top-0 left-0 -z-10">
                    <Image
                      fill
                      className="-z-20 object-cover"
                      src={card.thumbnail}
                      alt="background"
                    />
                  </div>
                )}
                <ContactnewForm formOpen={gridButtonOpen} />
                {card.bgClass == "bg-orange-600" && (
                  <div className="group-hover:invisible   absolute bottom-0 right-0  z-10">
                    <Image
                      width={147}
                      height={221}
                      className=" w-[147px] h-[221px] object-cover"
                      src="/images/white_g.png"
                      alt="white g icon"
                    />
                  </div>
                )}
                <div className="group-hover:hidden transition-all duration-300 mb-5">
                  <Image
                    width={60}
                    height={60}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 object-contain"
                    src={card.boxIcon}
                    alt="icon"
                  />
                </div>
                <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl pr-14 sm:pr-0 text-white mb-4 sm:mb-12 lg:pr-5">
                  {card.title}
                </h2>

                <p className="text-white transition-all line-clamp-5 duration-300 text-sm group-hover:opacity-100 group-hover:visible opacity-0 invisible lg:text-base">
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridBoxes;
