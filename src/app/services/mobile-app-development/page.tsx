/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import BoostBussiness from "@/component/sevices/Common/BoostBussiness/BoostBussiness";
import ClientSays from "@/component/common/ClientSays/ClientSays";
import AOSInitializer from "@/component/common/AOSInitializer";
import faqMobileApp from "../../../utils/content/faq/faqMobileApp.json";

const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver")
);
const AppleCardsCarousel = dynamic(
  () =>
    import(
      "@/component/sevices/MobileAppDevelopment/AppleCardsCarousel/AppleCardsCarousel"
    )
);

const MobileAppSlider = dynamic(
  () =>
    import(
      "@/component/sevices/MobileAppDevelopment/MobileAppSlider/MobileAppSlider"
    )
);
const FeaturedSlider = dynamic(
  () => import("@/component/common/Featuredslider/Featuredslider")
);
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const TechnologyStack = dynamic(
  () => import("@/component/common/TechnologyStack/TechnologyStack")
);
const HeroBanner = dynamic(
  () => import("@/component/common/HeroBanner/HeroBanner")
);
const Blog = dynamic(() => import("@/component/common/Blog/Blog"));
const FaqSection = dynamic(
  () => import("@/component/sevices/Common/FaqSection/FaqSection")
);
const MobileAppGrid = dynamic(() =>
  import("@/component/common/MobileAppGrid/MobileAppGrid").then(
    (mod) => mod.MobileAppGrid
  )
);
const SharedLayoutAnimation = dynamic(
  () =>
    import("@/component/sevices/MobileAppDevelopment/MobileDevTab/MobileDevTab")
);
import { Metadata } from "next";
import CtaSecond from "@/component/new/CtaSecond";
import { MobileTechnology } from "@/component/sevices/MobileAppDevelopment/MobileTechnology/MobileTechnology";
import { Suspense } from "react";
import Loader from "@/component/common/Loader/Loader";
import Link from "next/link";
import GridBoxes from "@/component/common/GridBoxes/GridBoxes";
import StebTab from "@/component/new/Steptab";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description: "Zygobit Website Mobile App Development Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Mobile App Development",
    description: "Zygobit Website Mobile App Development Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Mobile App Development",
    description: "Zygobit Website Mobile App Development Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};

