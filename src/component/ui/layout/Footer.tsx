import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full  inline-block px-4 lg:px-24">
        <div className="w-full ">
          <div className="w-full flex gap-y-7 sm:gap-5 flex-wrap lg:flex-nowrap mt-10 lg:mt-20 mb-10 sm:mb-14 lg:mb-24 justify-between">
            <div className="w-full lg:w-1/4 mb-0 sm:mb-6 lg:mb-0">
              <a href="">
                <img
                  className="w-[110px] sm:w-[160px]"
                  src="/images/Logo.png"
                  alt=""
                />
              </a>
            </div>
            <div className="w-full sm:w-1/4">
              <h6 className="font-semibold text-sm mb-4">Product</h6>
              <ul className="grid grid-cols-1 space-y-4">
                <li><a href="" className="text-sm text-secondaryText hover:text-white">Changelog</a></li>
                <li><a href="" className="text-sm text-secondaryText hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/4">
              <h6 className="font-semibold text-sm mb-4">Company</h6>
              <ul className="grid grid-cols-1 space-y-4">
                <li><a href="" className="text-sm text-secondaryText hover:text-white">About</a></li>
                <li><a href="" className="text-sm text-secondaryText hover:text-white">Careers</a></li>
                <li><a href="" className="text-sm text-secondaryText hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/4">
              <h6 className="font-semibold text-sm mb-4">Contact</h6>
              <ul className="grid grid-cols-1 space-y-4">
                <li><a href="" className="text-sm text-secondaryText hover:text-white">Github</a></li>
                <li><a href="" className="text-sm text-secondaryText hover:text-white">Discord</a></li>
                <li><a href="" className="text-sm text-secondaryText hover:text-white">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-4 pb-8 flex flex-wrap gap-y-5 sm:flex-nowrap  border-t border-[#2D2E34] sm:border-none  justify-between items-center">
            <p className="text-white w-full sm:w-auto text-secondaryText text-xs">
              © 2025 Zygobit All rights reserved.
            </p>
            <ul className=" w-full sm:w-auto flex gap-5 items-center">
              <li>
                <a href="" className="text-secondaryText hover:text-white text-xs">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="text-secondaryText hover:text-white text-xs">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
