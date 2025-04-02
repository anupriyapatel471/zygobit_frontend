import { TracingBeams } from "@/component/blog/TracingBeam/TracingBeam";
import dynamic from "next/dynamic";

const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const AOSInitializer = dynamic(
  () => import("@/component/common/AOSInitializer")
);

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  return (
    <>
      <AOSInitializer />
      {/* Pass the dynamic id from params to TracingBeams */}
      <TracingBeams blogId={params.id} />
      <ContactForm />
    </>
  );
};

export default Page;
export async function generateStaticParams() {
  // Replace with a dynamic fetch of blog ids if possible.
  return [
    { id: "default" },
    { id: "b74c63a4-9e1c-4d12-bbc6-3a472f9830c12" },
    // Add additional blog ids here
  ];
}
