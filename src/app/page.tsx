export const dynamic = "force-static";
import dynamicImp from "next/dynamic";
import AOSInitializer from "@/component/common/AOSInitializer";
import { SparklesHeading } from "@/component/homePage/Sparkleheading/Sparkleheading";
import { ourExpertiseData } from "../component/homePage/OurExpertise";
import React, { ReactNode } from "react";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs);
const HomeBanner = dynamicImp(() => import("@/component/homePage/HomeBanner"));
const FeaturedProjects = dynamicImp(
  () => import("@/component/homePage/FeaturedProjects")
);
const BusinessCards = dynamicImp(
  () => import("@/component/homePage/Businesscards/Businesscards")
);
const Cta = dynamicImp(() => import("@/component/common/Cta/Cta"));

const TechnologyStack = dynamicImp(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
const Blog = dynamicImp(() => import("@/component/common/Blog/Blog"));
const ContactForm = dynamicImp(
  () => import("@/component/common/ContactForm/ContactForm")
);
const ClientSays = dynamicImp(
  () => import("@/component/common/ClientSays/ClientSays")
);
const OurPartners = dynamicImp(
  () => import("@/component/common/OurPartners/OurPartners")
);
import { Metadata } from "next";
import WhyChooseUs from "@/component/new/WhyChooseUs";
import AboutCta from "@/component/new/AboutCta";
import CtaSecond from "@/component/new/CtaSecond";

export interface project {
  projectInfo: ReactNode;
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  publishedDate: string;
  tags: string[];
}

export const metadata: Metadata = {
  title: "Zygobit | Web & Mobile Apps, UI/UX & AI Solutions",
  description:
    "Partner with Zygobit for web and mobile app development, UI/UX design, and AI-driven solutions. Scalable, custom tech to grow your business.",
  keywords:
    "Zygobit, Web App Development, Mobile App Development, UI/UX Design, AI Solutions, Machine Learning, Software Development, IT Consulting",
  openGraph: {
    title: "Home | Zygobit - Web & Mobile App Development, UI/UX, AI Solutions",
    description:
      "Explore Zygobit's full-service digital solutions—from custom web and mobile apps to intuitive UI/UX design and intelligent AI tools. Build smarter today.",
    images: ["/images/Logo.jpg"],
    url: "https://www.zygobit.com/",
    type: "website",
  },
  twitter: {
    title: "Home | Zygobit - Expert Web, Mobile & AI Solutions",
    description:
      "Web and mobile development, UI/UX design, and AI solutions tailored to grow your business. Discover Zygobit’s custom technology services.",
    images: ["/images/Logo.jpg"],
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://www.zygobit.com/",
  },
};

const Home = async () => {
  const clientHeading = "Let’s Hear What Our Clients Say";
  // const clientSaysDetails =
  //   "Using the latest technology and industry expertise, we built top-end Android and iOS-based applications that add value to the business and user experience.";

  const clientSaysDetails =
    "By leveraging the latest technologies and expert industry knowledge, we created high-quality Android and iOS apps that deliver real business value and enhanced user experience.";

  return (
    <>
      <AOSInitializer />

      <HomeBanner />

      <FeaturedProjects />

      <AboutCta />

      <BusinessCards />

      <CtaSecond content={""} Aurora={""} vortex={""} />

      <section
        data-aos="fade-up"
        className="w-full mt-[90px] sm:mt-0 mb-12 sm:mb-20 overflow-hidden"
      >
        <div className="container remove-bg">
          <div className="w-full text-center mb-0">
            <SparklesHeading />
          </div>
          <div className="w-full mt-5 sm:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
            {ourExpertiseData?.map((data, index) => (
              <div
                key={index}
                className="border border-muted-foreground  p-4 pl-0 sm:pl-0 sm:p-0 rounded-lg sm:rounded-none sm:border-none w-auto"
              >
                <span>{data?.image}</span>
                <h5 className="pl-4  font-semibold text-base sm:text-lg my-2">
                  {data?.heading}
                </h5>
                <p className="pl-4 text-sm sm:text-base text-muted-foreground">
                  {data?.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologyStack />

      <ClientSays
        clientHeading={clientHeading}
        clientSaysDetails={clientSaysDetails}
      />

      <OurPartners />

      <Cta vortex={"VortexBg"} Aurora={""} content={"Marquee"} />
      {/* new why choose us  */}
      <WhyChooseUs />

      <div className="sm:-mt-14 lg:-mt-20">
        <Blog />
      </div>

      <ContactForm />
    </>
  );
};

export default Home;
