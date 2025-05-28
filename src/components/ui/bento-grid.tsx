import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[21rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent  mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  image,
  category,
}: {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  category?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200  shadow-none p-4 bg-black border-white/[0.2]  border  justify-between flex flex-col space-y-4"
      )}
    >
      {image && (
        <Image
          src={image}
          alt="image"
          width={200}
          height={200}
          className="w-full h-[150px] object-cover rounded-xl "
        />
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <p className="border w-fit border-orange-500  bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          {category}
        </p>
        <div className="font-sans font-bold line-clamp-2  text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal lg:min-h-max text-xs text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
