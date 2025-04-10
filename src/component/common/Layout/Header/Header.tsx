"use client";

import React, { useEffect, useState } from "react";
import NavigationMenuDemo from "./Navigationmenu/Navigationmenu";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../../public/images/Logo.png";
import { usePathname } from "next/navigation";

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
                  {/* <img
                    className="w-[110px] sm:w-[128px]"
                    src="/images/Logo.png"
                    alt=""
                  /> */}
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

          <div className="hidden lg:flex xl:gap-x-5">
            <NavigationMenuDemo />
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="open-btn-mobile -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto"
                  >
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
    </>
  );
};

export default Header;
