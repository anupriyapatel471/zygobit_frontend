/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-static";
//
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

import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";
Amplify.configure(outputs);

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
  title: "Home",
  description: "Zygobit Website Home Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Home",
    description: "Zygobit Website Home Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Home",
    description: "Zygobit Website Home Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};

const Home = async () => {
  const clientHeading = "Let’s Hear What Our Clients Say";
  const clientSaysDetails =
    "Using the latest technology and industry expertise, we built top-end Android and iOS-based applications that add value to the business and user experience.";
  return (
    <>
      <AOSInitializer />

      <HomeBanner />
      <FeaturedProjects />
      <BusinessCards />
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      <section
        data-aos="fade-up"
        className="w-full  mb-12 sm:mb-20 overflow-hidden"
      >
        <div className="container">
          <div className="w-full text-center mb-0">
            <SparklesHeading />
          </div>
          <div className="w-full mt-5 sm:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
            {ourExpertiseData?.map((data, index) => (
              <div
                key={index}
                className="border border-muted-foreground cursor-context-menu p-4 pl-0 sm:pl-0 sm:p-0 rounded-lg sm:rounded-none sm:border-none w-auto group"
              >
                <span>{data?.image}</span>
                <h5 className="pl-4 group-hover:text-themetext font-semibold text-base sm:text-lg my-2">
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

      <Blog />
      <ContactForm />
    </>
  );
};

export default Home;
