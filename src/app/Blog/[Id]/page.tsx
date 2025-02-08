"use client"

import React, { useEffect } from "react";
import Aos from "aos";
import { TracingBeams } from "@/component/ui/TracingBeam/TracingBeam";
import ContactForm from "@/component/common/ContactForm/ContactForm";

const Page = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
    <TracingBeams/>

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default Page;
