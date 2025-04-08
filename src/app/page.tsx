/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamicImp from "next/dynamic";
import AOSInitializer from "@/component/common/AOSInitializer";
import { SparklesHeading } from "@/component/homePage/Sparkleheading/Sparkleheading";
import { ourExpertiseData } from "../component/homePage/OurExpertise";
import React, { ReactNode } from "react";

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
import { generateClient } from "aws-amplify/data";

export interface BlogPost {
  projectInfo: ReactNode;
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  publishedDate: string;
  tags: string[];
}

// export const metadata: Metadata = {
//   title: "Home",
//   description: "Zygibit Website Home Page",
//   keywords:
//     "Zygibit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
//   openGraph: {
//     title: "Home",
//     description: "Zygibit Website Home Page",
//     images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
//     url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
//   },
//   twitter: {
//     title: "Home",
//     description: "Zygibit Website Home Page",
//     images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
//     card: "summary_large_image",
//     creator: "Teqexpert",
//   },
// };

export const metadata: Metadata = {
  title: "Zygibit - Software Development & IT Solutions",
  description:
    "Zygibit offers professional web and mobile app development, UI/UX design, and AI solutions. Transform your business with our expert IT services.",
  keywords:
    "Web Development, Mobile Apps, UI/UX Design, AI Solutions, Software Development, IT Services",
  openGraph: {
    type: "website",
    title: "Zygibit - Software Development & IT Solutions",
    description:
      "Professional software development and IT solutions for businesses",
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
    siteName: "Zygibit",
    images: [
      {
        url: "https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zygibit Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zygibit - Software Development & IT Solutions",
    description:
      "Professional software development and IT solutions for businesses",
    images: [
      {
        url: "https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Zygibit Logo",
      },
    ],
    creator: "@zygibit",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};
async function fetchFeaturedProjects(id?: string) {
  const client = generateClient();
  try {
    const filter = id ? { filter: { id: { eq: id } } } : {};
    const res = await (client.models as any).Projects.list(filter);
    if (id) {
      return res.data && res.data.length > 0 ? res.data[0] : null;
    }
    return res.data || [];
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    throw error;
  }
}

export async function generateStaticParams() {
  const projects = await fetchFeaturedProjects();
  return projects.map((project: BlogPost) => ({ id: project.id.toString() }));
}

const Home = () => {
  const clientHeading = "Lets’s Hear What Our Clients Say";
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
                className="border border-[#EA580C] cursor-context-menu p-4 pl-0 sm:pl-0 sm:p-0 rounded-lg sm:rounded-none sm:border-none w-auto group"
              >
                <span>{data?.image}</span>
                <h5 className="pl-4 group-hover:text-themetext font-semibold text-lg my-2">
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
