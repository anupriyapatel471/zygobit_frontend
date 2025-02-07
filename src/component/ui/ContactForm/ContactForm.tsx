"use client";
import React from "react";
import { Input, TextArea } from "../../../components/ui/contactInput";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      {/* contact form */}
      <section className="w-full px-4 lg:px-24 relative overflow-hidden">
        <div className="w-full grid items-center   bg-white/5 rounded-2xl grid-cols-1 lg:grid-cols-2 gap-8 p-4 sm:p-5">
          <div data-aos="fade-right" className="w-auto relative">
            <img
              className="w-full rounded-2xl h-[415px] sm:h-[800px] object-cover"
              src="/images/space_x.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 px-3 sm:px-8 py-8">
              <p className="tracking-tighter text-sm sm:text-lg mb-2">
                “Two lunar months revealed Earth's fragile beauty against vast
                silence, transforming my view of our place in the universe.
              </p>
              <b className="sm:font-medium text-base sm:text-lg tracking-tight">
                Irinel Traista
              </b>
            </div>
          </div>
          <div data-aos="fade-left" className="w-auto lg:px-8">
            <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom">
              Let’s connect
            </h2>
            <p className="text-sm sm:text-lg tracking-tighter pt-2 pb-5 sm:pb-10">
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>
            <div className="w-full grid grid-cols-1 gap-4">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" type="text" />
                <Input placeholder="Last Name" type="text" />
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Phone Number" type="number" />
                <Input placeholder="Job Title" type="text" />
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Company Name" type="text" />
                <Input placeholder="Company Email" type="email" />
              </div>
              <div className="w-full">
                <Input
                  placeholder="When do you want to launch a solution?"
                  type="text"
                />
              </div>
              <div className="w-full">
                <Input placeholder="Budget :" type="text" />
              </div>
              <div className="w-full">
                <TextArea
                  className="resize-none w-full text-sm sm:text-base h-16 md:h-20 lg:h-32 border border-white/20 bg-zinc-800 p-3 rounded-md outline-none"
                  placeholder="About Project"
                ></TextArea>
              </div>
              <button className="group bg-gradient-custom overflow-hidden font-medium transition-all duration-500 btn-primary text-white relative">
                Let’s Build
                <img
                  className="  group-hover:translate-x-64 transition-all duration-1000"
                  src="images/rocket.svg"
                  alt=""
                />
                <BottomGradient />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
