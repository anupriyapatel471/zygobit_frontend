import React from "react";
import Faq from "./Faq/Faq";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqProps {
  faqData: FAQ[];
}
const FaqSection = ({ faqData }: FaqProps) => {
  return (
    <>
      <section className="w-full   pb-12 sm:pb-14 lg:pb-20">
        <div className="container remove-bg">
          <div className="w-full pt-10 pb-8 sm:pb-14 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradiant-custom-second">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-full">
            <Faq faqData={faqData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
