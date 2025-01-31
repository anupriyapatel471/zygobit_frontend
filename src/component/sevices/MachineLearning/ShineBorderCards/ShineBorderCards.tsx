import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";
// import Image from "next/image";

const cardData = [
  {
    title: "Cost-Effective Process",
    description:
      "At Zygobit, our custom web app development solutions are designed for cost-effectiveness, ensuring your project is executed efficiently without compromising quality",
    icon: "/images/dollar_icon.svg",
    backgroundImage: "/images/gray_stars_bg.png",
  },
  {
    title: "Cost-Effective Process",
    description:
      "At Zygobit, our custom web app development solutions are designed for cost-effectiveness, ensuring your project is executed efficiently without compromising quality",
    icon: "/images/dollar_icon.svg",
    backgroundImage: "/images/gray_stars_bg.png",
  },
  {
    title: "Cost-Effective Process",
    description:
      "At Zygobit, our custom web app development solutions are designed for cost-effectiveness, ensuring your project is executed efficiently without compromising quality",
    icon: "/images/dollar_icon.svg",
    backgroundImage: "/images/gray_stars_bg.png",
  },
  {
    title: "Cost-Effective Process",
    description:
      "At Zygobit, our custom web app development solutions are designed for cost-effectiveness, ensuring your project is executed efficiently without compromising quality",
    icon: "/images/dollar_icon.svg",
    backgroundImage: "/images/gray_stars_bg.png",
  },
  // Add more card data as necessary
];

export function ShineBorderCards() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-0">
      {cardData.map((card, index) => (
        <ShineBorder
          key={index}
          className="relative flex ] w-full flex-col items-center justify-center overflow-hidden rounded-lg"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="size-full py-4 sm:p-5 rounded-xl overflow-hidden relative z-20">
            <div className="relative z-50 overflow-hidden">
              <span>
                {/* <img src={card.icon} alt="" /> */}
                <Image 
                  src={card.icon} 
                  alt="Dollar Icon"
                  width={50} // Set the appropriate width
                  height={50} // Set the appropriate height
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
              {/* <img className="w-full h-full" src={card.backgroundImage} alt="" /> */}
              <Image
    className="object-contain"  // Ensures the image keeps its aspect ratio
    src={card.backgroundImage}
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
