import dynamic from "next/dynamic";
import AOSInitializer from "@/component/common/AOSInitializer";
import { SparklesHeading } from "@/component/homePage/Sparkleheading/Sparkleheading";
import { ourExpertiseData } from "../component/homePage/OurExpertise";
import React from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomeBanner = dynamic(() => import("@/component/homePage/HomeBanner"));
const FeaturedProjects = dynamic(
  () => import("@/component/homePage/FeaturedProjects")
);
const BusinessCards = dynamic(
  () => import("@/component/homePage/Businesscards/Businesscards")
);
const BackgroundBeamNew = dynamic(
  () => import("@/component/homePage/Bgbeam/Bgbeam")
);
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const WhychooseUs = dynamic(
  () => import("@/component/homePage/Whychooseus/Whychooseus")
);
// const HeroParalax = dynamic(
//   () => import("@/component/common/HeroParallax/HeroParallax")
// );
const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
const Blog = dynamic(() => import("@/component/common/Blog/Blog"));
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);
const OurPartners = dynamic(
  () => import("@/component/common/OurPartners/OurPartners")
);
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Zygibit Website Home Page",
};

const Home = () => {
  const clientHeading = "Lets’s Hear What Our Clients Say";
  const clientSaysDetails =
    "Using the latest technology and industry expertise, we built top-end Android and iOS-based applications that add value to the business and user experience.";

  return (
    <>
      <AOSInitializer />

      <HomeBanner />
  
    </>
  );
};

export default Home;
