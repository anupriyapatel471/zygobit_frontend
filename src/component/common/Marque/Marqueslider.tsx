import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: "/images/slick.png",
  },
  {
    img: "/images/abbsi.png",
  },
  {
    img: "/images/pilot.png",
  },
  {
    img: "/images/residence.png",
  },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn("relative w-auto cursor-pointer overflow-hidden mr-10")}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={img}
          alt="Review Image"
          width={150}
          height={110}
          className="w-[100px] h-[40px] object-contain"
        />
      </div>
    </figure>
  );
};

export default function MarqueeSlider() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className=" [--duration:20s]">
        {reviews.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
    </div>
  );
}
