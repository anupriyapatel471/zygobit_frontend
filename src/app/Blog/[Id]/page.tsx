import { TracingBeams } from "@/component/blog/TracingBeam/TracingBeam";
import dynamic from "next/dynamic";
const ContactForm = dynamic(
  () => import("@/component/common/ContactForm/ContactForm")
);
const AOSInitializer = dynamic(
  () => import("@/component/common/AOSInitializer")
);

const Page = () => {
  return (
    <>
      <AOSInitializer />

      <TracingBeams />
      <ContactForm />
    </>
  );
};

export default Page;
