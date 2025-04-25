import { BannerGridBg } from "@/component/common/HeroBanner/BannerGridBg/BannerGridBg";
import React from "react";

const page = () => {
  return (
    <>
      {/* Hero banner */}
      <section className="w-full h-[300px] sm:h-auto relative pt-16 sm:pt-32">
        <div className="container remove-bg">
          <div className="w-full h-full absolute z-10 top-0 left-0 ">
            <BannerGridBg />
          </div>
          <div className=" w-full mt-[60px] sm:mt-0 text-center relative py-10 sm:py-16  lg:pt-24 lg:pb-[130px]">
            <div className="w-full">
              <div className="w-full">
                <h1 className="font-bold relative z-10 text-3xl sm:text-3xl lg:text-[38px] text-shadow-2xl  text-gradiant-custom">
                  Privacy Policy
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  py-12 sm:py-14 lg:py-20">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">Introduction</h2>
            <p className="text-sm sm:text-base">
              At Zygobit, safeguarding your privacy is a top priority. This
              Privacy Policy describes the types of information we collect, how
              we use it, and the steps we take to protect your data. By using
              our site, you agree to the terms outlined here and the applicable
              laws of India, including the Information Technology Act, 2000, and
              related regulations.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Information We Collect
            </h2>
            <p>
              When you interact with our website, you may be asked to provide
              certain details such as your name, email address, phone number, or
              other information to enhance your user experience.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              When Do We Collect Information?
            </h2>
            <ul className="list-disc list-inside">
              <li>When you sign up for our newsletter</li>
              <li>When you fill out forms on our site</li>
              <li>When you share information during site interactions</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside">
              <li>
                To customize your experience and provide content or product
                recommendations tailored to your interests.
              </li>
              <li>
                To manage contests, surveys, promotions, or other site features.
              </li>
              <li>
                To communicate with you about orders, services, or promotional
                updates.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Data Security Measures
            </h2>
            <p>
              We are committed to protecting your personal information and
              adhere to the Information Technology (Reasonable Security
              Practices and Procedures and Sensitive Personal Data or
              Information) Rules, 2011. Our measures include:
            </p>
            <ul className="list-disc list-inside">
              <li>
                Using collected data only for lawful and legitimate purposes.
              </li>
              <li>
                Implementing robust security practices to safeguard your
                personal information.
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or otherwise share your personally
              identifiable information with external parties, except when
              required by Indian law or necessary to fulfill legal obligations.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Links to External Sites
            </h2>
            <p>
              Our website does not include or promote third-party products or
              services.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">Use of Trademarks</h2>
            <p>
              References to trademarked terms on this site are for descriptive
              purposes only and remain the property of their respective owners.
              All code and design elements are the original work of our in-house
              team and are not derived from external sources. Zygobit is not
              affiliated with any other brands’ websites.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">Google Services</h2>
            <p>
              We adhere to Google’s Advertising Principles to ensure a positive
              experience for users. With the assistance of third-party vendors
              like Google, we utilize tools such as Google Analytics to analyze
              user interactions with our website.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">Opt-Out Options</h2>
            <ul className="list-disc list-inside">
              <li>
                Adjust your Google Ad preferences via the Google Ad Settings
                page.
              </li>
              <li>Opt-out through the Network Advertising Initiative page.</li>
              <li>
                Use the Google Analytics Opt-Out Browser Add-On for additional
                privacy controls.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">Contact Us</h2>
            <p>
              If you have questions or need further clarification regarding this
              Privacy Policy, feel free to reach out to us through our official
              communication channels. We are here to assist you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
