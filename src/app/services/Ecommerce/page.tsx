import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import { EcommerceShineCards } from "@/component/sevices/Ecommerce/EcommerceShineCards/EcomoerceShineCards";
import { ThreeDCards } from "@/component/sevices/MobileAppDevelopment/ThreedCards/ThreedCards";
import { MobileAppGrid } from "@/component/common/MobileAppGrid/MobileAppGrid";
import { WebSlider } from "@/component/sevices/Common/WebSlider/WebSlider";
import AOSInitializer from "@/component/common/AOSInitializer";
const FaqSection = dynamic(
  () => import("@/component/sevices/Common/FaqSection/FaqSection")
);
const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);
const ApplicationAgeny = dynamic(
  () => import("@/component/sevices/Common/ApplicationAgeny/ApplicationAgeny")
);
const DeliveringTailored = dynamic(
  () => import("@/component/common/DeliveringTailored/DeliveringTailored")
);
const HeroBanner = dynamic(
  () => import("@/component/common/HeroBanner/HeroBanner")
);

const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver")
);
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const FeaturedSlider = dynamic(
  () => import("@/component/common/Featuredslider/Featuredslider")
);
const OurPartners = dynamic(
  () => import("@/component/common/OurPartners/OurPartners")
);

const Blog = dynamic(() => import("@/component/common/Blog/Blog"));
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Zygibit Website Ecommerce Page",
};

const Ecommerce = () => {
  const clientHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions";
  const applicationHeading = "Build Your AR/VR eCommerce Store";
  const applicationDetails =
    " We integrate AR/VR into eCommerce apps to deliver immersive, realistic shopping experiences and enhance your business&apos;s user engagement.";
  const deliveringHeading = "Industries We Serve: Unmatched Experiences";
  const deliveringPara =
    "Transforming Ideas into Exceptional User Experiences Across Various Sectors";
  return (
    <>
      <AOSInitializer />

      <HeroBanner />
      <WeDeliver />
      <section className="w-full bg-gradient-to-b from-orange-600 via-black to-black pt-16 pb-[8rem] overflow-hidden">
        <div className="w-full px-4 lg:px-0 sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl  font-bold">
            Drive Success with AI Ecommerce Solutions
          </h2>
          <p className="sm:font-medium max-w-7xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
            Boost your eCommerce store with our tailored app development
            solutions. Connect with our experts to build a robust platform that
            drives engagement and sales.
          </p>
        </div>
        <div className="w-full mt-7 sm:mt-12 lg:mt-16">
          <WebSlider />
        </div>
      </section>

      <section className="w-full bg-[url(/images/stars_bg.png)] bg-cover bg-no-repeat bg-center py-16 px-4 sm:px-0 ">
        <div className="w-full  sm:text-center" data-aos="fade-right">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 lg:mb-16">
            Boost your business with AI & ML eCommerce.
          </h2>
        </div>
        <div className="w-full px-0 sm:px-4  max-w-6xl mx-auto">
          <EcommerceShineCards />
        </div>
        <div className="flex justify-center mt-10 lg:mt-14">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            Schedule a Call{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>

      <Cta Aurora={"Aurora"} vortex={""} content={"Globe"} />

      <section className="w-full px-4 lg:px-11 py-10 sm:py-14 overflow-hidden">
        <div className="w-full  sm:text-center" data-aos="fade-right">
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
            Zygobit: Ecommerce App Experts
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
            Don&apos;t just choose an ecommerce app developer. Choose a
            collaborator. Let Zygobit co-create your e-commerce app masterpiece.
          </p>
        </div>
        <div data-aos="fade-up">
          <FeaturedSlider />
        </div>
      </section>

      <ApplicationAgeny
        applicationHeading={applicationHeading}
        applicationDetails={applicationDetails}
      />

      <DeliveringTailored
        deliveringHeading={deliveringHeading}
        deliveringPara={deliveringPara}
      />

      <Cta Aurora={"Aurora"} vortex={""} content={"Globe"} />

      <section className="w-full lg:mt-10 inline-block">
        <div className="w-full px-4 lg:px-0 sm:text-center mb-8 sm:mb-16">
          <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl ">
            E-Commerce App Development Success
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl sm:font-medium mt-2">
            Ideal for small to large businesses that need an ecommerce app
            development solution to sell online!
          </p>
        </div>
        <div className="w-full px-4 lg:px-[167px]">
          <ThreeDCards />
        </div>
      </section>

      <section className="w-full sm:pt-10 pb-12 lg:pb-16 lg:pt-16">
        <div className="w-full px-4 lg:px-20 sm:text-center mb-8 sm:mb-12 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradiant-custom">
            How Zygobit Drives E-Commerce Success
          </h2>
          <p className="sm:font-medium text-sm sm:text-lg lg:text-xl max-w-7xl mx-auto mt-2">
            Zygobit delivers expert app development, integrating innovative
            features to enhance user experience, boost sales, and ensure
            seamless performance for your e-commerce business.
          </p>
        </div>
        <div className="w-full px-5 lg:px-24">
          <MobileAppGrid />
        </div>
      </section>

      <TechnologyStack />

      <ClientSays
        clientHeading={clientHeading}
        clientSaysDetails={clientSaysDetails}
      />

      <OurPartners />

      <Blog />

      <FaqSection />

      <ContactForm />
    </>
  );
};

export default Ecommerce;
