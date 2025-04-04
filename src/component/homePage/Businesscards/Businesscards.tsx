/* eslint-disable @next/next/no-img-element */
const solutions = [
  {
    id: 1,
    img: "/images/sol_one.png",
    title: "Strategic Business Solutions",
    items: [
      "Comprehensive analysis of your unique business needs.",
      "Custom-built strategies designed to drive results.",
      "Scalable solutions adaptable to future growth.",
      "Focused on delivering measurable outcomes.",
    ],
  },
  {
    id: 2,
    img: "/images/sol_one.png",
    title: "Strategic Business Solutions",
    items: [
      "Comprehensive analysis of your unique business needs.",
      "Custom-built strategies designed to drive results.",
      "Scalable solutions adaptable to future growth.",
      "Focused on delivering measurable outcomes.",
    ],
  },
  {
    id: 3,
    img: "/images/sol_three.png",
    title: "Strategic Business Solutions",
    items: [
      "Comprehensive analysis of your unique business needs.",
      "Custom-built strategies designed to drive results.",
      "Scalable solutions adaptable to future growth.",
      "Focused on delivering measurable outcomes.",
    ],
  },
  {
    id: 4,
    img: "/images/sol_four.png",
    title: "Strategic Business Solutions",
    items: [
      "Comprehensive analysis of your unique business needs.",
      "Custom-built strategies designed to drive results.",
      "Scalable solutions adaptable to future growth.",
      "Focused on delivering measurable outcomes.",
    ],
  },
];

const BusinessCards = () => {
  return (
    <section
      data-aos="fade-up"
      className="w-full relative py-0 px-0 overflow-hidden"
    >
      <div className="container">
        <div className="w-full sm:text-center mb-5 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-4xl lg:text-[38px] text-gradiant-custom 2xl:text-[40px] font-bold">
            Revolutionizing Businesses with Excellence & Expertise
          </h2>
        </div>
        <div className="w-full grid grid-cols-4 gap-5">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="w-full hover:bg-orange-600 rounded-2xl border-2 border-white/20 p-5 text-white group"
            >
              <span className="border-2 border-white/20 flex items-center justify-center rounded-xl w-20 h-20 overflow-hidden">
                <img
                  className="group-hover:brightness-0 group-hover:invert size-full"
                  src={solution.img}
                  alt=""
                />
              </span>
              <h3 className="font-bold text-xl my-4">{solution.title}</h3>
              <ul className="list-disc pl-4 text-base">
                {solution.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCards;
