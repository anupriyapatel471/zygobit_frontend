import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../../../public/images/Logo.png";
const Footer = () => {
  const productLinks = [
    { name: "Changelog", url: "#" },
    { name: "Documentation", url: "#" },
  ];

  // const companyLinks = [
  //   { name: "About", url: "/about-us" },
  //   { name: "Careers", url: "#" },
  //   { name: "Blog", url: "/blogs" },
  // ];

  // const contactLinks = [
  //   { name: "Github", url: "#" },
  //   { name: "Discord", url: "#" },
  //   { name: "Twitter", url: "#" },
  // ];

  const footerLinks = [
    { title: "Product", links: productLinks },
    // { title: "Company", links: companyLinks },
  ];

  return (
    <footer className="w-full inline-block">
      <div className="w-full container remove-bg">
        <div className="w-full flex gap-y-7 sm:gap-5 flex-wrap lg:flex-nowrap mt-10 lg:mt-20 mb-10 sm:mb-14 lg:mb-24 justify-between">
          <div className="w-full lg:w-1/4 mb-0 sm:mb-6 lg:mb-0">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={160}
                height={40}
                className="w-[110px] sm:w-[160px]"
              />
            </Link>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="w-full sm:w-1/4">
              <h6 className="font-semibold text-sm mb-4">{section.title}</h6>
              <ul className="grid grid-cols-1 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="text-sm text-secondaryText hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-full sm:w-1/4 lg:pl-20">
            <h6 className="font-semibold text-sm mb-4">Company</h6>
            <ul className="grid grid-cols-1 space-y-4">
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-secondaryText hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-secondaryText hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-sm text-secondaryText hover:text-white"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 lg:pl-[200px]">
            <h6 className="font-semibold text-sm mb-4">Contact</h6>
            <ul className="grid grid-cols-1 space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-sm text-secondaryText hover:text-white"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-secondaryText hover:text-white"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-secondaryText hover:text-white"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full pt-4 pb-8 flex flex-wrap gap-y-5 sm:flex-nowrap border-t border-[#2D2E34] sm:border-none justify-between items-center">
          <p className="text-white w-full sm:w-auto text-secondaryText text-xs">
            © 2025 Zygobit All rights reserved.
          </p>
          <ul className="w-full sm:w-auto flex gap-5 items-center">
            <li>
              <Link
                href="#"
                className="text-secondaryText hover:text-white text-xs"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-secondaryText hover:text-white text-xs"
              >
                Terms of service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
