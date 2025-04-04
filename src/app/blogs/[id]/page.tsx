// import { Metadata } from "next";
// import { getBlogData } from "@/lib/blogDataMetadata";

// type Props = {
//   params: { id: string };
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const blog = await getBlogData(params.id);

//   if (!blog) {
//     return { title: "Blog Not Found" };
//   }

//   return {
//     title: blog.title,
//     description: blog.description,
//     openGraph: {
//       title: blog.title,
//       description: blog.description,
//       images: blog.image ? [blog.image] : [],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: blog.title,
//       description: blog.description,
//       images: blog.image ? [blog.image] : [],
//     },
//   };
// }

import { TracingBeams } from "@/component/blog/TracingBeam/TracingBeam";
import dynamic from "next/dynamic";
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const AOSInitializer = dynamic(
  () => import("@/component/common/AOSInitializer")
);

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
