import MagicCard from "@/components/ui/about-magic-cards";

export default function AboutMagicCards() {
  return (
    <div
      className={
        " grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5  w-full  mt-10 sm:mt-12 lg:mt-16"
      }
    >
      <MagicCard
        className="cursor-pointer relative overflow-hidden py-4 sm:py-6 px-0 sm:px-8  bg-black "
        gradientColor="#D9D9D955"
      >
        <span>
          <img src="/images/inovation.svg" alt="" />
        </span>
        <div className="w-full px-4">
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl my-2">
            Innovation
          </h3>
          <p className="text-sm sm:text-base">
            We embrace creativity and forward-thinking to craft innovative,
            cutting-edge solutions that drive success and help businesses stay
            ahead in a competitive landscape.
          </p>
        </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer relative overflow-hidden py-4 sm:py-6 px-0 sm:px-8  bg-black "
        gradientColor="#D9D9D955"
      >
        <span>
          <img src="/images/inovation.svg" alt="" />
        </span>
        <div className="w-full px-4">
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl my-2">
            Innovation
          </h3>
          <p className="text-sm sm:text-base">
            We embrace creativity and forward-thinking to craft innovative,
            cutting-edge solutions that drive success and help businesses stay
            ahead in a competitive landscape.
          </p>
        </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer relative overflow-hidden py-4 sm:py-6 px-0 sm:px-8  bg-black "
        gradientColor="#D9D9D955"
      >
        <span>
          <img src="/images/inovation.svg" alt="" />
        </span>
        <div className="w-full px-4">
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl my-2">
            Innovation
          </h3>
          <p className="text-sm sm:text-base">
            We embrace creativity and forward-thinking to craft innovative,
            cutting-edge solutions that drive success and help businesses stay
            ahead in a competitive landscape.
          </p>
        </div>
      </MagicCard>
      <MagicCard
        className="cursor-pointer relative overflow-hidden py-4 sm:py-6 px-0 sm:px-8  bg-black "
        gradientColor="#D9D9D955"
      >
        <span>
          <img src="/images/inovation.svg" alt="" />
        </span>
        <div className="w-full px-4">
          <h3 className="font-semibold text-base sm:text-lg lg:text-xl my-2">
            Innovation
          </h3>
          <p className="text-sm sm:text-base">
            We embrace creativity and forward-thinking to craft innovative,
            cutting-edge solutions that drive success and help businesses stay
            ahead in a competitive landscape.
          </p>
        </div>
      </MagicCard>
    </div>
  );
}
