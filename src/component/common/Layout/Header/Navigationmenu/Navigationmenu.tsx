/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  const [classDynamic, setClassDynamic] = React.useState("top-10 lg:top-full ");

  const handleClassChange = (val: string) => {
    setClassDynamic(val);
  };
  return (
    <NavigationMenu className={classDynamic}>
      <NavigationMenuList className="grid grid-cols-1 gap-4 space-x-0 lg:space-x-1 lg:flex">
        <NavigationMenuItem
          onClick={() => handleClassChange(" top-6 lg:top-full")}
          className="  text-white"
        >
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="  custom-blur  border-none">
            <div className="w-full ">
              <ul className="grid grid-cols-1 gap-3 items-center w-screen mx-auto lg:grid-cols-3">
                <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-7 col-span-2 p-10">
                  <div className="flex gap-4">
                    <div className="w-20 h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                      <img src="/images/mobile_icon.png" alt="" />
                    </div>
                    <ListItem
                      className="text-white hover:text-white hover:bg-transparent p-0 w-[calc(100%-75px)]"
                      href="/services/mobile-app-development"
                      title="Mobile App Development"
                    >
                      Create high-performance mobile apps for iOS and Android.
                    </ListItem>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                      <img src="/images/webdev.png" alt="" />
                    </div>
                    <ListItem
                      className="text-white hover:text-white hover:bg-transparent p-0"
                      href="/services/web-app-development"
                      title="Web Development"
                    >
                      Develop fast, responsive, and optimized websites.
                    </ListItem>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                      <img src="/images/uiux.png" alt="" />
                    </div>
                    <ListItem
                      className="text-white hover:text-white hover:bg-transparent p-0"
                      href="/services/uiux-web-design"
                      title="UI/UX Design"
                    >
                      Craft intuitive and engaging user experiences.
                    </ListItem>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                      <img src="/images/machinel.png" alt="" />
                    </div>
                    <ListItem
                      className="text-white hover:text-white hover:bg-transparent p-0"
                      href="/services/machine-learning-ai"
                      title="Machine Learning and AI"
                    >
                      Leverage AI for automation, insights, and smarter
                      solutions.
                    </ListItem>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-20 h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                      <img src="/images/ecommerce.png" alt="" />
                    </div>
                    <ListItem
                      className="text-white hover:text-white hover:bg-transparent p-0"
                      href="/services/Ecommerce"
                      title="E-Commerce"
                    >
                      Build secure online stores with easy payments.
                    </ListItem>
                  </div>
                </div>
                <li className="row-span-1 h-full bg-white/10 backdrop-blur-xl text-center bg-opacity-25 py-12">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-center items-center rounded-md  no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div>
                        <img
                          className="w-[250px]"
                          src="/images/Logo.png"
                          alt=""
                        />
                      </div>
                      <p className="mt-7 text-base  text-white font-[300] sm:px-20">
                        Scalable and feature-rich ecommerce platforms designed
                        to enhance business growth, ensure robust security,
                        streamline operations, and provide a seamless shopping
                        experience for users. 
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref prefetch>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blogs" legacyBehavior passHref prefetch>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          prefetch={true}
          href={href as string}
          className={cn(
            "block select-none space-y-1 rounded-md p-0 leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-base sm:text-lg lg:text-lg font-bold leading-none">
            {title} <img src="/images/right_icon.png" alt="" />
          </div>
          <p className="line-clamp-2 mt-2 text-sm  text-white">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
