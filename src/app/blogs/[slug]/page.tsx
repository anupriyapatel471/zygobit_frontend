/* eslint-disable @typescript-eslint/no-explicit-any */
export const revalidate = 60;

export const dynamic = "force-static";

import { generateClient } from "aws-amplify/data";
import { TracingBeams } from "@/component/blog/TracingBeam/TracingBeam";
import { Amplify } from "aws-amplify";
import outputs from "../../../../amplify_outputs.json";
import AOSInitializer from "@/component/common/AOSInitializer";
import ContactForm from "@/component/common/ContactForm/ContactForm";

Amplify.configure(outputs);

const DEFAULT_META = {
  title: "Zygobit Blog",
  description: "Zygobit Blog",
  images: ["/images/Logo.png"],
  creator: "Teqexpert",
};

async function fetchBlogBySlug(slug: string) {
  const client = generateClient();
  try {
    const res = await (client.models as any).Blog.list({
      filter: { slug: { eq: slug } },
    });
    const blogs = res.data || [];
    return blogs.length > 0 ? blogs[0] : null;
  } catch (error) {
    console.error(`Error fetching blog with slug "${slug}":`, error);
    throw error;
  }
}

export async function generateStaticParams() {
  const client = generateClient();
  const res = await (client.models as any).Blog.list();
  const blogs = res.data || [];

  return blogs.map((blog: any) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await fetchBlogBySlug(params.slug);

  const title = blog?.title || DEFAULT_META.title;
  const description = blog?.description || DEFAULT_META.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: blog?.image,
      url: `https://www.zygobit.com/blog/${params.slug}`,
    },
    twitter: {
      title,
      description,
      images: blog?.image,
      card: "summary_large_image",
      creator: DEFAULT_META.creator,
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const blog = await fetchBlogBySlug(params.slug);

  return (
    <>
      <AOSInitializer />
      <TracingBeams blog={blog} />
      <ContactForm />
    </>
  );
};

export default Page;
