/* eslint-disable react/no-unescaped-entities */
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
          <div className=" w-full mt-[60px] sm:mt-0 text-center relative py-10 sm:py-16  lg:py-24">
            <div className="w-full">
              <div className="w-full">
                <h1 className="font-bold relative z-10 text-3xl sm:text-3xl lg:text-[38px] text-shadow-2xl  text-gradiant-custom">
                  Terms of Service
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 sm:py-14 lg:py-20">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Thank you for choosing to use the services offered by our website
            </h2>
            <p className="text-sm sm:text-base">
              www.zygobit.com/, including any linked domains integrated within
              it (collectively referred to as the "Site" or "Website"). These
              terms and conditions govern your access to and use of the Site and
              the services we provide (collectively, "Services"). Please take
              the time to read these terms carefully before availing yourself of
              any of the Services. The terms "we," "us," or "our" refer to the
              Site.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Use of Services
            </h2>
            <p className="text-sm sm:text-base">
              By using any Services provided on our Site, you agree to abide by
              these terms. Your agreement to these terms applies both personally
              and on behalf of any organization or corporate entity that employs
              you or that you represent. The term "you" will refer to both you
              and your employer, jointly and severally. If you are using or
              subscribing to the Services on behalf of an organization or
              corporate entity, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside pl-4 mt-2">
              <li>
                (A) you have reached the age of majority in your jurisdiction;
              </li>
              <li>
                (B) you possess the necessary authority, capacity, and power to
                accept these terms on behalf of the entity;
              </li>
              <li>
                (C) the entity agrees to be irrevocably bound by these terms and
                comply fully with them.
              </li>
            </ul>
            <p className="text-sm sm:text-base mt-4">
              Our Services may evolve as we refine features and functionality.
              We reserve the right to terminate, suspend, or modify the Services
              without prior notice, either generally or specifically to you. We
              also reserve the right to delete content or data from the Services
              at our discretion. All content on the Site, including text,
              images, and information, is protected by copyright. No part of
              this content may be reproduced without express written permission
              from us, except as explicitly allowed.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Other Rights and Limitations
            </h2>
            <p className="text-sm sm:text-base">
              You must not, and may not permit others to, reverse engineer,
              decompile, disassemble, update, modify, reproduce, copy,
              distribute, or otherwise disseminate the software underlying the
              Services or extract its source code. You may not use the Services
              or Software for any commercial purpose beyond your internal
              business needs. Without our express written permission, you are
              prohibited from:
            </p>
            <ul className="list-disc list-inside pl-4 mt-2">
              <li>
                (i) storing, copying, modifying, or distributing any content
                from our Services ("Service Content") or compiling it into a
                database;
              </li>
              <li>
                (ii) using automated tools such as robots or spiders to interact
                with the Services;
              </li>
              <li>(iii) sublicensing access to our Services;</li>
              <li>
                (iv) overburdening or compromising the performance of our
                Services;
              </li>
              <li>
                (vii) altering or obscuring copyright, trademark, or proprietary
                notices.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Restricted Areas of the Services
            </h2>
            <p className="text-sm sm:text-base">
              Certain parts of our Services, such as account management
              features, may be restricted to registered users or authorized
              persons ("Password-Protected Areas"). If you access these areas,
              you are responsible for maintaining the confidentiality of your
              password and notifying us if it is lost, stolen, or compromised.
              You are solely accountable for all activities under your account
              and must inform us immediately of any unauthorized account use or
              security breach. Use of third-party services that interfere with
              our platform may result in account suspension.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Confidential Information
            </h2>
            <p className="text-sm sm:text-base">
              You must not disclose or use any Confidential Information obtained
              from us except for purposes directly related to using the
              Services. "Confidential Information" includes non-public data
              about our business, services, processes, and plans. You must
              ensure that your personnel who access such information are bound
              by confidentiality obligations. These restrictions do not apply to
              information that was public at the time of disclosure, became
              public without breach of these terms, or is legally required to be
              disclosed.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Proprietary Rights
            </h2>
            <p className="text-sm sm:text-base">
              The Services and Software are proprietary to us and our licensors,
              protected by intellectual property laws. You agree that all
              rights, title, and interest in and to the Services and Software
              remain with us. Modifying, distributing, or reproducing these
              materials without our authorization is prohibited. If you request
              a white-label application, you grant us the right to use your
              trademarks and branding for the application.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              License to Use Our Services
            </h2>

            <p className="text-sm sm:text-base">
              We grant you a limited, non-exclusive, non-transferable license to
              use our Services for internal purposes. This license is subject to
              all terms and conditions stated herein. We and our licensors
              retain ownership of all intellectual property rights related to
              our Services. You must not: (i) reproduce or modify our Services;
              (ii) sublicense access to them; or (iii) bypass any security
              measures. Service fees are non-refundable, and you are responsible
              for providing accurate payment information. You are also
              responsible for any applicable taxes and charges associated with
              your use of the Services.
            </p>
          </div>
          <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
            Content and Liability Disclaimer
          </h2>
          <p className="text-sm sm:text-base">
            We are not responsible for errors or omissions on our Site and may
            make changes without notice. All information is provided "as is"
            without warranties of any kind, including implied warranties of
            merchantability or fitness for a particular purpose. Some
            jurisdictions do not allow certain warranty exclusions, so these
            exclusions may not apply to you. We are not liable for any damages
            arising from your use of our Site or Services.
          </p>
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Access to Our Services
            </h2>
            <p className="text-sm sm:text-base">
              You are responsible for obtaining the necessary equipment to
              access our Services and for any third-party fees incurred. We may
              modify or discontinue any part of the Services at any time without
              liability. Additionally, we reserve the right to remove or refuse
              content submissions and to suspend or terminate access to the
              Services for any reason.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Pricing Policy
            </h2>
            <p className="text-sm sm:text-base">
              Invoices are issued in USD or INR based on actual usage and sent
              to your registered email on the first of each month. Payments are
              auto-debited via credit or debit card. Other payment methods, such
              as PayTM or PayPal, may be used subject to applicable taxes and
              conversion rates. All fees are non-refundable. If payment is
              overdue by 30 days (or 10 days for auto-debited accounts), we may
              suspend Services until payment is made in full. You are
              responsible for all applicable taxes.
            </p>
          </div>
          Once a prepaid plan is activated, the subscription cost is
          non-refundable and deducted on the first day of each month.
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Products Information
            </h2>
            <p className="text-sm sm:text-base">
              References to products on the Site pertain to those available
              through us. The terms governing the use of our products and
              services are outlined in the respective agreements. Without an
              agreement, products and services are provided "as is," and you
              assume all risks associated with their use.{" "}
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-base sm:text-lg lg:text-2xl font-bold mb-4 border-b border-white w-fit ">
              Privacy and Data Protection:
            </h2>
            <p className="text-sm sm:text-base">
              Zygobit is committed to safeguarding your personal information and
              that of your customers. By using our Services, you agree to our
              collection and use of data as described in our Privacy Policy. If
              you operate within the EEA, your data usage complies with the EU
              General Data Protection Regulation as outlined in our Data
              Processing Addendum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
