/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import NavigationMenuDemo from "./Navigationmenu/Navigationmenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../../public/images/Logo.png";
import { usePathname } from "next/navigation";
// import { ChatBotBtn } from "@/component/new/ChatBot";
import { ContactnewForm } from "@/component/new/ContactNewForm";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#09090B] backdrop-blur-xl bg-opacity-20 mx-0 z-[9999]">
        <nav
          className="mx-auto max-w-[1248px] px-4   py-4  flex  items-center justify-between"
          aria-label="Global"
        >
          <div className="w-auto flex gap-[100px] items-center">
            <div className="flex items-center gap-[60px]">
              <div className="flex lg:flex-1">
                <Link
                  href="/"
                  className="-m-1.5 p-1.5 w-auto h-auto text-white uppercase font-semibold text-lg"
                >
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={128}
                    height={40}
                    className="w-[110px] sm:w-[128px]"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="hidden lg:flex xl:gap-x-5">
              <NavigationMenuDemo />
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="open-btn-mobile -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                aria-label="Open menu"
              >
                <svg
                  className="h-10 w-10 rounded-[5px] p-1 "
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    className="text-orange-600"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex xl:justify-end gap-4">
              {/* <button className="btn-ghost h-9 text-sm">Sign in</button> */}
              <Link
                href="/contact"
                className="btn-primary relative overflow-hidden hover:bg-[#ea580cd1] h-9 text-sm bg-themebg text-white"
              >
                Get in Touch
                <span className="shine"></span>
              </Link>
            </div>
          </div>
        </nav>
        <div
          x-show="open"
          className={`${isMenuOpen ? "active" : "hidden"} mobile-view h-screen`}
          role="dialog"
          aria-modal="true"
        >
          <div className="side-content overflow-hidden w-full fixed inset-y-0 left-0 z-30  overflow-y-auto bg-transparent backdrop-blur-2xl p-4 sm:px-4 sm:py-4  sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5 w-auto h-auto text-white uppercase font-semibold text-lg"
              >
                <Image
                  src={Logo}
                  alt="Logo"
                  width={128}
                  height={40}
                  className="w-[110px] sm:w-[128px]"
                />
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="close-btn-mobile -mr-[2px] bg-white -m-2.5 rounded-md p-1.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6 "
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    className="text-black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 pb-0 grid grid-cols-1">
                  <NavigationMenuDemo />
                </div>
                <div className="py-5 border-none grid grid-cols-1 gap-y-4 md:max-w-72">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <button className="w-full btn-primary relative overflow-hidden hover:bg-[#ea580cd1] h-9 text-sm bg-themebg text-white">
                      Get in Touch
                      <span className="shine"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id="nav-wrapper"
        className="w-full service-dropdown-active fixed top-20 left-0 bg-white  z-[999] "
      >
        <div className="w-full grid">
          <div className="w-full   relative ">
            <ul className=" rounded-lg grid grid-cols-1 gap-3 items-center w-full sm:w-screen mx-auto lg:grid-cols-3">
              <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-7 col-span-2 p-4 lg:p-10">
                <div className="group flex items-center sm:items-start gap-4 group transition-all duration-500">
                  <div className=" mt-1.5 p-2 sm:p-0 w-12 sm:w-10 h-12 sm:h-10 flex items-center justify-center bg-[#FFE8E0] shadow-[0_4px_20px_0_#170F4914] rounded-lg">
                    <Image
                      width={24}
                      height={24}
                      className="w-6 sm:w-auto"
                      src="/images/mobile_icon.svg"
                      alt="	Mobile App Icon"
                    />
                  </div>
                  <div className="w-[calc(100%-48px)] lg:w-[calc(100%-70px)]">
                    <Link
                      href="/services/mobile-app-development"
                      className=" text-neutral-950 group text-sm sm:text-base hover:text-neutral-950 inline-block w-full hover:bg-transparent p-0"
                    >
                      <h3 className="flex gap-2 items-center group-hover:text-themetext font-semibold text-base sm:text-lg lg:text-xl">
                        Mobile App Development{" "}
                        <Image
                          width={12}
                          height={12}
                          className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto"
                          src="/images/right_icon.png"
                          alt="Arrow Right Icon"
                        />
                      </h3>
                      <p className="hidden sm:inline-block text-sm lg:text-sm text-[#494949] mt-0.5">
                        Create high-performance mobile apps for iOS and Android.
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                  <div className="  mt-1.5 p-2 sm:p-0 w-12 sm:w-10 h-12 sm:h-10 flex items-center justify-center bg-[#FFE8E0] shadow-[0_4px_20px_0_#170F4914] rounded-lg">
                    <Image
                      width={24}
                      height={24}
                      className="w-6 sm:w-auto"
                      src="/images/webdev.svg"
                      alt="Web Development Icon"
                    />
                  </div>
                  <div className="w-[calc(100%-48px)] lg:w-[calc(100%-70px)]">
                    <Link
                      href="/services/web-app-development"
                      className=" text-neutral-950 group hover:text-neutral-950 inline-block w-full hover:bg-transparent p-0"
                      title=""
                    >
                      <h3 className="flex gap-2 items-center group-hover:text-themetext font-semibold text-base sm:text-lg lg:text-xl">
                        Web Development{" "}
                        <Image
                          width={12}
                          height={12}
                          className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto"
                          src="/images/right_icon.png"
                          alt="Arrow Right Icon"
                        />
                      </h3>
                      <p className="hidden sm:inline-block text-sm lg:text-sm text-[#494949] mt-0.5">
                        Develop fast, responsive, and optimized websites.
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                  <div className="  mt-1.5 p-2 sm:p-0 w-12 sm:w-10 h-12 sm:h-10 flex items-center justify-center bg-[#FFE8E0] shadow-[0_4px_20px_0_#170F4914] rounded-lg">
                    <Image
                      width={24}
                      height={24}
                      className="w-6 sm:w-auto"
                      src="/images/uiux.svg"
                      alt="UI/UX Design Icon"
                    />
                  </div>
                  <div className="w-[calc(100%-48px)] lg:w-[calc(100%-70px)]">
                    <Link
                      href="/services/uiux-web-design"
                      className=" text-neutral-950 group  hover:text-neutral-950 inline-block w-full hover:bg-transparent p-0"
                    >
                      <h3 className="flex gap-2 items-center group-hover:text-themetext font-semibold text-base sm:text-lg lg:text-xl">
                        UI/UX Design{" "}
                        <Image
                          width={12}
                          height={12}
                          className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto"
                          src="/images/right_icon.png"
                          alt="Arrow Right Icon"
                        />
                      </h3>
                      <p className="hidden sm:inline-block text-sm lg:text-sm text-[#494949] mt-0.5">
                        Craft intuitive and engaging user experiences.
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                  <div className="  mt-1.5 p-2 sm:p-0 w-12 sm:w-10 h-12 sm:h-10 flex items-center justify-center bg-[#FFE8E0] shadow-[0_4px_20px_0_#170F4914] rounded-lg">
                    <Image
                      width={24}
                      height={24}
                      className="w-6 sm:w-auto"
                      src="/images/machinel.svg"
                      alt="Machine Learning and AI Icon"
                    />
                  </div>
                  <div className="w-[calc(100%-48px)] lg:w-[calc(100%-70px)]">
                    <Link
                      href="/services/machine-learning-ai"
                      className=" text-neutral-950 group hover:text-neutral-950 inline-block w-full hover:bg-transparent p-0"
                    >
                      <h3 className="flex gap-2 items-center group-hover:text-themetext font-semibold text-base sm:text-lg lg:text-xl">
                        Machine Learning and AI{" "}
                        <Image
                          width={12}
                          height={12}
                          className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto"
                          src="/images/right_icon.png"
                          alt="Arrow Right Icon"
                        />
                      </h3>
                      <p className="hidden sm:inline-block text-sm lg:text-sm text-[#494949] mt-0.5">
                        Leverage AI for automation, insights, and smarter
                        solutions.
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                  <div className="  mt-1.5 p-2 sm:p-0 w-12 sm:w-10 h-12 sm:h-10 flex items-center justify-center bg-[#FFE8E0] shadow-[0_4px_20px_0_#170F4914] rounded-lg">
                    <Image
                      width={24}
                      height={24}
                      className="w-6 sm:w-auto"
                      src="/images/ecommerce.svg"
                      alt="E-Commerce Icon"
                    />
                  </div>
                  <div className="w-[calc(100%-48px)] lg:w-[calc(100%-70px)]">
                    <Link
                      href="/services/e-commerce"
                      className=" text-neutral-950 group hover:text-neutral-950 inline-block w-full hover:bg-transparent p-0"
                    >
                      <h3 className="flex gap-2 items-center group-hover:text-themetext font-semibold text-base sm:text-lg lg:text-xl">
                        E-Commerce{" "}
                        <Image
                          width={12}
                          height={12}
                          className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto"
                          src="/images/right_icon.png"
                          alt="Arrow Right Icon"
                        />
                      </h3>
                      <p className="hidden sm:inline-block text-sm lg:text-sm text-[#494949] mt-0.5">
                        Build secure online stores with easy payments.
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center sm:items-start gap-4 group transition-all duration-500">
                  <div className="  mt-1.5 p-2 sm:p-0 w-12 sm:w-10 h-12 sm:h-10 flex items-center justify-center bg-[#FFE8E0] shadow-[0_4px_20px_0_#170F4914] rounded-lg">
                    <Image
                      width={24}
                      height={24}
                      className="w-6 sm:w-auto"
                      src="/images/blockchain.svg"
                      alt="Blockchain Icon"
                    />
                  </div>
                  <div className="w-[calc(100%-48px)] lg:w-[calc(100%-70px)]">
                    <Link
                      href="/services/blockchain"
                      className=" text-neutral-950 group hover:text-neutral-950 inline-block w-full hover:bg-transparent p-0"
                    >
                      <h3 className="flex gap-2 items-center group-hover:text-themetext font-semibold text-base sm:text-lg lg:text-xl">
                        Blockchain{" "}
                        <Image
                          width={12}
                          height={12}
                          className="w-3 group-hover:ml-5 transition-all duration-500 sm:w-auto"
                          src="/images/right_icon.png"
                          alt="Arrow Right Icon"
                        />
                      </h3>
                      <p className="hidden sm:inline-block text-sm lg:text-sm text-[#494949] mt-0.5">
                        Leverage AI for automation, insights, and smarter
                        solutions.
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
                        src="/images/mega_logo.png"
                        alt="meta logo"
                      />
                    </div>
                    <p className="mt-7 text-base  text-[#494949] font-[300] sm:px-20">
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

      <div>
        <div className="scale-75  group sm:scale-100 fixed bottom-32 left-4 sm:left-8 z-50">
          <ContactnewForm />
          <div className="fixed bottom-0 left-12 hidden group-hover:flex items-center">
            <div className="w-[17px] relative left-1">
              <Image
                width={17}
                height={14}
                src="/images/triangle.svg"
                alt="icon"
              />
            </div>
            <div className=" bg-white whitespace-nowrap rounded-sm py-2.5 px-3.5 text-themetext font-semibold text-sm">
              Let’s Connect
            </div>
          </div>
        </div>

        <div className="group relative">
          {/* whats app */}
          <Link
            href="https://wa.me/18507923399"
            target="_blank"
            rel="noopener noreferrer"
            className="scale-75 sm:scale-100 btn-whatsapp-pulse relative z-50"
          >
            <Image
              width={24}
              height={24}
              src="/images/whatsapp.svg"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </Link>
          <div className="fixed bottom-[34px] left-20 hidden group-hover:flex items-center z-50">
            <div className="relative left-1">
              <Image
                width={17}
                height={14}
                src="/images/triangle.svg"
                alt="icon"
              />
            </div>
            <div className=" bg-white rounded-sm py-2.5 px-3.5 text-themetext font-semibold text-sm">
              Chat with us
            </div>
          </div>
        </div>

        {/* <ChatBotBtn /> */}
      </div>
    </>
  );
};

export default Header;
