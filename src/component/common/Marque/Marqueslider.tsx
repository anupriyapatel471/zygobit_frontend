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
    <figure className={cn("relative w-auto cursor-pointer overflow-hidden mr-10")}>
      <div className="flex flex-row items-center gap-2">
        {/* <img className="w-auto" alt="" src={img} /> */}
        <Image
          src={img}
          alt="Review Image"
          width={120} 
          height={80}
          className="w-auto h-auto"
          // layout="responsive "
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
