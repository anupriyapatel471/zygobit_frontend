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
          className="text-white"
        >
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 gap-3 p-4 sm:p-6 items-center w-full md:w-[400px] lg:w-[900px] lg:grid-cols-3">
              <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-3 col-span-2">
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/mobile-app-development"
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        "text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">
                        Mobile App Development
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Create high-performance mobile apps for iOS and Android.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/web-app-development"
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        "text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">
                        Web Development
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Develop fast, responsive, and optimized websites.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/uiux-web-design"
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        "text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">
                        UI/UX Design
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Craft intuitive and engaging user experiences.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/machine-learning-ai"
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        "text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">
                        Machine Learning and AI
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Leverage AI for automation, insights, and smarter
                        solutions.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/Ecommerce"
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        "text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">
                        E-Commerce
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Build secure online stores with easy payments.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </div>
              <li className="row-span-1 h-full">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex h-full w-full select-none flex-col justify-center items-center rounded-md bg-gradient-to-b from-accent-foreground/50 to-accent-foreground p-3 sm:p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-0 sm:mt-4 text-lg text-white font-medium">
                      Zygobit Tech
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Scalable and feature-rich ecommerce platforms designed to
                      enhance business growth, ensure robust security,
                      streamline operations, and provide a seamless shopping
                      experience for users.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blogs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
