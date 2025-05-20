/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../../../../public/images/footer_logo.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { generateClient } from "aws-amplify/data";
import useAmplifyConfig from "@/hooks/useAmplify";
import { validateEmail } from "@/lib/utils";

const client = generateClient();

const Footer = () => {
  useAmplifyConfig();

  const productLinks = [
    { name: "Mobile App Development", url: "/services/mobile-app-development" },
    { name: "Web App Development", url: "/services/web-app-development" },
    { name: "UI/UX Design", url: "/services/uiux-web-design" },
    { name: "Machine Learning & AI", url: "/services/machine-learning-ai" },
    { name: "E-Commerce", url: "/services/e-commerce" },
    { name: "Blockchain", url: "/services/blockchain" },
  ];
  // const companyLinks = [
  //   { name: "About", url: "/about-us" },
  //   { name: "Careers", url: "#" },
  //   { name: "Blog", url: "/blogs" },
  // ];

  // const contactLinks = [
  //   { name: "Github", url: "#" },
  //   { name: "Discord", url: "#" },
  //   { name: "Twitter", url: "#" },
  // ];
  const footerLinks = [
    { title: "Services", links: productLinks },
    // { title: "Company", links: companyLinks },
  ];
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async () => {
    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    setIsLoading(true);
    try {
      const existing = await (client.models as any).SubscribersEmail.list({
        filter: { email: { eq: email } },
      });

      if (existing.data.length > 0) {
        toast.error("Already subscribed!");
      } else {
        await (client.models as any).SubscribersEmail.create({
          email,
        });
        toast.success("Subscribed successfully!");
        setEmail("");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Something went wrong. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <footer className="w-full inline-block bg-white">
      <div className="w-full container remove-bg">
        <div className="w-full flex  gap-y-7 sm:gap-5 flex-wrap lg:flex-nowrap mt-10 lg:mt-12 mb-8 sm:mb-10 lg:mb-10 justify-between">
          <div className="w-full lg:w-1/4 mb-0 sm:mb-6 lg:mb-0">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={160}
                height={40}
                className="w-[110px] sm:w-[160px]"
              />
            </Link>
            <p className="font-light text-sm text-[#6B6B6B] my-3 sm:my-5">
              Your Vision, Our Innovation.
            </p>
            <ul className="flex items-center gap-5">
              <li>
                <a href="https://www.instagram.com/zygobit" target="_blank">
                  <Image
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    src="/images/instagram.svg"
                    alt="icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/zygobit" target="_blank">
                  <Image
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    src="/images/facebook.svg"
                    alt="icon"
                  />
                </a>
              </li>
              {/* <li>
              <a href="">
                <Image
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  src="/images/x.svg"
                  alt="icon"
                />
              </a>
            </li>
            <li>
              <a href="">
                <Image
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  src="/images/linkedin.svg"
                  alt="icon"
                />
              </a>
            </li> */}
            </ul>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="w-full sm:w-1/4 lg:pl-[90px]">
              <h6 className="font-semibold text-sm lg:text-lg mb-4 text-black">
                {section.title}
              </h6>
              <ul className="grid grid-cols-1 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      target="_blank"
                      href={link.url}
                      className="text-sm text-secondaryText hover:text-themetext"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-full sm:w-1/4 sm:pl-14  lg:pl-[90px]">
            <h6 className="font-semibold text-sm lg:text-lg mb-4 text-black">
              Company
            </h6>
            <ul className="grid grid-cols-1 space-y-4">
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-secondaryText hover:text-themetext"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-secondaryText hover:text-themetext"
                >
                  Careers
                </Link>
              </li> */}
              <li>
                <Link
                  href="/blogs"
                  className="text-sm text-secondaryText hover:text-themetext"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-[320px] lg:w-[398px] ">
            <div className="w-full bg-[#F2F2F7] rounded-lg p-4">
              <Label className="text-black font-semibold text-sm block mb-3 sm:text-base lg:text-lg">
                Join Our Newsletter
              </Label>
              <div className="flex items-center h-10 sm:h-11 lg:h-12 rounded-lg overflow-hidden">
                <Input
                  className="bg-white  text-sm text-black sm:text-sm lg:text-sm h-10 md:h-11 lg:h-12 placeholder:text-[#6B6B6B] border-none rounded-none"
                  placeholder="Your email address"
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={email}
                />
                <Button
                  onClick={handleSubscribe}
                  className=" bg-orange-600 font-medium text-sm h-10 sm:h-11 lg:h-12 lg:text-sm hover:bg-orange-500 border-none rounded-none"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Subscribe"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-4 pb-8 flex flex-wrap gap-y-5 sm:flex-nowrap border-t border-[#09090B1A] justify-between items-center">
          <p className=" w-full sm:w-auto text-secondaryText text-xs">
            © 2025 Zygobit All rights reserved.
          </p>
          <ul className="w-full sm:w-auto flex gap-5 items-center">
            <li>
              <Link
                href="/privacy-policy"
                className="text-secondaryText hover:text-themetext text-xs"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-services"
                className="text-secondaryText hover:text-themetext text-xs"
              >
                Terms of service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
