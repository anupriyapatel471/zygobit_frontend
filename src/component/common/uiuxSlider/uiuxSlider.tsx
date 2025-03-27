import { cn } from "@/lib/utils";
import Marquee from "../../../components/ui/marquee";
import Image from "next/image";

interface prop {
  firstRow: {
    name: string;
    username: string;
    body: string;
    img: string;
  }[];
}

const ReviewCard = ({
  img,
  name,
  username,
}: {
  img: string;
  name: string;
  username: string;
}) => {
  return (
    <figure
      className={cn(
        "relative max-w-[290px] sm:max-w-sm lg:max-w-[450px] cursor-pointer overflow-hidden  border",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="w-[400px] h-[300px] sm:h-[400px] lg:h-[450px]">
          <Image className="object-cover" src={img} alt={name} fill />
        </div>
        <div className="absolute top-0 left-0 size-full bg-black/50"></div>
        <div className="flex px-4 sm:px-10  absolute top-1/2 -translate-y-1/2 left-0 flex-col">
          <figcaption className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-sm sm:text-lg lg:text-xl mt-2 sm:mt-5 lg:mt-10 ">
            {username}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function UiuxSlider({ firstRow }: prop) {
  return (
    <div className="relative px-4 sm:px-5 lg:px-20 flex  w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
