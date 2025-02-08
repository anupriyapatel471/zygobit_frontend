import { cn } from "@/lib/utils";
import  Marquee  from "../../../components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Education and E-Learning",
    username: "We specialize in UI/UX design audits for educational platforms, creating interactive and engaging user experiences. Our designs keep students engaged with easy navigation and content accessibility",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/images/education.png",
  },
  {
    name: "Education and E-Learning",
    username: "We specialize in UI/UX design audits for educational platforms, creating interactive and engaging user experiences. Our designs keep students engaged with easy navigation and content accessibility",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/images/education.png",
  },
  {
    name: "Education and E-Learning",
    username: "We specialize in UI/UX design audits for educational platforms, creating interactive and engaging user experiences. Our designs keep students engaged with easy navigation and content accessibility",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/education.png",
  },
  {
    name: "Education and E-Learning",
    username: "We specialize in UI/UX design audits for educational platforms, creating interactive and engaging user experiences. Our designs keep students engaged with easy navigation and content accessibility",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/education.png",
  },
  {
    name: "Education and E-Learning",
    username: "We specialize in UI/UX design audits for educational platforms, creating interactive and engaging user experiences. Our designs keep students engaged with easy navigation and content accessibility",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/education.png",
  },
  {
    name: "Education and E-Learning",
    username: "We specialize in UI/UX design audits for educational platforms, creating interactive and engaging user experiences. Our designs keep students engaged with easy navigation and content accessibility",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/images/education.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  // body,
}: {
  img: string;
  name: string;
  username: string;
  // body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative max-w-[290px] sm:max-w-sm lg:max-w-[450px] cursor-pointer overflow-hidden  border",
        // dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover" width="32" height="32" alt="" src={img} /> */}
        <Image
            className="object-cover"
            src={img}
            alt={name}
            height={300}
            width={400}
          />
        <div className="absolute top-0 left-0 size-full bg-black/50">

        </div>
        <div className="flex px-4 sm:px-10  absolute top-1/2 -translate-y-1/2 left-0 flex-col">
          <figcaption className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-sm sm:text-lg lg:text-xl mt-2 sm:mt-5 lg:mt-10 ">{username}</p>
        </div>
      </div>
    </figure>
  );
};

export default function UiuxSlider() {
  return (
    <div className="relative px-4 sm:px-5 lg:px-20 flex  w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
    </div>
  );
}
