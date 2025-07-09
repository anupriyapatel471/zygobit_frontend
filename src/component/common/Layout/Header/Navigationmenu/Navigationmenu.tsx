/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Image from "next/image";

export default function NavigationMenuDemo() {
  const [classDynamic, setClassDynamic] = React.useState("top-5 lg:top-full ");

  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [clickedTab, setClickedTab] = React.useState<string | null>(null);

  const pathname = usePathname();

  const handleClassChange = (val: string) => {
    setClassDynamic(val);
  };

  const handleServiceDropdown = () => {
    setDropdownOpen((open) => !open);
  };

  React.useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  const isActiveTab = (route: string) => {
    const knownRoutes = ["/services", "/about-us", "/blogs", "/portfolio"];

    const match = knownRoutes.some((r) => pathname.startsWith(r));
    if (!match) return false;

    // Always prefer current pathname over clickedTab for accuracy
    return pathname.startsWith(route);
  };

  // const isActiveTab = (route: string) => {
  //   // Always match the start of the path
  //   return pathname.startsWith(route);
  // };

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
            className="text-white"
          >
            {/* <NavigationMenuTrigger onClick={handleServiceDropdown}> */}
            <NavigationMenuTrigger
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                handleServiceDropdown();
              }}
              className={cn(
                navigationMenuTriggerStyle(),
                isActiveTab("/services") && "bg-orange-600 text-white"
              )}
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
            <div className="w-full h-full lg:hidden">
              <NavigationMenuContent className="lg:hidden bg-white border-none relative z-50">
                <div className="w-full backdrop-blur-2xl relative">
                  <ul className="backdrop-blur-2xl rounded-lg grid grid-cols-1 gap-3 items-center w-full sm:w-screen mx-auto lg:grid-cols-3">
                    <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-7 col-span-2 p-4 lg:p-10">
                      {/* ✅ Add setClickedTab in each ListItem */}
                      <ServiceListItem
                        setClickedTab={setClickedTab}
                        href="/services/mobile-app-development"
                        icon="/images/mobile_icon.svg"
                        title="Mobile App Development"
                      >
                        Create high-performance mobile apps for iOS and Android.
                      </ServiceListItem>

                      <ServiceListItem
                        setClickedTab={setClickedTab}
                        href="/services/web-app-development"
                        icon="/images/webdev.svg"
                        title="Web Development"
                      >
                        Develop fast, responsive, and optimized websites.
                      </ServiceListItem>

                      <ServiceListItem
                        setClickedTab={setClickedTab}
                        href="/services/uiux-web-design"
                        icon="/images/uiux.svg"
                        title="UI/UX Design"
                      >
                        Craft intuitive and engaging user experiences.
                      </ServiceListItem>

                      <ServiceListItem
                        setClickedTab={setClickedTab}
                        href="/services/machine-learning-ai"
                        icon="/images/machinel.svg"
                        title="Machine Learning and AI"
                      >
                        Leverage AI for automation, insights, and smarter
                        solutions.
                      </ServiceListItem>

                      <ServiceListItem
                        setClickedTab={setClickedTab}
                        href="/services/e-commerce"
                        icon="/images/ecommerce.svg"
                        title="E-Commerce"
                      >
                        Build secure online stores with easy payments.
                      </ServiceListItem>

                      <ServiceListItem
                        setClickedTab={setClickedTab}
                        href="/services/blockchain"
                        icon="/images/blockchain.svg"
                        title="Blockchain"
                      >
                        Leverage AI for automation, insights, and smarter
                        solutions.
                      </ServiceListItem>
                    </div>
                    <li className="hidden xl:inline row-span-1 h-full backdrop-blur-xl bg-opacity-20 bg-[#FFFFFF1A] text-center py-12">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-center items-center rounded-md no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div>
                            <Image
                              width={250}
                              height={150}
                              className="w-[250px] h-auto"
                              src="/images/Logo.png"
                              alt="Logo"
                            />
                          </div>
                          <p className="mt-7 text-base text-white font-[300] sm:px-20">
                            Scalable and feature-rich ecommerce platforms...
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
              <NavigationMenuLink
                onClick={() => setClickedTab("/about-us")}
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActiveTab("/about-us") && "bg-orange-600 text-white"
                )}
              >
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/blogs" legacyBehavior passHref prefetch>
              <NavigationMenuLink
                onClick={() => setClickedTab("/blogs")}
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActiveTab("/blogs") && "bg-orange-600 text-white"
                )}
              >
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/portfolio" legacyBehavior passHref prefetch>
              <NavigationMenuLink
                onClick={() => setClickedTab("/portfolio")}
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActiveTab("/portfolio") && "bg-orange-600 text-white"
                )}
              >
                Portfolio
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

// ✅ Extracted and reused component with setClickedTab support
const ServiceListItem = ({
  href,
  title,
  children,
  icon,
  setClickedTab,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
  icon: string;
  setClickedTab: (route: string) => void;
}) => (
  <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
    <div className="p-2 sm:p-0 w-12 sm:w-20 h-12 sm:h-[70px] flex items-center justify-center bg-[#FFE8E0] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
      <Image
        width={24}
        height={24}
        className="w-6 sm:w-auto sm:h-auto"
        src={icon}
        alt="icon"
      />
    </div>
    <ListItem
      href={href}
      title={title}
      className="text-black hover:text-orange-600 font-semibold hover:bg-transparent p-0"
      onClick={() => setClickedTab(href)}
    >
      {children}
    </ListItem>
  </div>
);

// Unchanged ListItem component
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
            "block sm:w-full lg:w-full select-none space-y-1 rounded-md p-0 leading-none no-underline outline-none transition-colors w-[calc(100%-0px)]",
            className
          )}
          {...props}
        >
          <div className="w-full sm:w-auto flex items-center gap-2 text-base sm:text-lg lg:text-lg font-semibold sm:font-bold leading-none">
            {title}
            <Image
              width={12}
              height={12}
              className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto"
              src="/images/right_icon.png"
              alt="Right Icon"
            />
          </div>
          <p className="hidden sm:inline-block line-clamp-2 mt-3 sm:mt-2 font-light sm:font-normal text-sm text-white">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
