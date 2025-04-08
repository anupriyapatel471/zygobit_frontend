/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import dynamic from "next/dynamic";
import AOSInitializer from "@/component/common/AOSInitializer";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);

import { Metadata } from "next";
import { BannerGridBg } from "@/component/common/HeroBanner/BannerGridBg/BannerGridBg";

export const metadata: Metadata = {
  title: "",
  description: "Zygibit Website Portfolio page",
  keywords:
    "Zygibit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development , Portfolio",
  openGraph: {
    title: "Portfolio",
    description: "Zygibit Website Portfolio Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Portfolio",
    description: "Zygibit Website Ecommerce Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};
const Portfolio = () => {
  const heroHeading = "Our Portfolio";

  return (
    <>
      <AOSInitializer />

      {/* Hero banner */}
      <section className="w-full h-[300px] sm:h-auto relative pt-16 sm:pt-32">
        <div className="container remove-bg">
          <div className="w-full h-full absolute z-10 top-0 left-0 ">
            <BannerGridBg />
          </div>
          <div className=" w-full mt-[60px] sm:mt-0 text-center relative py-10 sm:py-16  lg:py-24">
            <div className="w-full">
              <div className="w-full">
                <h1 className="font-bold relative z-10 text-3xl sm:text-3xl lg:text-[38px] text-shadow-2xl  text-gradiant-custom">
                  {heroHeading}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative overflow-hidden mt-10 mb-14 sm:mb-20">
        <div className="container remove-bg">
          <div className="w-full">
            <Tabs defaultValue="Mobile Application" className="w-full">
              <TabsList className="grid w-full grid-cols-1 lg:grid-cols-5 h-auto">
                <TabsTrigger
                  className="justify-normal sm:justify-center"
                  value="Mobile Application"
                >
                  Mobile Application
                </TabsTrigger>
                <TabsTrigger
                  className="justify-normal sm:justify-center"
                  value="Web Development"
                >
                  Web Development
                </TabsTrigger>
                <TabsTrigger
                  className="justify-normal sm:justify-center"
                  value="Design"
                >
                  Design
                </TabsTrigger>
                <TabsTrigger
                  className="justify-normal sm:justify-center"
                  value="SEO"
                >
                  SEO
                </TabsTrigger>
                <TabsTrigger
                  className="justify-normal sm:justify-center"
                  value="PPC"
                >
                  SEO
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Mobile Application">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/her_calendar_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/her_calendar.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/her_calendar.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/mh_ride_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/mh_ride.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/mh_ride.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/sed_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/bee_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/suitor_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/tia_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Web Development">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/her_calendar_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/her_calendar.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/her_calendar.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/mh_ride_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/mh_ride.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/mh_ride.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/sed_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/bee_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/suitor_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/tia_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Design">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/her_calendar_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/her_calendar.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/her_calendar.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/mh_ride_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/mh_ride.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/mh_ride.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/sed_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/bee_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/suitor_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/tia_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="SEO">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/her_calendar_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/her_calendar.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/her_calendar.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/mh_ride_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/mh_ride.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/mh_ride.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/sed_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/bee_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/suitor_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/tia_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="PPC">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/her_calendar_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/her_calendar.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/her_calendar.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/mh_ride_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/mh_ride.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/mh_ride.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/sed_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/bee_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/suitor_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                  <div className="w-full flex items-center  p-4 relative bg-white z-10 rounded-lg sm:rounded-none overflow-hidden">
                    <div className="flex justify-between flex-col">
                      <div>
                        <img src="/images/tia_logo.svg" alt="" />
                      </div>
                      <div className="inline-block sm:hidden w-full">
                        <img
                          className="object-contain"
                          src="/images/sed.png"
                          alt=""
                        />
                      </div>
                      <p className="line-clamp-4 sm:line-clamp-none text-sm text-black mt-5 mb-6 sm:mb-16 sm:max-w-[400px] lg:max-w-[290px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="font-bold text-sm text-black">
                        Technologies here
                      </div>
                    </div>
                    <div className="hidden sm:inline w-[325px] ml-auto lg:ml-0">
                      <img
                        className="object-contain"
                        src="/images/sed.png"
                        alt=""
                      />
                    </div>
                    <div className="w-[150px] h-[150px] sm:w-[425px] sm:h-[425px] bg-[#F15722] rounded-full absolute -bottom-20 sm:top-1/2 sm:-translate-y-1/2 -z-10 -right-24 sm:-right-40"></div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default Portfolio;
