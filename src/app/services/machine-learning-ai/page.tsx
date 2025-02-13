import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import AOSInitializer from "@/component/common/AOSInitializer";

const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver")
);
const Blog = dynamic(() => import("@/component/common/Blog/Blog"));
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const FaqSection = dynamic(
  () => import("@/component/sevices/Common/FaqSection/FaqSection")
);
const FeaturedSlider = dynamic(
  () => import("@/component/common/Featuredslider/Featuredslider")
);
const HeroBanner = dynamic(
  () => import("@/component/common/HeroBanner/HeroBanner")
);
const WebDevProcess = dynamic(
  () => import("@/component/sevices/Common/WebDevProcess/WebDevProcess")
);
const ShineBorderCards = dynamic(() =>
  import(
    "@/component/sevices/MachineLearning/ShineBorderCards/ShineBorderCards"
  ).then((mod) => mod.ShineBorderCards)
);
const AwareHoverCards = dynamic(() =>
  import(
    "@/component/sevices/MachineLearning/AwareHoverCards/AwareHoverCards"
  ).then((mod) => mod.AwareHoverCards)
);
const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);
const WebSlider = dynamic(() =>
  import("@/component/sevices/Common/WebSlider/WebSlider").then(
    (mod) => mod.WebSlider
  )
);
const GridBoxes = dynamic(
  () => import("@/component/common/GridBoxes/GridBoxes")
);
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine Learning AI",
  description: "Zygibit Website Machine Learning AI Page",
};

const MachineLearning = () => {
  const clientSaysHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";

  const GridBoxesHeading = "Why Zygobit for UI/UX Design?";
  const GridBoxesDetail =
    " Here’s a selection of state-of-the-art design tools that empower our UI UX design company. With these resources at their fingertips, we deliver exceptional user experiences that resonate with audiences.";

  return (
    <>
      <AOSInitializer />

      <HeroBanner />
      <WeDeliver />

      <section className="w-full bg-gradient-to-b from-orange-600 via-black to-black pb-14 lg:pb-24">
        <div className="w-full px-4 lg:px-0 mt-10 lg:mt-16 mb-8 sm:mb-12 lg:mb-20 sm:text-center inline-block">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl">
            Full-Scale Machine Learning & AI Services.
          </h2>
          <p className=" sm:font-medium text-sm sm:text-lg lg:text-xl mt-2 sm:mt-3 lg:mt-5 px-0 lg:px-20">
            Zygobit is an innovative software development company that creates
            advanced solutions using cutting-edge technology, empowering you to
            stay ahead in your industry. are not only intuitive but also provide
            users with a seamless user experience.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto">
          <ShineBorderCards />
        </div>
        <div className="w-full flex justify-center mt-12">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Get Started!{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>

      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      <section
        data-aos="fade-up"
        className="w-full pt-10 sm:pt-16 bg-black relative"
      >
        <div className="w-full">
          <WebDevProcess />
        </div>
      </section>

      <section className="w-full px-4 lg:px-11 pb-10 sm:pb-0 pt-10  lg:py-14 overflow-hidden">
        <div className="w-full  sm:text-center" data-aos="fade-right">
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-6">
            Featured UI UX Design Case Studies
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
            Our Success Stories
          </p>
        </div>
        <div data-aos="fade-up">
          <FeaturedSlider />
        </div>
      </section>

      <section className="w-full pt-5 sm:pt-16">
        <div
          className="w-full  sm:text-center px-4 lg:px-0"
          data-aos="fade-right"
        >
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-6">
            Leverage AI & Machine Learning to Stay Ahead.
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
            Our experienced developers offer all-inclusive exchange development
            services with AI and Machine Learning features, enabling secure and
            instant transactions.
          </p>
        </div>
        <div className="w-full max-w-5xl px-4 lg:px-0 mx-auto mt-8 sm:mt-12 lg:mt-16">
          <AwareHoverCards />
        </div>
      </section>

      <ClientSays
        clientHeading={clientSaysHeading}
        clientSaysDetails={clientSaysDetails}
      />

      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      <section className="w-full pb-12 overflow-hidden">
        <div className="w-full px-4 lg:px-0 sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom font-bold">
            Select from Our Flexible Custom Web App Models
          </h2>
          <p className="sm:font-medium max-w-7xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
            Being a top custom web application development services provider, we
            offer multiple hiring models that best suit your needs
          </p>
        </div>
        <div className="w-full mt-7 sm:mt-12 lg:mt-16">
          <WebSlider />
        </div>
        <div className="w-full px-4 lg:px-32 mt-10 sm:mt-0 lg:mt-10 flex  justify-center sm:justify-normal">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Hire Web Application Developers{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>

      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      <TechnologyStack />

      <GridBoxes
        GridBoxesDetail={GridBoxesDetail}
        GridBoxesHeading={GridBoxesHeading}
      />

      <Blog />

      <FaqSection />

      <ContactForm />
    </>
  );
};

export default MachineLearning;
