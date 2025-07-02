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
  title: "Blockchain Development | Zygobit",
  description:
    "Zygobit offers secure, scalable blockchain development services. Build smart contracts, DApps, and custom blockchain solutions tailored to your business.",
  keywords:
    "Blockchain Development, Smart Contracts, Decentralized Apps, Web3 Development, Custom Blockchain Solutions, Zygobit Blockchain, Crypto App Development, Blockchain Integration, Enterprise Blockchain",
  openGraph: {
    title: "Blockchain Development | Zygobit",
    description:
      "Build secure and future-ready blockchain applications with Zygobit's custom development services. Scalable, transparent, and enterprise-grade solutions.",
    type: "website",
    url: "https://www.zygobit.com/services/blockchain",
    images: [
      {
        url: "https://www.zygobit.com/images/Logo.png",
        width: 1200,
        height: 630,
        alt: "Zygobit Blockchain Development",
      },
    ],
  },
  twitter: {
    title: "Blockchain Development | Zygobit",
    description:
      "Zygobit builds secure blockchain applications tailored to business needs. Boost transparency, security, and innovation with our expert services.",
    card: "summary_large_image",
    creator: "@Zygobit",
    images: ["https://www.zygobit.com/images/Logo.png"],
  },
  alternates: {
    canonical: "https://www.zygobit.com/services/blockchain",
  },
};
const blockchainJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Blockchain Development ",
  url: "https://www.zygobit.com/services/blockchain",
  description:
    "Zygobit delivers secure, scalable blockchain solutions for startups and enterprises. Our expert team builds smart contracts, DApps, and blockchain platforms tailored to business goals.",
};

const Blockchain = () => {
  const deliveringHeading = "Industries We Serve: Unmatched Experiences";
  const deliveringPara =
    "Transforming Ideas into Exceptional User Experiences Across Various Sectors";

  const heading = "Drive Growth with Custom Blockchain Solutions";
  const paragraph =
    "We build secure, scalable blockchain applications designed to fit your business needs. Whether you're streamlining operations, enhancing transparency, or creating new digital assets, our solutions help you build trust, unlock new value, and stay ahead in a rapidly evolving tech landscape.";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blockchainJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AOSInitializer />

      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />
      <Suspense fallback={<Loader />}>
        <WeDeliver />
      </Suspense>

      <section className="w-full relative overflow-hidden bg-white py-12 sm:py-14 lg:py-20">
        <div className="container remove-bg">
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
            <div className="w-full lg:w-3/5 lg:absolute lg:-right-12 2xl:-right-16">
              <div className="w-full">
                <AppleCardsCarousel data={appleCardsData} />
              </div>
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

      <div className="mt-12 sm:mt-14 lg:mt-16">
        <FaqSection faqData={faqData} />
      </div>

      <ContactForm />
    </>
  );
};

export default Blockchain;
