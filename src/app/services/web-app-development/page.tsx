import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ApplicationAgeny from "@/component/sevices/Common/ApplicationAgeny/ApplicationAgeny";
import AOSInitializer from "@/component/common/AOSInitializer";
import Sales from "../../../../public/images/sales.png";
import WebCustom from "../../../../public/images/web_custom.png";

const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver")
);

const Blog = dynamic(() => import("@/component/common/Blog/Blog"));

const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);

const FaqSection = dynamic(
  () => import("@/component/sevices/Common/FaqSection/FaqSection")
);

const HeroBanner = dynamic(
  () => import("@/component/common/HeroBanner/HeroBanner")
);

const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
const WebSlider = dynamic(() =>
  import("@/component/sevices/Common/WebSlider/WebSlider").then(
    (mod) => mod.WebSlider
  )
);

const Cta = dynamic(() => import("@/component/common/Cta/Cta"));

const WebDevProcess = dynamic(
  () => import("@/component/sevices/Common/WebDevProcess/WebDevProcess")
);

const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);

const HeroParalax = dynamic(
  () => import("@/component/common/HeroParallax/HeroParallax")
);
const BoxReveals = dynamic(() =>
  import("@/component/common/WebSales/WebSales").then((mod) => mod.BoxReveals)
);

const CardSpotlights = dynamic(() =>
  import(
    "@/component/sevices/WebAppDevelopment/RobustWebCards/RobustWebCards"
  ).then((mod) => mod.CardSpotlights)
);

const CustomWebCards = dynamic(() =>
  import(
    "@/component/sevices/WebAppDevelopment/CustomWebCards/CustomWebCards"
  ).then((mod) => mod.CustomWebCards)
);

const ScrollTriggered = dynamic(
  () =>
    import(
      "@/component/sevices/WebAppDevelopment/WebScrollTriggered/WebScrollTriggered"
    )
);
import { Metadata } from "next";
import { faqData } from "@/lib/faqs/faqs";

export const metadata: Metadata = {
  title: "Web Development",
  description: "Zygibit Website Web Development Page",
};
const WebAppDevelopment = () => {
  const clientSaysHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";

  const applicationHeading = "Why Partner with Our Web Application Agency?";
  const applicationDetails =
    "Partnering with our custom web application development company in USA unlocks greater profitability, fosters continuous innovation, and accelerates your business growth globally.";

  return (
    <>
      <AOSInitializer />

      <HeroBanner />
      <WeDeliver />
      <section className="w-full pt-10 sm:pt-16 pb-12 lg:pb-40 bg-gradient-to-b via-black from-orange-600 to-black">
        <div className="w-full px-4 lg:px-0 sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
            Our Best Web Application Development Services
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl sm:font-medium max-w-7xl mx-auto mt-2">
            We take a personalized approach to progressive web app development
            that perfectly aligns with your business objectives. From concept to
            deployment, we ensure your digital solution is as unique as your
            vision
          </p>
        </div>
        <div className="w-full px-4 lg:px-24 mt-8 sm:mt-14">
          <div className="w-full  relative bg-white/5 border h-[30rem] no-scroll overflow-y-auto rounded-xl border-white">
            <ScrollTriggered />
          </div>
        </div>
      </section>
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      <section
        data-aos="fade-up"
        className="w-full relative  py-0 sm:py-0 lg:py-0 overflow-hidden "
      >
        <HeroParalax />
      </section>

      <section className="w-full relative px-4 lg:px-24 py-12 lg:py-20">
        <div className="w-full p-4 sm:p-6 bg-white/5 rounded-2xl flex flex-wrap lg:flex-nowrap items-center gap-5 sm:gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              className="w-full h-[350px] sm:h-[500px] lg:h-full object-cover rounded-xl"
              src={Sales}
              alt="Sales"
              width={590}
              height={753}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <BoxReveals />
          </div>
        </div>
      </section>
      <ApplicationAgeny
        applicationHeading={applicationHeading}
        applicationDetails={applicationDetails}
      />

      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />
      <section className="w-full py-10 sm:py-16 z-10 bg-black relative overflow-hidden">
        <div className="absolute -bottom-[168%] -right-[98%] -z-10">
          <Image
            className=""
            src="/images/bg_circle.jfif"
            alt="Background Circle"
            fill
          />
        </div>
        <div className="w-full px-4 sm:px-0 text-sm sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom font-bold">
            Proven Strategies for Robust Web Solutions
          </h2>
          <p className="sm:font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
            Here are the key strategies we follow for building robust web
            solutions. Whether you’re looking for custom web application
            developers or an enterprise web application development company,
            we&apos;ve got you covered.
          </p>
        </div>
        <div className="w-full mx-auto max-w-5xl my-10 sm:my-12">
          <CardSpotlights />
        </div>
        <div className="w-full flex justify-center mt-14">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Develop a Custom Web App Today{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      <section className="w-full pb-10 sm:py-12 lg:py-16">
        <div className="w-full px-4 sm:px-0 sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom font-bold">
            Zygobit Experts in Custom Web App Development
          </h2>
          <p className="sm:font-medium max-w-7xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
            Developers at our web application design services firm provide web
            based application development services to maximize ROI and boost
            profitability for your business by implementing strategic solutions
            and innovative approaches.
          </p>
        </div>
        <div className="w-full px-4 lg:px-32">
          <CustomWebCards />
        </div>
      </section>
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
      <section className="w-full relative px-4 lg:px-24 pb-12 lg:py-20">
        <div className="w-full p-4 sm:p-6 bg-white/5 rounded-2xl flex flex-wrap lg:flex-nowrap items-center gap-5 sm:gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              className="w-full h-[350px] sm:h-[500px] lg:h-full object-cover rounded-xl"
              src={WebCustom}
              alt="web_custom"
              width={590}
              height={753}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <BoxReveals />
          </div>
        </div>
      </section>
      <TechnologyStack />

      <section
        data-aos="fade-up"
        className="w-full pt-10 sm:pt-16 bg-black relative"
      >
        <div className="w-full">
          <WebDevProcess />
        </div>
      </section>

      <ClientSays
        clientHeading={clientSaysHeading}
        clientSaysDetails={clientSaysDetails}
      />
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />
      <Blog />
      <FaqSection faqData={faqData} />
      <ContactForm />
    </>
  );
};

export default WebAppDevelopment;
