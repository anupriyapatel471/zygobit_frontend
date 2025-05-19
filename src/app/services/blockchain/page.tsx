import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";

import AOSInitializer from "@/component/common/AOSInitializer";

import faqData from "../../../utils/content/faq/faqBlockChain.json";

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

const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);

import { Metadata } from "next";
import Link from "next/link";
import CtaSecond from "@/component/new/CtaSecond";
import { Suspense } from "react";
import Loader from "@/component/common/Loader/Loader";
import AppleCardsCarousel from "@/component/sevices/MobileAppDevelopment/AppleCardsCarousel/AppleCardsCarousel";
import BoostBussiness from "@/component/sevices/Common/BoostBussiness/BoostBussiness";
import AboutWeb from "@/component/new/AboutWeb";
import StebTab from "@/component/new/Steptab";
import DeliveringTailored from "@/component/common/DeliveringTailored/DeliveringTailored";
import blockChainJson from "../../../utils/content/boxreveals/blockChain.json";
import appleCardsData from "../../../utils/content/appleCardsCarousel/blockChainApple.json";
import blockChainStebTab from "../../../utils/content/stebTab/blockChainStebTab.json";
import deliveringTailoredData from "../../../utils/content/deliveringTailored/tailoredBlockChain.json";

export const metadata: Metadata = {
  title: "Web Development",
  description: "Zygobit Website Web Development Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Web Development",
    description: "Zygobit Website Web Development Page",
    type: "website",
    url: "https://www.zygobit.com/web-development",
    images: [
      {
        url: "https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zygobit Web Development",
      },
    ],
  },
  twitter: {
    title: "Web Development",
    description: "Zygobit Website Web Development Page",
    card: "summary_large_image",
    creator: "@Zygobit",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
  },
};

const Blockchain = () => {
  const deliveringHeading = "Industries We Serve: Unmatched Experiences";
  const deliveringPara =
    "Transforming Ideas into Exceptional User Experiences Across Various Sectors";

  const heading = "Accelerate Your Business with Tailored Mobile App Solutions";
  const paragraph =
    "we specialize in crafting custom mobile applications that empower businesses to thrive in today’s digital-first world. Our innovative solutions are designed to align with your unique goals, helping you unlock new opportunities, engage your audience, and drive sustainable growth.";

  const clientHeading = "Hear It from Our Happy Clients!";
  const clientSaysDetails =
    "Hear from our satisfied clients who have transformed their ideas into successful businesses with Apptunix&apos;s expert web development services and solutions.";
  const heroHeading = "Blockchain Development Solutions We Deliver";
  const heroParagraph =
    "Empower your business with our advanced blockchain development services, designed to provide secure, scalable, and innovative solutions tailored to your needs.";
  const stebtabTitle = "Blockchain Development Solutions We Deliver";

  const stebtabDesc =
    "Unlock your business’s full potential with our expert blockchain services. From ideation to deployment, we deliver secure, scalable, and future-ready solutions tailored to your needs.";
  return (
    <>
      <AOSInitializer />

      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />
      <Suspense fallback={<Loader />}>
        <WeDeliver />
      </Suspense>

      <section className="w-full custom-apple-slider  bg-white py-12 sm:py-14 lg:py-20">
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full lg:w-2/5">
            <BoostBussiness heading={heading} paragraph={paragraph} />
            <Link href="/contact">
              <button className="mt-3 sm:mt-5 lg:mt-4 2xl:mt-[60px] btn-primary text-white font-normal  group bg-orange-600 hover:bg-orange-500 duration-500 transition-all">
                Get Assistance{" "}
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="w-full">
              <AppleCardsCarousel data={appleCardsData} />
            </div>
          </div>
        </div>
      </section>

      <AboutWeb data={blockChainJson} />

      <StebTab
        stebTabData={blockChainStebTab}
        title={stebtabTitle}
        desc={stebtabDesc}
      />

      <CtaSecond content={""} Aurora={""} vortex={""} />

      <Suspense fallback={<Loader />}>
        <TechnologyStack />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div className="">
          <Blog />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <DeliveringTailored
          deliveringHeading={deliveringHeading}
          deliveringPara={deliveringPara}
          deliveringTailoredData={deliveringTailoredData}
        />
      </Suspense>

      <ClientSays
        clientHeading={clientHeading}
        clientSaysDetails={clientSaysDetails}
      />

      <FaqSection faqData={faqData} />
      <ContactForm />
    </>
  );
};

export default Blockchain;
