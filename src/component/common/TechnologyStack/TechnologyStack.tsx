import React from "react";
import { BackgroundBeam } from "./Backgroundbeams/Backgroundbeams";
import { OrbitingCircle } from "./Orbitingcircle/Orbitingcircle";
import Image from "next/image";
import planet from "../../../../public/images/planet.svg"

const TechnologyStack = () => {
  return (
    <>
      {/* Technology stack */}
      <section
        data-aos="fade-up"
        className="w-full h-[750px]  relative overflow-hidden"
      >
        <div className="w-full -z-10 absolute h-full top-0 left-0 ">
          <BackgroundBeam />
        </div>
        <div className="w-full text-center mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gradiant-custom">
            Technology Stack
          </h2>
        </div>
        <div className="w-full">
          <OrbitingCircle />
          <div className="w-[740px] h-[515px] max-w-[400px] sm:max-w-full sm:h-[430px] lg:h-auto absolute bottom-0 left-1/2 -translate-x-1/2">
            {/* <img
              className=" mx-auto relative sm:right-5"
              src="/images/planet.svg"
              alt=""
            /> */}
              <Image
              src={planet}
              alt="Planet"
              width={740}  // Set a base width
              height={515} // Set a base height
              className="mx-auto h-[570px] sm:h-auto sm:object-contain relative sm:right-5"
              priority // Optional: if it's an important image for page load
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyStack;
