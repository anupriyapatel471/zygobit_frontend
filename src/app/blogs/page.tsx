import { Metadata } from "next";
import BlogClientPage from "@/component/blog/BlogClientPage";

export const metadata: Metadata = {
  title: "Zygobit Blog | Insights on Web, App & AI Development",
  description:
    "Explore Zygobit's blog for expert insights on web development, mobile apps, UI/UX design, software engineering, and AI-driven innovations.",
  keywords:
    "Zygobit Blog, Software Development Insights, Web Development, Mobile App Development, UI/UX Design, AI Development, Tech Trends, Zygobit Articles",
  openGraph: {
    title: "Zygobit Blog | Insights on Web, App & AI Development",
    description:
      "Stay ahead with Zygobit's blog — covering expert tips and trends in web, mobile, AI, and software development for modern businesses.",
    images: ["/images/Logo.png"],
    url: "https://www.zygobit.com/blogs",
  },
  twitter: {
    title: "Zygobit Blog | Insights on Web, App & AI Development",
    description:
      "Follow the Zygobit blog for insights into custom software, AI solutions, and web/mobile development best practices.",
    images: ["/images/Logo.png"],
    card: "summary_large_image",
    creator: "Zygobit",
  },
  alternates: {
    canonical: "https://www.zygobit.com/blogs",
  },
};

export const revalidate = 60;

const blogListingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Zygobit Blog",
  url: "https://www.zygobit.com/blogs",
  description: "Insights on web, app & AI development from Zygobit.",
};

const BlogPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListingJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlogClientPage />
    </>
  );
};
export default BlogPage;
