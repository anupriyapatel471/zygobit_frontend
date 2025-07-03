/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesDropdown = () => {
  return (
    <>
      <div className="w-full service-dropdown-active fixed top-20 left-0 bg-[#00000014] backdrop-blur-2xl  z-[999] ">
        <div className="w-full grid">
          <div className="w-full   relative ">
            <ul className=" rounded-lg grid grid-cols-1 gap-3 items-center w-full sm:w-screen mx-auto lg:grid-cols-3">
              <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-7 col-span-2 p-4 lg:p-10">
                <div className="group flex items-center sm:items-start gap-4 group transition-all duration-500">
                  <div className=" p-2 sm:p-0 w-12 sm:w-[70px] h-12 sm:h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                    <Image
                      width={45}
                      height={45}
                      className="w-6 sm:w-auto h-auto sm:h-auto"
                      src="/images/mobile_icon.svg"
                      alt="mobile icon"
                    />
                  </div>
                  <div className="w-[calc(100%-48px)] lg:w-[calc(100%-70px)]">
                    <Link
                      className=" text-white  text-sm sm:text-base hover:text-white hover:bg-transparent p-0"
                      href="/services/mobile-app-development"
                    >
                      <h3 className="flex gap-2 items-center font-semibold text-base sm:text-lg lg:text-xl">
                        Mobile App Development{" "}
                        <Image
                          width={24}
                          height={24}
                          className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto h-auto sm:h-auto"
                          src="/images/right_icon.png"
                          alt="right icon"
                        />
                      </h3>
                      <p className="hidden sm:inline-block text-sm lg:text-sm text-[#C1C1C1] mt-0.5">
                        Create high-performance mobile apps for iOS and Android.
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                  <div className="  p-2 sm:p-0 w-12 sm:w-[70px] h-12 sm:h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                    <Image
                      width={48}
                      height={48}
                      className="w-6 sm:w-auto h-auto sm:h-auto"
                      src="/images/webdev.svg"
                      alt="webdev image"
                    />
                  </div>
                  <div className="w-[calc(100%-48px)] lg:w-[calc(100%-70px)]">
                    <Link
                      className=" text-white hover:text-white hover:bg-transparent p-0"
                      href="/services/mobile-app-development"
                      title=""
                    >
                      <h3 className="flex gap-2 items-center font-semibold text-base sm:text-lg lg:text-xl">
                        Web Development{" "}
                        <Image
                          width={24}
                          height={24}
                          className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto h-auto sm:h-auto"
                          src="/images/right_icon.png"
                          alt="right icon"
                        />
                      </h3>
                      <p className="hidden sm:inline-block text-sm lg:text-sm text-[#C1C1C1] mt-0.5">
                        Develop fast, responsive, and optimized websites.
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                  <div className="  p-2 sm:p-0 w-12 sm:w-[70px] h-12 sm:h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                    <Image
                      width={48}
                      height={48}
                      className="w-6 h-auto sm:w-auto sm:h-auto"
                      src="/images/uiux.svg"
                      alt="uiux icon"
                    />
                  </div>
                  <div className="w-[calc(100%-48px)] lg:w-[calc(100%-70px)]">
                    <Link
                      className=" text-white hover:text-white hover:bg-transparent p-0"
                      href="/services/uiux-web-design"
                      title=""
                    >
                      <h3 className="flex gap-2 items-center font-semibold text-base sm:text-lg lg:text-xl">
                        UI/UX Design{" "}
                        <Image
                          width={24}
                          height={24}
                          className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto h-auto sm:h-auto"
                          src="/images/right_icon.png"
                          alt="right icon"
                        />
                      </h3>
                      <p className="hidden sm:inline-block text-sm lg:text-sm text-[#C1C1C1] mt-0.5">
                        Craft intuitive and engaging user experiences.
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                  <div className="  p-2 sm:p-0 w-12 sm:w-[70px] h-12 sm:h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                    <Image
                      width={48}
                      height={48}
                      className="w-6 sm:w-auto h-auto sm:h-auto"
                      src="/images/machinel.svg"
                      alt="machinel image"
                    />
                  </div>
                  <div className="w-[calc(100%-48px)] lg:w-[calc(100%-70px)]">
                    <Link
                      className=" text-white hover:text-white hover:bg-transparent p-0"
                      href="/services/machine-learning-ai"
                      title=""
                    >
                      <h3 className="flex gap-2 items-center font-semibold text-base sm:text-lg lg:text-xl">
                        Machine Learning and AI{" "}
                        <Image
                        width={24}
                        height={24}
                          className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto h-auto sm:h-auto"
                          src="/images/right_icon.png"
                          alt="right icon"
                        />
                      </h3>
                      <p className="hidden sm:inline-block text-sm lg:text-sm text-[#C1C1C1] mt-0.5">
                        Leverage AI for automation, insights, and smarter
                        solutions.
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                  <div className="  p-2 sm:p-0 w-12 sm:w-[70px] h-12 sm:h-[70px] flex items-center justify-center bg-[#F15722] shadow-[0_4px_20px_0_#170F4914] rounded-xl">
                    <Image
                    widht={48}
                    height={48}
                      className="w-6 h-auto sm:w-auto sm:h-auto"
                      src="/images/ecommerce.svg"
                      alt="ecomerce image"
                    />
                  </div>
                  <div className="w-[calc(100%-48px)] lg:w-[calc(100%-70px)]">
                    <Link
                      className=" text-white hover:text-white hover:bg-transparent p-0"
                      href="/services/e-commerce"
                      title=""
                    >
                      <h3 className="flex gap-2 items-center font-semibold text-base sm:text-lg lg:text-xl">
                        E-Commerce{" "}
                        <Image
                        width={24}
                        height={24}
                          className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto h-auto sm:h-auto"
                          src="/images/right_icon.png"
                          alt="right icon"
                        />
                      </h3>
                      <p className="hidden sm:inline-block text-sm lg:text-sm text-[#C1C1C1] mt-0.5">
                        Build secure online stores with easy payments.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <li className="hidden xl:inline row-span-1 h-full backdrop-blur-2xl  bg-[#FFFFFF1A]   text-center py-12">
                <div>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-center items-center rounded-md  no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div>
                      <Image
                      width={250}
                      height={150}
                        className="w-[250px] h-auto"
                        src="/images/Logo.png"
                        alt="logo"
                      />
                    </div>
                    <p className="mt-7 text-base  text-white font-[300] sm:px-20">
                      Scalable and feature-rich ecommerce platforms designed to
                      enhance business growth, ensure robust security,
                      streamline operations, and provide a seamless shopping
                      experience for users. 
                    </p>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDropdown;
