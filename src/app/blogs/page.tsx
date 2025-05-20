import EcommerceTabbing from "@/component/blog/EcommerceTabbing/EcommerceTabbing";
import ContactForm from "@/component/common/ContactForm/ContactForm";
import AOSInitializer from "@/component/common/AOSInitializer";
import BlogSection from "@/component/blog/BlogSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Zygobit Website Blog Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Blog",
    description: "Zygobit Website Blog Page",
    images: ["/images/Logo.jpg"],

    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Blog",
    description: "Zygobit Website Blog Page",
    images: ["/images/Logo.jpg"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};

export const revalidate = 60;

const BlogPage = () => {
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
};

export default BlogPage;
