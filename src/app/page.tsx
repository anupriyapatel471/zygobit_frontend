"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Alertpop from "../component/ui/Alertpop/Alertpop";
import AlertDialogDemo from "@/component/ui/Alertdiallogpop/Alertdiallogpop";
import ButtonDemo from "@/component/ui/Button/Button";
import BreadcrumbWithCustomSeparator from "@/component/ui/custombreadcrumb/custombreadcrumb";
import CalendarDemo from "@/component/ui/customcalendar/customcalendar";
import CardWithForm from "@/component/ui/customcard/customcard";
import CheckboxWithText from "@/component/ui/customcheckbox/customcheckbox";
import InputWithLabel from "@/component/ui/Inputfield/Inputfield";
import InputForm from "@/component/ui/Inputfield/Errorinput";
import PhoneInputNumber from "@/component/ui/Inputfield/Phoneinput";
import AmountInput from "@/component/ui/Inputfield/AmountInput";
import WebInput from "@/component/ui/Inputfield/webinput";
import AlertDestructive from "@/component/ui/Alertpop/Alertpopdestructive";
import GalaxyScene from "@/component/ui/Galaxymodel/canvasgalaxy";
import { ChevronDown, ChevronRight } from "lucide-react";
import MarqueeSlider from "@/component/ui/Marque/Marqueslider";
import RippleBg from "@/component/ui/Ripplebg/Ripplebg";
import { MagicCardDemo } from "@/component/ui/Magiccard/Magiccard";
import FeaturedSlider from "@/component/ui/Featuredslider/Featuredslider";
import BusinessCards from "@/component/ui/Businesscards/Businesscards";
import { SparklesHeading } from "@/component/ui/Sparkleheading/Sparkleheading";
import { BackgroundBeam } from "@/component/ui/Backgroundbeams.tsx/Backgroundbeams";
import { OrbitingCircle } from "@/component/ui/Orbitingcircle/Orbitingcircle";
import { Testimonials } from "@/component/ui/Testimonials/Testimonials";
import PartnerSlider from "@/component/ui/Partnerslider/Partnerslider";
import { HeroHighlightDemo } from "@/component/ui/Partnersbg/Partnersbg";
import FeaturedBlog from "@/component/ui/Featuredblog/Featuredblog";
import Count from "@/components/ui/Count";
import WhychooseUs from "@/component/ui/Whychooseus/Whychooseus";
import GlobeDemo from "@/component/ui/Globe/Globe";
import BackgroundBeamNew from "@/component/ui/Bgbeam/Bgbeam";
import VortexBg from "@/component/ui/Vortexbg/Vortexbg";
import TypewriterEffect from "@/component/ui/Typewriter/Typewriter";
import MarqueeVertical from "@/component/ui/Ctaslider/Ctaslider";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroParalax from "@/component/ui/HeroParallax/HeroParallax";
import Cta from "@/component/ui/Cta/Cta";
import ContactForm from "@/component/ui/ContactForm/ContactForm";
import TechnologyStack from "@/component/ui/TechnologyStack/TechnologyStack";
import Blog from "@/component/ui/Blog/Blog";

