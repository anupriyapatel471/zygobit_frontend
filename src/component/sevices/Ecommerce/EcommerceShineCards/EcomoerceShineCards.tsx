import { ShineBorder } from "@/components/ui/shine-border";
import Image from "next/image";

export function EcommerceShineCards() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
      {pillers.map((pilller, i) => (
        <ShineBorder
          key={i}
          className="relative  w-full  items-center justify-center overflow-hidden rounded-lg"
          // color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className=" h-full bg-[#D9D9D91A] backdrop-blur-md relative rounded-lg overflow-hidden py-4 sm:py-6 px-0 sm:px-4 lg:px-8 sm:text-center ">
            <span>
              <Image
                src={pilller.image}
                className="sm:mx-auto"
                width={66}
                height={66}
                alt="Innovation image"
              />
            </span>
            <div className="w-full px-4">
              <h3 className="font-semibold text-base sm:text-lg lg:text-xl my-2">
                {pilller.title}
              </h3>
              <p className="text-sm sm:text-base">{pilller.description}</p>
            </div>
          </div>
        </ShineBorder>
      ))}
    </div>
  );
}

const pillers = [
  {
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking to craft cutting-edge solutions that help businesses stay ahead in a competitive landscape.",
    image: "/images/inovation.svg",
  },
  {
    title: "Scalability",
    description:
      "Our solutions are built for growth, ensuring your eCommerce platform evolves with increasing demands and new market trends.",
    image: "/images/intergrity.svg",
  },
  {
    title: "Automation",
    description:
      "Enhance efficiency with AI-driven automation that streamlines operations, optimizes workflows, and reduces manual tasks.",
    image: "/images/client_centric_approach.svg",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Deliver personalized experiences with AI-powered insights that drive engagement, boost sales, and enhance user satisfaction.",
    image: "/images/excellence.svg",
  },
];
