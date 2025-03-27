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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0 gap-6">
        {cardData.map((card) => (
          <CardSpotlight
            key={card.id}
            className="w-full text-left border border-white rounded-xl bg-white/5 p-4"
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

// const Step = ({ title }: { title: string }) => {
//   return (
//     <li className="flex gap-2 items-start">
//       <CheckIcon />
//       <p className="text-white">{title}</p>
//     </li>
//   );
// };

// const CheckIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path
//         d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
//         fill="currentColor"
//         strokeWidth="0"
//       />
//     </svg>
//   );
// };