const page = () => {
  const data = [
    {
      image: (
        <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 26.3333V23.6667C21 22.9594 21.281 22.2811 21.781 21.781C22.2811 21.281 22.9594 21 23.6667 21H26.3333M39.6667 21H42.3333C43.0406 21 43.7189 21.281 44.219 21.781C44.719 22.2811 45 22.9594 45 23.6667V26.3333M45 39.6667V42.3333C45 43.0406 44.719 43.7189 44.219 44.219C43.7189 44.719 43.0406 45 42.3333 45H39.6667M26.3333 45H23.6667C22.9594 45 22.2811 44.719 21.781 44.219C21.281 43.7189 21 43.0406 21 42.3333V39.6667M27.6667 35.6667C27.6667 35.6667 29.6667 38.3333 33 38.3333C36.3333 38.3333 38.3333 35.6667 38.3333 35.6667M29 29H29.0133M37 29H37.0133"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="group-hover:stroke-[#EA580C]"
          />
          <g filter="url(#filter0_f_195_5406)">
            <circle
              cx="33"
              cy="33"
              r="9"
              fill="white"
              className="group-hover:fill-themetext"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_195_5406"
              x="0"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12"
                result="effect1_foregroundBlur_195_5406"
              />
            </filter>
          </defs>
        </svg>
      ),
      heading: "Experience Excellence",
      paragraph:
        "Accessibility is our top priority. We built services with inclusivity in mind, adhering to the highest accessibility standards.",
    },
    {
      image: (
        <svg
          width="67"
          height="66"
          viewBox="0 0 67 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.3336 27.6667V25C41.3336 24.2928 41.0526 23.6145 40.5525 23.1144C40.0524 22.6143 39.3742 22.3333 38.6669 22.3333H22.6669C21.9597 22.3333 21.2814 22.6143 20.7813 23.1144C20.2812 23.6145 20.0002 24.2928 20.0002 25V34.3333C20.0002 35.0406 20.2812 35.7189 20.7813 36.219C21.2814 36.7191 21.9597 37 22.6669 37H33.3336M30.6669 42.3333V37.0533V41.2533M26.6669 42.3333H33.3336M41.3336 33H44.0002C45.473 33 46.6669 34.1939 46.6669 35.6667V43.6667C46.6669 45.1394 45.473 46.3333 44.0002 46.3333H41.3336C39.8608 46.3333 38.6669 45.1394 38.6669 43.6667V35.6667C38.6669 34.1939 39.8608 33 41.3336 33Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="group-hover:stroke-[#EA580C]"
          />
          <g filter="url(#filter0_f_195_5437)">
            <circle
              cx="33.3335"
              cy="33"
              r="9"
              fill="white"
              className="group-hover:fill-themetext"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_195_5437"
              x="0.333496"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12"
                result="effect1_foregroundBlur_195_5437"
              />
            </filter>
          </defs>
        </svg>
      ),
      heading: "Seamlessly Adapts to Your Needs",
      paragraph:
        "We deliver a service that flawlessly adapts to your specific requirements and preferences.",
    },
    {
      image: (
        <svg
          width="67"
          height="66"
          viewBox="0 0 67 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.9999 33C46.9999 40.3638 41.0304 46.3333 33.6666 46.3333C26.3028 46.3333 20.3333 40.3638 20.3333 33C20.3333 25.6362 26.3028 19.6667 33.6666 19.6667M46.9999 33C46.9999 25.6362 41.0304 19.6667 33.6666 19.6667M46.9999 33C45.2318 34.7681 42.8337 35.7614 40.3333 35.7614C37.8328 35.7614 35.4347 34.7681 33.6666 33C31.8985 31.2319 30.9052 28.8338 30.9052 26.3333C30.9052 23.8328 31.8985 21.4348 33.6666 19.6667"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="group-hover:stroke-themetext"
          />
          <g filter="url(#filter0_f_195_5424)">
            <circle
              cx="33.6665"
              cy="33"
              r="9"
              fill="white"
              className="group-hover:fill-themetext"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_195_5424"
              x="0.666504"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12"
                result="effect1_foregroundBlur_195_5424"
              />
            </filter>
          </defs>
        </svg>
      ),
      heading: "Light & Dark Sides",
      paragraph:
        "Effortlessly switch between service modes to suit your unique needs.",
    },
    {
      image: (
        <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.3333 45V27.6667C30.3333 27.313 30.1929 26.9739 29.9428 26.7239C29.6928 26.4738 29.3536 26.3333 29 26.3333H22.3333C21.9797 26.3333 21.6406 26.4738 21.3905 26.7239C21.1405 26.9739 21 27.313 21 27.6667V43.6667C21 44.0203 21.1405 44.3594 21.3905 44.6095C21.6406 44.8595 21.9797 45 22.3333 45H38.3333C38.687 45 39.0261 44.8595 39.2761 44.6095C39.5262 44.3594 39.6667 44.0203 39.6667 43.6667V37C39.6667 36.6464 39.5262 36.3072 39.2761 36.0572C39.0261 35.8071 38.687 35.6667 38.3333 35.6667H21M37 21H43.6667C44.403 21 45 21.597 45 22.3333V29C45 29.7364 44.403 30.3333 43.6667 30.3333H37C36.2636 30.3333 35.6667 29.7364 35.6667 29V22.3333C35.6667 21.597 36.2636 21 37 21Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="group-hover:stroke-themetext"
          />
          <g filter="url(#filter0_f_195_5443)">
            <circle
              cx="33"
              cy="33"
              r="9"
              fill="white"
              className="group-hover:fill-themetext"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_195_5443"
              x="0"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12"
                result="effect1_foregroundBlur_195_5443"
              />
            </filter>
          </defs>
        </svg>
      ),
      heading: "Tailored to Your Brand",
      paragraph:
        "We customize our service to perfectly align with your brand identity and objectives.",
    },
    {
      image: (
        <svg
          width="67"
          height="66"
          viewBox="0 0 67 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.6669 42.3333L46.6669 33L34.6669 23.6667V42.3333Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="group-hover:stroke-themetext"
          />
          <path
            d="M20.0002 42.3333L32.0002 33L20.0002 23.6667V42.3333Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="group-hover:stroke-themetext"
          />
          <g filter="url(#filter0_f_195_5462)">
            <circle
              cx="33.3335"
              cy="33"
              r="9"
              fill="white"
              className="group-hover:fill-themetext"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_195_5462"
              x="0.333496"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12"
                result="effect1_foregroundBlur_195_5462"
              />
            </filter>
          </defs>
        </svg>
      ),
      heading: "Blazing Fast, Smooth Sailing ",
      paragraph:
        "Enjoy a service that's lightning-fast and delivers a smooth, seamless experience.",
    },
    {
      image: (
        <svg
          width="67"
          height="66"
          viewBox="0 0 67 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.6664 37L29.6664 33M33.6664 37C35.5289 36.2917 37.3156 35.3983 38.9998 34.3333M33.6664 37V43.6667C33.6664 43.6667 37.7064 42.9333 38.9998 41C40.4398 38.84 38.9998 34.3333 38.9998 34.3333M29.6664 33C30.3759 31.1592 31.2694 29.3948 32.3331 27.7333C33.8867 25.2493 36.0499 23.2041 38.6171 21.7921C41.1843 20.3802 44.07 19.6485 46.9998 19.6667C46.9998 23.2933 45.9598 29.6667 38.9998 34.3333M29.6664 33H22.9998C22.9998 33 23.7331 28.96 25.6664 27.6667C27.8264 26.2267 32.3331 27.6667 32.3331 27.6667M23.6664 39C21.6664 40.68 20.9998 45.6667 20.9998 45.6667C20.9998 45.6667 25.9864 45 27.6664 43C28.6131 41.88 28.5998 40.16 27.5464 39.12C27.0282 38.6253 26.3455 38.3395 25.6294 38.3174C24.9133 38.2952 24.2143 38.5383 23.6664 39Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="group-hover:stroke-themetext"
          />
          <g filter="url(#filter0_f_195_5455)">
            <circle
              cx="33.6665"
              cy="33"
              r="9"
              fill="white"
              className="group-hover:fill-themetext"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_195_5455"
              x="0.666504"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12"
                result="effect1_foregroundBlur_195_5455"
              />
            </filter>
          </defs>
        </svg>
      ),
      heading: "Ready for Launch",
      paragraph:
        "Our service is thoroughly tested and optimized for a swift and successful launch.",
    },
    {
      image: (
        <svg
          width="67"
          height="66"
          viewBox="0 0 67 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0002 27.6667L32.0002 35.6667M22.6669 35.6667L30.6669 27.6667L33.3336 23.6667M20.0002 23.6667H36.0002M26.6669 19.6667H28.0002M46.6669 46.3333L40.0002 33L33.3336 46.3333M36.0002 41H44.0002"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="group-hover:stroke-themetext"
          />
          <g filter="url(#filter0_f_195_5412)">
            <circle
              cx="33.3335"
              cy="33"
              r="9"
              fill="white"
              className="group-hover:fill-themetext"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_195_5412"
              x="0.333496"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12"
                result="effect1_foregroundBlur_195_5412"
              />
            </filter>
          </defs>
        </svg>
      ),
      heading: "Ready for Launch",
      paragraph:
        "Our service is ready for immediate deployment, backed by rigorous testing and optimization.",
    },
    {
      image: (
        <svg
          width="67"
          height="66"
          viewBox="0 0 67 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.6665 21H24.3332C23.6259 21 22.9476 21.2809 22.4476 21.781C21.9475 22.2811 21.6665 22.9594 21.6665 23.6667V42.3333C21.6665 43.0406 21.9475 43.7188 22.4476 44.2189C22.9476 44.719 23.6259 45 24.3332 45H42.9998C43.7071 45 44.3854 44.719 44.8855 44.2189C45.3856 43.7188 45.6665 43.0406 45.6665 42.3333V33M42.1665 20.5C42.6969 19.9696 43.4164 19.6716 44.1665 19.6716C44.9167 19.6716 45.6361 19.9696 46.1665 20.5C46.6969 21.0304 46.9949 21.7499 46.9949 22.5C46.9949 23.2501 46.6969 23.9696 46.1665 24.5L34.1492 36.5187C33.8326 36.835 33.4414 37.0665 33.0118 37.192L29.1812 38.312C29.0664 38.3455 28.9448 38.3475 28.829 38.3178C28.7133 38.2881 28.6076 38.2279 28.5231 38.1434C28.4386 38.0589 28.3784 37.9532 28.3487 37.8374C28.319 37.7217 28.321 37.6001 28.3545 37.4853L29.4745 33.6547C29.6005 33.2254 29.8325 32.8347 30.1492 32.5187L42.1665 20.5Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="group-hover:stroke-themetext"
          />
          <g filter="url(#filter0_f_195_5431)">
            <circle
              cx="33.6665"
              cy="33"
              r="9"
              fill="white"
              className="group-hover:fill-themetext"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_195_5431"
              x="0.666504"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12"
                result="effect1_foregroundBlur_195_5431"
              />
            </filter>
          </defs>
        </svg>
      ),
      heading: "Global Reach",
      paragraph:
        "Our service is designed to cater to a global audience, with easy adaptation to multiple languages and regions.",
    },
    {
      image: (
        <svg
          width="67"
          height="66"
          viewBox="0 0 67 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0002 27.6667L32.0002 35.6667M22.6669 35.6667L30.6669 27.6667L33.3336 23.6667M20.0002 23.6667H36.0002M26.6669 19.6667H28.0002M46.6669 46.3333L40.0002 33L33.3336 46.3333M36.0002 41H44.0002"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="group-hover:stroke-themetext"
          />
          <g filter="url(#filter0_f_195_5412)">
            <circle
              cx="33.3335"
              cy="33"
              r="9"
              fill="white"
              className="group-hover:fill-themetext"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_195_5412"
              x="0.333496"
              y="0"
              width="66"
              height="66"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12"
                result="effect1_foregroundBlur_195_5412"
              />
            </filter>
          </defs>
        </svg>
      ),
      heading: "Effortless Integration",
      paragraph:
        "Our service seamlessly integrates with your existing workflows and systems.",
    },
  ];

  const image = (
    <img
      className="h-[430px] object-cover object-left"
      src="/images/globe.png"
      alt=""
    />
  );
  const imageTwo = (
    <img
      className="h-[430px] object-contain object-center p-10"
      src="/images/cta_two.png"
      alt=""
    />
  );

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      {/* banner */}
      <section className="w-full relative">
        {/* bg overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        {/* galaxy */}
        <div className="w-full">
          <div className="sketchfab-embed-wrapper">
            <iframe
              className="w-full h-[715px] sm:h-[775px] lg:h-[900px]"
              frameBorder="0"
              allowFullScreen
              mozAllowFullScreen="true"
              webkitAllowFullScreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xrSpatialTracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/d6521362b37b48e3a82bce4911409303/embed?autostart=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark&ui_loader=0"
            ></iframe>
          </div>
        </div>
        <div className="w-full absolute top-20 sm:top-28 left-0 px-4 lg:px-24 py-5 lg:py-14">
          <div className="w-full flex flex-wrap sm:flex-nowrap justify-between">
            <div className="w-full sm:w-3/4 lg:w-[60%]">
              <div className="w-auto">
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-shadow-2xl  text-gradiant-custom">
                  Exploring the Digital Galaxy: Innovative IT Solutions for Your{" "}
                  <span className="text-themetext"> Business Growth</span>
                </h1>
                <button className="mt-7 btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                  Let's talk{" "}
                  <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
                </button>
              </div>
              <div className="w-auto mt-6 sm:mt-16">
                <span className="block sm:font-bold text-lg mb-7">
                  We are Trusted by
                </span>
                <div className="max-w-lg">
                  <MarqueeSlider />
                </div>
              </div>
            </div>
            <div className="mt-6 w-full sm:w-1/4 lg:w-[44%] lg:mt-5 text-right">
              <div className="w-full sm:w-auto sm:max-w-[157px] ml-auto grid grid-cols-2 sm:grid-cols-1 gap-y-5 sm:gap-y-10">
                <div className="w-full text-center">
                  <b className="font-extrabold text-xl sm:text-3xl text-themetext block">
                    <Count endValue={2} /> +
                  </b>
                  <span className="font-medium text-sm sm:text-base">
                    Years of Experience
                  </span>
                </div>
                <div className="w-full text-center">
                  <b className="font-extrabold text-xl sm:text-3xl text-themetext block">
                    <Count endValue={25} /> +
                  </b>
                  <span className="font-medium text-sm sm:text-base">
                    Countries Served
                  </span>
                </div>
                <div className="w-full text-center">
                  <b className="font-extrabold text-xl sm:text-3xl text-themetext block">
                    <Count endValue={25} /> +
                  </b>
                  <span className="font-medium text-sm sm:text-base">
                    Tech Enthusiast
                  </span>
                </div>
                <div className="w-full text-center">
                  <b className="font-extrabold text-xl sm:text-3xl text-themetext block">
                    <Count endValue={300} /> +
                  </b>
                  <span className="font-medium text-sm sm:text-base">
                    Products Delivered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hidden sm:inline px-4 lg:px-24 absolute -bottom-[170px] left-1/2 -translate-x-1/2 rounded-lg">
          <div className="w-full border border-[#09090B33] overflow-hidden rounded-lg bg-[#fafafa12] px-24  ">
            <div className="w-full  z-[1111]  max-w-sm mx-auto rounded-lg">
              <RippleBg numCircles={10} />
            </div>
            <div className=" w-full px-6 lg:px-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <MagicCardDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  bg-gradient-custom pt-11 sm:pt-52 pb-12 lg:pb-14 px-4 lg:px-24 overflow-hidden">
        <div className="w-full  relative inline-block sm:hidden  rounded-lg">
          <div className="w-full border border-[#09090B33] rounded-lg bg-[#fafafa12] ">
            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-sm mx-auto rounded-lg">
              <RippleBg numCircles={8} />
            </div>
            <div className=" w-full py-4 px-4">
              <MagicCardDemo />
            </div>
          </div>
        </div>
        <div className="w-full mt-5 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center justify-between ">
          <div
            className="w-full sm:w-auto sm:max-w-3xl 2xl:max-w-4xl pr-4 lg:pr-0"
            data-aos="fade-up"
          >
            <span className="mb-2 block font-semibold text-base">
              Trusted Across the Galaxy
            </span>
            <p className="sm:font-semibold text-base sm:text-xl lg:text-xl 2xl:text-2xl lg:pr-5 tracking-tighter">
              We've partnered with forward-thinking brands across multiple
              industries, delivering innovative solutions through a diverse
              range of services.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="border-t sm:border-t-0 sm:border-l  border-white mt-6 sm:mt-0 pt-6 sm:py-12 sm:px-12 lg:px-10 2xl:px-12"
          >
            <h3 className="text-lg sm:text-xl lg:text-xl 2xl:text-2xl uppercase sm:text-center font-semibold max-w-80">
              Breaking Barriers Since Day One
            </h3>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full px-4 lg:px-11 py-10 sm:py-14 lg:py-16 overflow-hidden">
        <div className="w-full  sm:text-center" data-aos="fade-right">
          <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-5xl sm:mx-auto">
            We specialize in developing high-quality Android and iOS
            applications that deliver exceptional user experiences and drive
            business growth
          </p>
        </div>
        <div data-aos="fade-up">
          <FeaturedSlider />
        </div>
        <div className="w-full mt-5 sm:mt-10 flex justify-center">
          <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
            View More{" "}
            <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
          </button>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="w-full relative  py-0 px-0 overflow-hidden">
        <div className="w-full h-full">
          <BackgroundBeamNew />
        </div>
        <div className="w-full absolute top-3 sm:top-6 left-1/2 -translate-x-1/2 ">
          <div className="w-full px-4 sm:px-0 sm:text-center mb-6 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-[45px] 2xl:text-5xl font-bold">
              Revolutionizing Businesses with Excellence & Expertise
            </h2>
          </div>
          <div className="w-full px-4 lg:px-24">
            <BusinessCards />
          </div>
        </div>
      </section>

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />

      {/* Our Expertise */}
      <section
        data-aos="fade-up"
        className="w-full px-4 lg:px-44 mb-20 overflow-hidden"
      >
        <div className="w-full text-center mb-0">
          <SparklesHeading />
        </div>
        <div className="w-full mt-5 sm:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
          {data?.map((dat, index) => (
            <div className="border border-[#EA580C] p-4 pl-0 sm:pl-0 sm:p-0 rounded-lg sm:rounded-none sm:border-none w-auto group">
              <span>{dat?.image}</span>
              <h5 className="pl-4 group-hover:text-themetext font-semibold text-lg my-2">
                {dat?.heading}
              </h5>
              <p className="pl-4 text-sm sm:text-base text-muted-foreground">
                {dat?.paragraph}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology stack */}
      <TechnologyStack/>

      {/* Revolutionizing business */}
      <section
        data-aos="fade-up"
        className="w-full relative  py-0 sm:py-0 lg:py-0 overflow-hidden "
      >
        <HeroParalax />
      </section>

      {/* client says */}
      <section className="w-full px-4 sm:px-5 lg:px-14 mt-10 sm:mt-16   lg:mt-24 mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
        <div data-aos="fade-left" className="w-full sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient-custom">
            Lets’s Hear What Our Clients Say
          </h2>
          <p className="font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl my-3">
            Using the latest technology and industry expertise, we built top-end
            Android and iOS-based applications that add value to the business
            and user experience.
          </p>
        </div>
        <div className="w-full sm:px-4 lg:px-12">
          <Testimonials />
        </div>
      </section>

      {/* our partners */}
      <section
        data-aos="fade-up"
        className="w-full relative inline-block pt-48 pb-16 sm:py-24 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <HeroHighlightDemo />
        </div>

        <div className="w-full mt-0 sm:mt-16 lg:mt-[172px] relative z-20">
          <PartnerSlider />
        </div>
      </section>

      {/* Cta section */}
      <Cta vortex={"VortexBg"} Aurora={""} content={"Marquee"} />

      {/* why choose us  */}
      <section data-aos="fade-up" className="w-full">
        <div className="w-full">
          <WhychooseUs />
        </div>
      </section>

      {/* Featured Blogs section */}
      <Blog/>

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default page;
