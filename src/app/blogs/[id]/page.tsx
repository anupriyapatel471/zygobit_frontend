/* eslint-disable @typescript-eslint/no-explicit-any */

import { generateClient } from "aws-amplify/data";
import { TracingBeams } from "@/component/blog/TracingBeam/TracingBeam";
import dynamic from "next/dynamic";
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const AOSInitializer = dynamic(
  () => import("@/component/common/AOSInitializer")
);

import { Amplify } from "aws-amplify";
import outputs from "../../../../amplify_outputs.json";

Amplify.configure(outputs);

async function fetchBlog(id: string) {
  const client = generateClient();
  try {
    const res = await (client.models as any).Blog.list({
      filter: { id: { eq: id } },
    });
    const blog = res.data && res.data.length > 0 ? res.data[0] : null;
    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog = await fetchBlog(params.id);

  return {
    title: blog?.title || "Zygobit Blog",
    description: blog?.description || "Zygobit Blog",
    openGraph: {
      title: blog?.title || "Zygobit Blog",
      description: blog?.description || "Zygobit Blog",
      images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
      url: `https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/blog/${params.id}`,
    },
    twitter: {
      title: blog?.title || "Zygobit Blog",
      description: blog?.description || "Zygobit Blog",
      images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
      card: "summary_large_image",
      creator: "Teqexpert",
    },
  };
}

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <AOSInitializer />
      <TracingBeams params={params} />
      <ContactForm />
    </>
  );
};

export default Page;
