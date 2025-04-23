/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Home",
    description: "Zygobit Website Home Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
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

      <section className="w-full relative mb-20">
        <div className="container">
          <div className="w-full bg-[#17181B] rounded-[40px] p-4 sm:p-5 lg:p-[60px] relative overflow-hidden">
            <div className="absolute bottom-0 left-20 z-10">
              <Image
                width={20}
                height={20}
                className="w-[300px] h-auto object-contain"
                src="/images/g.svg"
                alt="icon image"
              />
            </div>
            <div className="w-full flex justify-between text-white">
              <div className="lg:w-[200px] text-center">
                <b className="font-extrabold text-6xl">11+</b>
                <div className="w-full h-[1px] bg-white/30 mt-3 mb-3"></div>
                <span className="font-medium text-base inline-block">
                  Years of Experience
                </span>
              </div>
              <div className="lg:w-[200px] text-center">
                <b className="font-extrabold text-6xl">25+</b>
                <div className="w-full h-[1px] bg-white/30 mt-3 mb-3"></div>
                <span className="font-medium text-base inline-block">
                  Countries Served
                </span>
              </div>
              <div className="lg:w-[200px] text-center">
                <b className="font-extrabold text-6xl">250+</b>
                <div className="w-full h-[1px] bg-white/30 mt-3 mb-3"></div>
                <span className="font-medium text-base inline-block">
                  Tech Enthusiast
                </span>
              </div>
              <div className="lg:w-[200px] text-center">
                <b className="font-extrabold text-6xl">1000+</b>
                <div className="w-full h-[1px] bg-white/30 mt-3 mb-3"></div>
                <span className="font-medium text-base inline-block">
                  Products Delivered
                </span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-14">
              <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                Build Your Success Story
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <BusinessCards />

      <section className="w-full relative my-12 sm:my-14 lg:my-32">
        <div className="container remove-bg">
          <div className="w-full relative">
            <div className="w-full h-[475px] absolute top-1/2 -translate-y-1/2 left-0 -z-10">
              <Image
                className="w-full object-contain"
                fill
                src="/images/cta_new_bg.png"
                alt="image"
              />
            </div>
            <div className="inter-var py-0 w-full">
              <div className=" w-full pb-0 sm:pb-0 relative  group/card justify-between items-center   rounded-xl flex-wrap lg:flex-nowrap flex  ">
                <div className="w-full order-2 lg:order-none  p-3 sm:p-5 lg:pr-0 lg:py-12 lg:pl-8 text-center sm:text-left">
                  <div className="inline text-2xl sm:text-4xl lg:text-5xl text-center sm:text-left text-white font-bold ">
                    Shape the Future of Technology with Us
                  </div>
                  <p className="text-center sm:text-left sm:font-medium text-sm leading-6 sm:leading-normal sm:text-base lg:text-xl mt-2.5 mb-10 max-w-5xl">
                    Shape the Future of Technology with Us Partner with our team
                    for a free, no-obligation technical proposal tailored to
                    your next enterprise custom project.
                  </p>
                  <div>
                    <Link href={"/contact"}>
                      <Button className="  bg-white text-themetext font-normal  group  duration-500 transition-all">
                        Our Engagement Model
                        <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="w-full  mb-12 sm:mb-20 overflow-hidden"
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

      <Blog />
      <ContactForm />
    </>
  );
};

export default Home;
