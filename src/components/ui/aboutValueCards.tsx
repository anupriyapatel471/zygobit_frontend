import MagicCard from "@/components/ui/about-magic-cards";
import Image from "next/image";
import Innovation from "../../../public/images/inovation.svg";
import cardsDataRaw from "../../utils/content/aboutValueCrads/aboutValueCards.json";

interface CardData {
  title: string;
  description: string;
}

interface CardsResponse {
  values: CardData[];
}

const cardsData = (cardsDataRaw as CardsResponse).values;

export default function AboutValueCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 w-full mt-10 sm:mt-12 lg:mt-16">
      {cardsData.map((card: CardData, i: number) => (
        <MagicCard
          key={i}
          className="cursor-pointer relative overflow-hidden py-4 sm:py-6 px-0 sm:px-8 bg-[#D9D9D91A] backdrop-blur-xl"
          gradientColor="#D9D9D955"
        >
          <span>
            <Image src={Innovation} width={66} height={66} alt="icon" />
          </span>
          <div className="w-full px-4">
            <h3 className="font-semibold text-base sm:text-lg lg:text-xl my-2">
              {card.title}
            </h3>
            <p className="text-sm sm:text-base">{card.description}</p>
          </div>
        </MagicCard>
      ))}
    </div>
  );
}