const MobileAppDevelopment = () => {
  const GridBoxesHeading = "Why Zygobit for Mobile Applications ?";
  const GridBoxesDetail =
    "Empowering businesses with intuitive, aesthetically pleasing, and user-friendly experiences. Our expert UI/UX designers leverage cutting-edge tools to craft seamless digital journeys that captivate and convert.";

  const heading = "Accelerate Your Business with Tailored Mobile App Solutions";
  const paragraph =
    "we specialize in crafting custom mobile applications that empower businesses to thrive in today’s digital-first world. Our innovative solutions are designed to align with your unique goals, helping you unlock new opportunities, engage your audience, and drive sustainable growth.";
  const clientHeading = "Hear It from Our Happy Clients!";
  const clientSaysDetails =
    "See how our custom app development services have transformed businesses and driven success for our happy clients";

  const heroHeading = "Mobile App Development That Drives Success";
  const heroParagraph =
    "Custom iOS & Android solutions designed for performance, security, and scalability—empowering businesses with innovative mobile experiences.";

  // const SkeletonOne = () => {
  //   return (
  //     <div>
  //       <p className="font-bold md:text-4xl text-xl text-white">
  //         Proven Expertise
  //       </p>
  //       <p className="font-normal text-base text-white"></p>
  //       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
  //         Years of experience delivering high-quality UI/UX designs that enhance
  //         user engagement and satisfaction.
  //       </p>
  //     </div>
  //   );
  // };

  // const SkeletonTwo = () => {
  //   return (
  //     <div>
  //       <p className="font-bold md:text-4xl text-xl text-white">
  //         Scalable Solutions
  //       </p>
  //       <p className="font-normal text-base text-white"></p>
  //       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
  //         Designs that grow with your business, ensuring a seamless experience
  //         across all user touchpoints.
  //       </p>
  //     </div>
  //   );
  // };
  // const SkeletonThree = () => {
  //   return (
  //     <div>
  //       <p className="font-bold md:text-4xl text-xl text-white">
  //         User-Centric Design
  //       </p>
  //       <p className="font-normal text-base text-white"></p>
  //       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
  //         A human-first approach that prioritizes usability, accessibility, and
  //         intuitive navigation.
  //       </p>
  //     </div>
  //   );
  // };
  // const SkeletonFour = () => {
  //   return (
  //     <div>
  //       <p className="font-bold md:text-4xl text-xl text-white">
  //         Seamless Interactions
  //       </p>
  //       <p className="font-normal text-base text-white"></p>
  //       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
  //         Smooth, responsive, and engaging experiences that keep users connected
  //         and satisfied.
  //       </p>
  //     </div>
  //   );
  // };

  // const cards = [
  //   {
  //     id: 1,
  //     content: <SkeletonOne />,
  //     className: "md:col-span-3 cursor-pointer",
  //     title: "Proven Expertise",
  //     thumbnail: "/images/Proven_expertise.png",
  //   },
  //   {
  //     id: 2,
  //     content: <SkeletonTwo />,
  //     className: "md:col-span-2 cursor-pointer",
  //     title: "Scalable Solutions",

  //     thumbnail: "/images/Scalable_solution.png",
  //   },
  //   {
  //     id: 3,
  //     content: <SkeletonThree />,
  //     className: "md:col-span-2 cursor-pointer",
  //     title: "User-Centric Design",

  //     thumbnail: "/images/User_centric.png",
  //   },
  //   {
  //     id: 4,
  //     content: <SkeletonFour />,
  //     className: "md:col-span-3 cursor-pointer",
  //     title: "Seamless Interactions",
  //     thumbnail: "/images/seamless_interaction.jpg",
  //   },
  // ];

  const cards = [
    {
      id: 1,
      title: "Proven Expertise",
      content:
        "Years of experience delivering high-quality UI/UX designs that enhance user engagement and satisfaction.",
      className: "sm:col-span-2",
      bgClass: "bg-black/70",
      thumbnail: "/images/Proven_expertise.png",
      boxIcon: "/images/setting_icon.svg",
    },
    {
      id: 2,
      title: "Scalable Solutions",
      content:
        " Designs that grow with your business, ensuring a seamless experience across all user touchpoints.",
      className: "",
      bgClass: "bg-orange-600",
      thumbnail: "/images/Scalable_solution.png",
      boxIcon: "/images/black_arrow.svg",
    },
    {
      id: 3,
      title: "User-Centric Design",
      content:
        " A human-first approach that prioritizes usability, accessibility, and intuitive navigation.",
      className: "",
      bgClass: "bg-orange-600",
      thumbnail: "/images/User_centric.png",
      boxIcon: "/images/pen_icon.svg",
    },
    {
      id: 4,
      title: "Seamless Interactions",
      content:
        "Smooth, responsive, and engaging experiences that keep users connected and satisfied.",
      className: "sm:col-span-2",
      bgClass: "bg-black/70",
      boxIcon: "/images/repeat.svg",
      thumbnail: "/images/seamless_interaction.jpg",
    },
  ];

  return (
    <>
      <AOSInitializer />

      <HeroBanner heroHeading={heroHeading} heroParagraph={heroParagraph} />

      <Suspense fallback={<Loader />}>
        <WeDeliver />
      </Suspense>

      <section className="w-full custom-apple-slider  bg-white py-12 sm:py-14 lg:py-20">
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full lg:w-[40%]">
            <BoostBussiness heading={heading} paragraph={paragraph} />
            <Link href="/contact">
              <button className="mt-3 sm:mt-3 lg:mt-10 btn-primary text-white font-normal  group bg-orange-600 hover:bg-orange-500 duration-500 transition-all">
                Get Assistance{" "}
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="w-full">
              <AppleCardsCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pt-12 sm:pt-14 lg:pt-20 inline-block">
        <div className="container remove-bg">
          <div className="w-full  sm:text-center mb-5 sm:mb-10">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] ">
              Revolutionizing Mobile Apps with Cutting-Edge Technology
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl sm:font-medium mt-2">
              Transforming businesses through innovative mobile solutions
              powered by AI, machine learning, and automation.
            </p>
          </div>
          <div className="w-full">
            <MobileTechnology />
          </div>
          <div className="w-full flex sm:justify-center mt-5 lg:mt-12">
            <Link href="/contact">
              <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                Build Your App Today!{" "}
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <CtaSecond content={""} Aurora={""} vortex={""} />

      <section className="w-full pb-12 sm:pb-14 lg:pb-20">
        <div className="container remove-bg">
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-6 lg:gap-10">
            <div className="w-full lg:w-1/2  lg:mb-9">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradiant-custom-second">
                End-to-End Mobile App Development
              </h2>
              <p className="sm:font-medium text-sm sm:text-base lg:text-xl  mx-auto mt-2 sm:mt-2 lg:mt-12 mb-5 lg:mb-14">
                We create dynamic, feature-rich mobile applications using the
                latest technologies, ensuring seamless performance across all
                devices. Whether you need native development for optimal
                performance or cross-platform solutions for cost efficiency, we
                deliver robust applications tailored to your needs.
              </p>
              <Link href="/contact">
                <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                  Discuss Your Business Requirements{" "}
                  <ChevronRight className="group-hover:left-2 w-5 sm:w-auto left-0 relative duration-500 transition-all" />
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 bg-[#D9D9D90D] rounded-xl p-5">
              <MobileAppSlider />
            </div>
          </div>
        </div>
      </section>

      <StebTab />

      <div className="pt-12 sm:pt-0">
        <GridBoxes
          GridBoxesHeading={GridBoxesHeading}
          GridBoxesDetail={GridBoxesDetail}
          cards={cards}
        />
      </div>

      <Suspense fallback={<Loader />}>
        <TechnologyStack />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <section className="w-full  py-10 sm:py-14  overflow-hidden">
          <div className="container remove-bg">
            <div className="w-full  sm:text-center" data-aos="fade-right">
              <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
                Our Projects
              </h2>
              <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-4xl sm:mx-auto">
                Partner with Zygobit for innovative, secure, and scalable mobile
                app development solutions tailored to your unique business
                needs.
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

      <ClientSays
        clientHeading={clientHeading}
        clientSaysDetails={clientSaysDetails}
      />

      <Suspense fallback={<Loader />}>
        <Blog />
      </Suspense>

      <FaqSection faqData={faqMobileApp} />

      <ContactForm />
    </>
  );
};

export default MobileAppDevelopment;
