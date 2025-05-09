/* eslint-disable react/display-name */
"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import Image from "next/image";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex  items-center justify-center rounded-lg  p-0  text-white",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "group relative lg:w-full inline-flex gap-5 text-center rounded-lg items-center h-10 sm:h-14 lg:h-[75px] text-[#6B6B6B] justify-center bg-[#d6cdcd21] sm:bg-[#F4F4F4] whitespace-nowrap px-3 py-1.5 text-sm sm:text-base sm:font-semibold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-100 data-[state=active]:bg-[#EA580C] data-[state=active]:border-none data-[state=active]:text-white",
      className
    )}
    {...props}
  >
    {children}
  </TabsPrimitive.Trigger>
));

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-0 w-full lg:w-[calc(100%-160px)] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
