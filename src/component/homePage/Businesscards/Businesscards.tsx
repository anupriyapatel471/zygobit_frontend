import { BussinessCardsSlider } from "../BusinessCardsSlider";

/* eslint-disable @next/next/no-img-element */
const solutions = [
  {
    id: 1,
    img: "/images/sol_one.png",
    imgTwo: "/images/sol_one_new.svg",
    title: "Strategic Business Solutions",
    items: [
      "In-depth evaluation tailored to your specific goals.",
      "Tailor-made strategies engineered for impactful outcomes.",
      "Scalable models designed to grow with your business.",
      "Committed to driving tangible, measurable success.",
    ],
  },
  {
    id: 2,
    img: "/images/sol_two.png",
    imgTwo: "/images/sol_two_new.svg",
    title: "Advanced Technology Integration",
    items: [
      "Tailored tech assessments aligned with your operations.",
      "Personalized implementations that boost efficiency.",
      "Scalable architecture for future-proof development.",
      "Emphasis on results-driven digital transformation.",
    ],
  },
  {
    id: 3,
    img: "/images/sol_three.png",
    imgTwo: "/images/sol_three_new.svg",
    title: "Innovative Problem Solving Approach",
    items: [
      "Customized diagnostics for complex business challenges.",
      "Creative, results-oriented strategies crafted for you.",
      "Flexible solutions built for long-term adaptability.",
      "Laser-focused on real-world impact and success.",
    ],
  },
  {
    id: 4,
    img: "/images/sol_four.png",
    imgTwo: "/images/sol_four_new.svg",
    title: "Agile, Collaborative Process",
    items: [
      "Deep dive into your unique organizational dynamics.",
      "Interactive planning with stakeholder collaboration.",
      "Scalable frameworks for seamless future expansion.",
      "Performance-focused with clear outcome tracking.",
    ],
  },
];

const BusinessCards = () => {
  return (
    <section
      data-aos="fade-up"
      className="w-full relative py-0 px-0 overflow-hidden"
    >
      <div className="container remove-bg">
        <div className="w-full text-center mb-5 sm:mb-8 lg:mb-10">
          <h2 className=" text-2xl sm:text-4xl lg:text-[38px] text-gradiant-custom-second 2xl:text-[40px] font-bold">
            Revolutionizing Businesses with Excellence & Expertise
          </h2>
        </div>
        <div className="hidden w-full sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="w-full hover:bg-white hover:text-black rounded-2xl border-2 border-white/20 p-5 text-white group"
            >
              <span className="group-hover:border-orange-600 border-2 border-white/20 flex items-center justify-center rounded-xl w-14 h-14 sm:w-20 sm:h-20 overflow-hidden">
                <img
                  className="group-hover:hidden size-full"
                  src={solution.img}
                  alt=""
                />
                <img
                  className="hidden group-hover:inline-block w-10 h-10"
                  src={solution.imgTwo}
                  alt=""
                />
              </span>
              <h3 className="font-bold text-base sm:text-xl my-2.5 sm:my-4">
                {solution.title}
              </h3>
              <ul className="list-disc pl-4 space-y-1 sm:space-y-0 text-sm sm:text-base">
                {solution.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="inline-block w-full sm:hidden">
          <BussinessCardsSlider solutions={solutions} />
        </div>
      </div>
    </section>
  );
};

export default BusinessCards;
