/* eslint-disable @next/next/no-img-element */
//
import React from "react";
import TechnologySlider from "./TechnologySlider";

const TechnologyStack = () => {
  return (
    <>
      <section data-aos="fade-up" className="w-full relative overflow-hidden pb-0 sm:pb-32 lg:pb-0">
        <div className="container remove-bg">
          <div className="w-full text-center mb-5 sm:mb-36 lg:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gradiant-custom">
              Technology Stack
            </h2>
          </div>
          <TechnologySlider />
        </div>
      </section>
    </>
  );
};

export default TechnologyStack;
