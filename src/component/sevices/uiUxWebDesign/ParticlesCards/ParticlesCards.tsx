import Image from "next/image";

const cardData = [
  {
    id: 1,
    imgSrc: "/images/type.svg",
    title: "UIUX Audits",
    description: `Our UI UX Consultants evaluate your current user experience,
identify strengths, and offer ui ux design audit services to areas
for improvement.`,
  },
  {
    id: 2,
    imgSrc: "/images/type.svg",
    title: "Wireframing & Prototyping",
    description: `We create detailed wireframes and interactive prototypes to visualize the user journey before development.`,
  },
  {
    id: 3,
    imgSrc: "/images/type.svg",
    title: "User Research & Testing",
    description: `Our team conducts in-depth research and A/B testing to understand user behavior and enhance usability.`,
  },
  {
    id: 4,
    imgSrc: "/images/type.svg",
    title: "Responsive & Mobile-First Design",
    description: `We ensure your website or app is fully responsive and optimized for mobile, tablet, and desktop users.`,
  },
  {
    id: 5,
    imgSrc: "/images/type.svg",
    title: "Dashboard & SaaS UI Design",
    description: `Creating intuitive and scalable dashboards for SaaS platforms, ensuring seamless data visualization and navigation.`,
  },
  {
    id: 6,
    imgSrc: "/images/type.svg",
    title: "Accessibility & Inclusive Design",
    description: `Optimizing digital experiences for all users, including those with disabilities, to meet WCAG standards.`,
  },
  {
    id: 7,
    imgSrc: "/images/type.svg",
    title: "Brand Identity & Design Systems",
    description: `Developing cohesive design systems, UI kits, and style guides to maintain consistency across your digital products.`,
  },
  {
    id: 8,
    imgSrc: "/images/type.svg",
    title: "Motion UI & Microinteractions",
    description: `Enhancing user engagement with subtle animations, transitions, and microinteractions for a modern feel.`,
  },
  {
    id: 9,
    imgSrc: "/images/type.svg",
    title: "Conversion Rate Optimization (CRO)",
    description: `Analyzing user journeys and refining designs to improve conversions and increase engagement.`,
  },
];

export function ParticlesCards() {
  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="relative bg-[#D9D9D91A] backdrop-blur-md px-4 py-4 sm:px-11 sm:py-6  rounded-lg flex w-full flex-col items-center justify-center overflow-hidden"
          >
            <div className="z-10 whitespace-pre-wrap sm:text-center w-full">
              <span>
                <Image
                  className="w-12 relative sm:static -left-[15px] sm:w-auto sm:mx-auto"
                  src={card.imgSrc}
                  alt="card image"
                  width={100}
                  height={100}
                />
              </span>
              <h3 className="font-semibold text-base sm:text-lg lg:text-xl my-4">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
