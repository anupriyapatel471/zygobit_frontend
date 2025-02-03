"use client"

import ContactForm from "@/component/ui/ContactForm/ContactForm";
import React, { useEffect } from "react";
import Aos from "aos";
import { TracingBeams } from "@/component/ui/TracingBeam/TracingBeam";

const page = () => {
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

export default page;
