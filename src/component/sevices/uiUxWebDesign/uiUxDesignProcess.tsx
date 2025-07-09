import Image from "next/image";

const uiUxDesignProcess = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        className="w-full py-12 sm:py-14 lg:py-20  relative"
      >
        <div className="container remove-bg">
          <div className="w-full sm:text-center mb-5 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradiant-custom-second">
              We Follow a Comprehensive UI UX Design Process
            </h2>
            <p className="sm:font-medium  text-sm sm:text-base lg:text-xl my-3">
              As a leading mobile UI/UX design services company, we meticulously
              fine-tune every aspect of your project to ensure an exceptional
              user experience that meets business goals and exceeds
              expectations.
            </p>
          </div>
          <div className=" w-full flex flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-10">
            <div className="w-full lg:w-32">
              <h3 className="font-bold sm:text-center lg:text-left text-xl sm:text-2xl lg:text-[32px] text-gradient-custom">
                UI Design Process
              </h3>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 pb-8 sm:mb-12 sm:pb-12 border-b border-white">
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <Image width={64} height={64} className="w-auto h-auto"  src="/images/setting_design_icon.svg" alt="icon" />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Setting Design Goals
                </h4>
                <p className="text-sm">
                  Define design objectives based on user needs and project
                  requirements to align UI/UX solutions with user expectations
                  and business goals
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <Image width={64} height={64} className="w-auto h-auto" src="/images/user_research_icon.svg" alt="icon" />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  User research & Analysis
                </h4>
                <p className="text-sm">
                  Conducting research to understand user behavior, expectations,
                  and pain points for data-driven decisions.
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <Image width={64} height={64} className="w-auto h-auto" src="/images/wireframing_icon.svg" alt="icon" />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Wireframing & Prototyping
                </h4>
                <p className="text-sm">
                  Creating interactive wireframes and prototypes to refine
                  functionality before development.
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <Image width={64} height={64} className="w-auto h-auto" src="/images/testing_icon.svg" alt="icon" />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Usability Testing
                </h4>
                <p className="text-sm">
                  Identifying areas for improvement through testing and
                  optimizing the user experience.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-wrap lg:flex-nowrap items-center gap-4 sm:gap-5 lg:gap-10">
            <div className="w-full lg:w-32">
              <h3 className="font-bold sm:text-center lg:text-left text-xl sm:text-2xl lg:text-[32px] text-gradient-custom">
                UX Design Process
              </h3>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 ">
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <Image width={64} height={64} className="w-auto h-auto" src="/images/setting_design_icon.svg" alt="icon" />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Visual Design & Branding
                </h4>
                <p className="text-sm">
                  Crafting visually appealing designs that align with brand
                  identity.
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <Image width={64} height={64} className="w-auto h-auto" src="/images/user_research_icon.svg" alt="icon" />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Interactions & Motion Design
                </h4>
                <p className="text-sm">
                  Enhancing user engagement with seamless interactions and
                  animations.
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <Image width={64} height={64} className="w-auto h-auto" src="/images/wireframing_icon.svg" alt="icon" />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Responsive & Adaptive Design
                </h4>
                <p className="text-sm">
                  Ensuring optimal performance across different devices and
                  screen sizes.
                </p>
              </div>
              <div className="bg-[#D9D9D91A] backdrop-blur-md p-5 rounded-2xl">
                <div className="relative -left-5">
                  <Image width={64} height={64} className="w-auto h-auto" src="/images/testing_icon.svg" alt="icon" />
                </div>
                <h4 className="my-2.5 font-semibold text-xl">
                  Design Hand off & implementation
                </h4>
                <p className="text-sm">
                  Delivering high-quality, developer-friendly design assets for
                  a smooth transition to development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default uiUxDesignProcess;
