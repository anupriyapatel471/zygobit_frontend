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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

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
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 gap-3 p-4 sm:p-6 items-center w-full md:w-[400px] lg:w-[900px] lg:grid-cols-3">
              <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-3 col-span-2">
                <ListItem
                  className="text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                  href="/services/mobile-app-development"
                  title="Mobile App Development"
                >
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem
                  className="text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                  href="/services/web-app-development"
                  title="Web Development"
                >
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem
                  className="text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                  href="/services/uiux-web-design"
                  title="UI UX Design"
                >
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
                <ListItem
                  className="text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                  href="/services/machine-learning-ai"
                  title="Machine Learning and AI"
                >
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
                <ListItem
                  className="text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                  href="/services/Ecommerce"
                  title="Ecommerce"
                >
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </div>
              <li className="row-span-1">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent-foreground/50 to-accent-foreground p-3 sm:p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-0 sm:mt-4 text-lg text-white font-medium">
                      ZYgobit Ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
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
          <Link href="/Blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem
          onClick={() => handleClassChange(" top-[52px] lg:top-full")}
        >
          <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
          <NavigationMenuContent className=" second-live">
            <ul className="grid w-full gap-3 p-1 sm:p-4 sm:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  className="text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        {/* <NavigationMenuItem
          onClick={() => handleClassChange(" top-[108px] lg:top-full")}
        >
          <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-1 sm:p-4 sm:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  className="text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem
          onClick={() => handleClassChange(" top-[136px] lg:top-full")}
        >
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-full gap-3 p-1 sm:p-4 sm:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  className="text-white hover:text-white hover:bg-gradient-to-b from-accent-foreground/50 to-accent-foreground"
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
