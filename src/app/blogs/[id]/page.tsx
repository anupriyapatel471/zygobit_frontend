/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = "force-dynamic";

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
  images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
  creator: "Teqexpert",
};

async function fetchBlogs(id?: string) {
  const client = generateClient();
  try {
    const filter = id ? { filter: { id: { eq: id } } } : {};
    const res = await (client.models as any).Blog.list(filter);
    const blogs = res.data || [];

    if (id) {
      return blogs.length > 0 ? blogs[0] : null;
    }

    return blogs;
  } catch (error) {
    console.error(`Error fetching blog${id ? ` with ID ${id}` : "s"}:`, error);
    throw error;
  }
}

export const revalidate = 60;

export async function generateStaticParams() {
  const blogs = await fetchBlogs();
  return blogs.map((blog: any) => ({ id: blog.id.toString() }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog = await fetchBlogs(params.id);

  const title = blog?.title || DEFAULT_META.title;
  const description = blog?.description || DEFAULT_META.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: DEFAULT_META.images,
      url: `https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/blog/${params.id}`,
    },
    twitter: {
      title,
      description,
      images: DEFAULT_META.images,
      card: "summary_large_image",
      creator: DEFAULT_META.creator,
    },
  };
}

const Page = async ({ params }: { params: { id: string } }) => {
  const blog = await fetchBlogs(params.id);

  return (
    <>
      <AOSInitializer />
      <TracingBeams blog={blog} />
      <ContactForm />
    </>
  );
};

export default Page;
