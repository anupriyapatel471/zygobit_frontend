import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import { EcommerceShineCards } from "@/component/sevices/Ecommerce/EcommerceShineCards/EcomoerceShineCards";
import { WebSlider } from "@/component/sevices/Common/WebSlider/WebSlider";
import AOSInitializer from "@/component/common/AOSInitializer";
const FaqSection = dynamic(
  () => import("@/component/sevices/Common/FaqSection/FaqSection")
);
const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);
const HeroBanner = dynamic(
  () => import("@/component/common/HeroBanner/HeroBanner")
);

const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver"),
  { ssr: false }
);
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
import engagementModelsEcomerce from "../../../utils/content/webSlider/ecommerce.json";

import faqEcommerceData from "../../../utils/content/faq/faqEcommerce.json";
import CtaSecond from "@/component/new/CtaSecond";
import { Suspense } from "react";
import Loader from "@/component/common/Loader/Loader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Zygobit Website Ecommerce Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Ecommerce",
    description: "Zygobit Website Ecommerce Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Ecommerce",
    description: "Zygobit Website Ecommerce Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};
const Ecommerce = () => {
  const clientHeading = "We Are a Trusted Web App Development Company";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions";
  const heroHeading = "Expert E-Commerce Development Services";
  const heroParagraph =
    "We build powerful and scalable e-commerce solutions tailored to your business needs. From custom store development to seamless integrations, our team ensures your online store is optimized for performance, conversions, and user experience.";

  return (
    <>
      <AOSInitializer />

      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />
      <Suspense fallback={<Loader />}>
        <WeDeliver />
      </Suspense>

      <section className="w-full pb-12 sm:pb-20 lg:pb-20 lg:pt-12 overflow-hidden">
        <div className="container remove-bg">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-20 sm:gap-5">
            <div className="w-full lg:w-1/2 ">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] lg:leading-[50px] text-gradiant-custom font-bold">
                Drive Success with AI Ecommerce Solutions
              </h2>
              <p className="sm:font-medium  text-sm sm:text-lg lg:text-xl mt-4 mb-7">
                Boost your eCommerce store with our tailored app development
                solutions. Connect with our experts to build a robust platform
                that drives engagement and sales.
              </p>
              <Link href="/contact">
                <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                  Hire Web Application Developers{" "}
                  <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 ">
              <WebSlider engagementModels={engagementModelsEcomerce} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[url(/images/cta_bg.png)] bg-cover bg-no-repeat bg-center py-12 sm:py-16 ">
        <div className="container remove-bg">
          <div className="w-full  sm:text-center" data-aos="fade-right">
            <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-5 sm:mb-12 lg:mb-16">
              Boost your business with AI & ML eCommerce.
            </h2>
          </div>
          <div className="w-full">
            <EcommerceShineCards />
          </div>
          <div className="flex justify-center mt-10 lg:mt-14">
            <Link href={"/contact"}>
              <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                Schedule a Call{" "}
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <CtaSecond content={""} Aurora={""} vortex={""} />
      <Suspense fallback={<Loader />}>
        <section className="w-full  pt-0 pb-10 lg:py-14 overflow-hidden">
          <div className="container remove-bg">
            <div className="w-full  sm:text-center" data-aos="fade-right">
              <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
                Zygobit: Ecommerce App Experts
              </h2>
              <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-6xl sm:mx-auto">
                Don&apos;t just choose an&nbsp;ecommerce app developer. Choose a
                collaborator. Let Zygobit co-create your e-commerce app
                masterpiece.
              </p>
            </div>

            <div data-aos="fade-up">
              <FeaturedSlider />
            </div>
            <div className="w-full flex justify-center mt-7 sm:mt-10">
              <Link href={"/portfolio"}>
                <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                  View All
                  <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </Suspense>

      <OurPartners />
      <Suspense fallback={<Loader />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <TechnologyStack />

        <ClientSays
          clientHeading={clientHeading}
          clientSaysDetails={clientSaysDetails}
        />
      </Suspense>

      <FaqSection faqData={faqEcommerceData} />

      <ContactForm />
    </>
  );
};

export default Ecommerce;
