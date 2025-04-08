import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    imageSrc: "/images/scope_icon.svg",
    alt: "Planning Icon",
    title: "Planning",
    description:
      "As a leading web development agency, we begin with in-depth planning to align your goals with a structured development roadmap, ensuring a seamless and effective execution.",
  },
  {
    id: 2,
    imageSrc: "/images/calculator.svg",
    alt: "Budget Transparency Icon",
    title: "Budget Transparency",
    description:
      "Our web development team provides clear cost breakdowns, guaranteeing no hidden fees or unexpected expenses while delivering high-quality solutions.",
  },
  {
    id: 3,
    imageSrc: "/images/manage.svg",
    alt: "Quality Assurance Icon",
    title: "Quality Assurance",
    description:
      "As an experienced web development firm, we ensure flawless and optimized websites with rigorous testing and best coding practices.",
  },
  {
    id: 4,
    imageSrc: "/images/collab.svg",
    alt: "Collaboration Icon",
    title: "Collaboration",
    description:
      "We foster transparent communication, integrating your feedback at every stage to create custom websites that meet your business needs.",
  },
  {
    id: 5,
    imageSrc: "/images/security.svg",
    alt: "Security Implementation Icon",
    title: "Security Implementation",
    description:
      "Security is at the core of our web solutions, protecting user data and ensuring compliance with industry standards to prevent vulnerabilities.",
  },
  {
    id: 6,
    imageSrc: "/images/idea.svg",
    alt: "Innovation & Trends Icon",
    title: "Innovation & Trends",
    description:
      "As a top web development provider, we stay ahead of industry trends, levera",
  },
];

export function CardSpotlights() {
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {cardData.map((card) => (
          <CardSpotlight
            key={card.id}
            className="w-full text-left  rounded-xl bg-white/5 p-5"
          >
            <span className="relative z-20">
              {/* <img src={card.imageSrc} alt={card.alt} /> */}
              <Image
                src={card.imageSrc}
                alt={card.alt}
                width={48} // You can set a specific width
                height={48} // You can set a specific height
              />
            </span>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold relative z-20 mt-2 mb-3 text-white">
              {card.title}
            </h3>
            <p className="text-white relative z-20 text-sm sm:text-base">
              {card.description}
            </p>
          </CardSpotlight>
        ))}
      </div>
    </>
  );
}
