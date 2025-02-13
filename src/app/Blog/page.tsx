
import EcommerceTabbing from "@/component/blog/EcommerceTabbing/EcommerceTabbing";
import ContactForm from "@/component/common/ContactForm/ContactForm";
import AOSInitializer from "@/component/common/AOSInitializer";
import BlogSection from "@/component/blog/BlogSection";

const BlogPage = () => {
  return (
    <>
    <AOSInitializer/>
             <main>
     <BlogSection/>
      <section className="w-full mt-9 mb-16">
        <div className="w-full px-4 lg:px-0">
          <EcommerceTabbing />
        </div>
      </section>
      <ContactForm />
      </main>
    </>
  );
};

export default BlogPage;
