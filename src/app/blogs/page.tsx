import EcommerceTabbing from "@/component/blog/EcommerceTabbing/EcommerceTabbing";
import ContactForm from "@/component/common/ContactForm/ContactForm";
import AOSInitializer from "@/component/common/AOSInitializer";
import BlogSection from "@/component/blog/BlogSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Zygibit Website Blog Page",
  keywords:
    "Zygibit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Blog",
    description: "Zygibit Website Blog Page",
    images: [
      "https://developers.google.com/static/search/docs/images/licensable-images-callouts.png",
    ],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Blog",
    description: "Zygibit Website Blog Page",
    images: [
      "https://developers.google.com/static/search/docs/images/licensable-images-callouts.png",
    ],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
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
