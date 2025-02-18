import EcommerceTabbing from "@/component/blog/EcommerceTabbing/EcommerceTabbing";
import ContactForm from "@/component/common/ContactForm/ContactForm";
import AOSInitializer from "@/component/common/AOSInitializer";
import BlogSection from "@/component/blog/BlogSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Zygibit Website Blog Page",
};

const BlogPage = () => {
  return (
    <>
      <AOSInitializer />
      <BlogSection />
      <section className="w-full mt-9 mb-16">
        <div className="w-full px-4 lg:px-0">
          <EcommerceTabbing />
        </div>
      </section>
      <ContactForm />
    </>
  );
};

export default BlogPage;
