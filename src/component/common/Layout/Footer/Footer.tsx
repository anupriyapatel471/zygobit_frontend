import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../../../public/images/footer_logo.png";
const Footer = () => {
  const productLinks = [
    { name: "Facebook", url: "https://www.facebook.com/zygobit" },
    { name: "Instagram", url: "https://www.instagram.com/zygobit" },
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
    { title: "Social Media", links: productLinks },
    // { title: "Company", links: companyLinks },
  ];

  return (
    <footer className="w-full inline-block bg-white">
      <div className="w-full container remove-bg">
        <div className="w-full flex  gap-y-7 sm:gap-5 flex-wrap lg:flex-nowrap mt-10 lg:mt-20 mb-8 sm:mb-10 lg:mb-12 justify-between">
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
            <p className="font-light text-sm text-[#6B6B6B] my-3 sm:my-5">
              At Zygobit, we don’t just keep up with innovation — we drive it.
              Tech is in our DNA, and transformation is our constant.
            </p>
            <ul className="flex items-center gap-5">
              <li><a href=""><Image width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" src="/images/instagram.svg" alt="icon" /></a></li>
              <li><a href=""><Image width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" src="/images/facebook.svg" alt="icon" /></a></li>
              <li><a href=""><Image width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" src="/images/x.svg" alt="icon" /></a></li>
              <li><a href=""><Image width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6" src="/images/linkedin.svg" alt="icon" /></a></li>
            </ul>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="w-full sm:w-1/4 lg:pl-[90px]">
              <h6 className="font-semibold text-sm mb-4 text-black">{section.title}</h6>
              <ul className="grid grid-cols-1 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      target="_blank"
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
          <div className="w-full sm:w-1/4 lg:pl-14">
            <h6 className="font-semibold text-sm mb-4 text-black">Quick Links</h6>
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
                  href="/portfolio"
                  className="text-sm text-secondaryText hover:text-white"
                >
                  Portfolio
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
          <div className="w-full sm:w-1/4 lg:pl-8">
            <h6 className="font-semibold text-sm mb-4 text-black">Contact Us</h6>
            <ul className="grid grid-cols-1 space-y-4">
              <li>
                <Link
                  href="tel:+18507923399"
                  className="text-sm text-secondaryText hover:text-white"
                >
                  +1(850)792-3399
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@zygobit.com"
                  className="text-sm text-secondaryText hover:text-white"
                >
                  info@zygobit.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.co.in/maps/place/Sector+82,+JLPL+Industrial+Area,+Punjab/@30.6522737,76.7239666,15z/data=!3m1!4b1!4m6!3m5!1s0x390febe1fc6b2bef:0x555c2d1b4e524afa!8m2!3d30.6503857!4d76.736538!16s%2Fg%2F12hk5_92n?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                  target="_blank"
                  className="text-sm text-secondaryText hover:text-white"
                >
                  Plot No. C-163, Sector 82, JLPL Industrial Area, Sahibzada
                  Ajit Singh Nagar, Punjab 140308
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full pt-4 pb-8 flex flex-wrap gap-y-5 sm:flex-nowrap border-t border-[#09090B1A] justify-between items-center">
          <p className=" w-full sm:w-auto text-secondaryText text-xs">
            © 2025 Zygobit All rights reserved.
          </p>
          <ul className="w-full sm:w-auto flex gap-5 items-center">
            <li>
              <Link
                href="https://zygobit.com/privacy-policy/"
                className="text-secondaryText hover:text-white text-xs"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://zygobit.com/terms-of-service/"
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
