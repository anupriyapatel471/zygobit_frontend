"use client";

import AOSInitializer from "@/component/common/AOSInitializer";
import BlogSection from "@/component/blog/BlogSection";
import EcommerceTabbing from "@/component/blog/EcommerceTabbing/EcommerceTabbing";
import ContactForm from "@/component/common/ContactForm/ContactForm";

export default function BlogClientPage() {
  return (
    <>
      <AOSInitializer />
      <BlogSection />
      <section className="w-full mt-9 mb-16">
        <div className="w-full">
          <EcommerceTabbing />
        </div>
      </section>
      <ContactForm />
    </>
  );
}
