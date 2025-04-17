/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

import { usePathname } from "next/navigation";

export default function NavigationMenuDemo() {
  const [classDynamic, setClassDynamic] = React.useState("top-10 lg:top-full ");
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const pathname = usePathname();

  const handleClassChange = (val: string) => {
    setClassDynamic(val);
  };

  // Toggle open/close on trigger click
  const handleServiceDropdown = () => {
    setDropdownOpen((open) => !open);
  };

  React.useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside #nav-wrapper
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      const wrapper = document.getElementById("nav-wrapper");
      if (dropdownOpen && wrapper && !wrapper.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // listen for click (fires *after* your toggleMenu onClick)
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [dropdownOpen]);

  // Sync active-services class on your #nav-wrapper
  React.useEffect(() => {
    const wrapper = document.getElementById("nav-wrapper");
    if (wrapper) {
      wrapper.classList.toggle("active-services", dropdownOpen);
    }
  }, [dropdownOpen]);

  return (
    <>
      <NavigationMenu className={classDynamic}>
        <NavigationMenuList className="grid grid-cols-1 gap-4 space-x-0 lg:space-x-1 lg:flex ">
          <NavigationMenuItem
            onClick={() => handleClassChange(" top-5 lg:top-[143%]")}
            className="  text-white"
          >
            {/* <NavigationMenuTrigger onClick={handleServiceDropdown}> */}
            <NavigationMenuTrigger
              onMouseDown={(e) => e.stopPropagation()}
              onClick={handleServiceDropdown}
            >
              Services{" "}
              <ChevronDown
                className={cn(
                  "relative top-[1px] ml-1 h-3 w-3 transition-transform duration-200",
                  dropdownOpen ? "rotate-180" : ""
                )}
                aria-hidden="true"
              />
            </NavigationMenuTrigger>
            <div className=" w-full h-full lg:hidden">
              <NavigationMenuContent className="lg:hidden backdrop-blur-2xl bg-black/40 custom-bg-remove  border-none relative z-50">
                <div className="w-full backdrop-blur-2xl bg-black/40  relative ">
                  <ul className="backdrop-blur-2xl bg-black/40 rounded-lg grid grid-cols-1 gap-3 items-center w-full sm:w-screen mx-auto lg:grid-cols-3">
                    <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-7 col-span-2 p-4 lg:p-10">
                      <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                        <div className=" p-2 sm:p-0 w-12 sm:w-20 h-12 sm:h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                          <img
                            className="w-6 sm:w-auto"
                            src="/images/mobile_icon.svg"
                            alt=""
                          />
                        </div>
                        <ListItem
                          className="text-white text-sm sm:text-base hover:text-white hover:bg-transparent p-0"
                          href="/services/mobile-app-development"
                          title="Mobile App Development"
                        >
                          Create high-performance mobile apps for iOS and
                          Android.
                        </ListItem>
                      </div>
                      <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                        <div className="  p-2 sm:p-0 w-12 sm:w-20 h-12 sm:h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                          <img
                            className="w-6 sm:w-auto"
                            src="/images/webdev.svg"
                            alt=""
                          />
                        </div>
                        <ListItem
                          className="text-white hover:text-white hover:bg-transparent p-0"
                          href="/services/web-app-development"
                          title="Web Development"
                        >
                          Develop fast, responsive, and optimized websites.
                        </ListItem>
                      </div>
                      <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                        <div className="  p-2 sm:p-0 w-12 sm:w-20 h-12 sm:h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                          <img
                            className="w-6 sm:w-auto"
                            src="/images/uiux.svg"
                            alt=""
                          />
                        </div>
                        <ListItem
                          className="text-white hover:text-white hover:bg-transparent p-0"
                          href="/services/uiux-web-design"
                          title="UI/UX Design"
                        >
                          Craft intuitive and engaging user experiences.
                        </ListItem>
                      </div>
                      <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                        <div className="  p-2 sm:p-0 w-12 sm:w-20 h-12 sm:h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                          <img
                            className="w-6 sm:w-auto"
                            src="/images/machinel.svg"
                            alt=""
                          />
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
                      <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                        <div className="  p-2 sm:p-0 w-12 sm:w-20 h-12 sm:h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                          <img
                            className="w-6 sm:w-auto"
                            src="/images/ecommerce.svg"
                            alt=""
                          />
                        </div>
                        <ListItem
                          className="text-white hover:text-white hover:bg-transparent p-0"
                          href="/services/e-commerce"
                          title="E-Commerce"
                        >
                          Build secure online stores with easy payments.
                        </ListItem>
                      </div>
                    </div>
                    <li className="hidden xl:inline row-span-1 h-full backdrop-blur-xl bg-opacity-20 bg-[#FFFFFF1A]   text-center py-12">
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
                            Scalable and feature-rich ecommerce platforms
                            designed to enhance business growth, ensure robust
                            security, streamline operations, and provide a
                            seamless shopping experience for users. 
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </div>
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
          <NavigationMenuItem>
            <Link href="/portfolio" legacyBehavior passHref prefetch>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Portfolio
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li className="w-[calc(100%-48px)] lg:w-[calc(100%-80px)]">
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          prefetch={true}
          href={href as string}
          className={cn(
            "block sm:w-full lg:w-full  select-none space-y-1 rounded-md p-0 leading-none no-underline outline-none transition-colors w-[calc(100%-0px)]",
            className
          )}
          {...props}
        >
          <div className="w-full sm:w-auto flex items-center gap-2 text-sm sm:text-lg lg:text-lg  sm:font-bold leading-none">
            {title}{" "}
            <img
              className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto"
              src="/images/right_icon.png"
              alt=""
            />
          </div>
          <p className="hidden sm:inline-block line-clamp-2 mt-3 sm:mt-2 font-light sm:font-normal text-sm  text-white">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
