import { ContactParticles } from "@/component/contact/contactParticles/contactParticles";
const WeDeliver = dynamic(
  () => import("@/component/common/WeDeliver/WeDeliver")
);
const ClientSays = dynamic(
  () => import("@/component/common/ClientSays/ClientSays")
);
const OurPartners = dynamic(
  () => import("@/component/common/OurPartners/OurPartners")
);
import AOSInitializer from "@/component/common/AOSInitializer";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Contact",
  description: "Zygobit Website Contact Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Contact",
    description: "Zygobit Website Contact Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Contact",
    description: "Zygobit Website Contact Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.png"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};

const Contact = () => {
  const clientHeading = "Lets’s Hear What Our Clients Say";
  const clientSaysDetails =
    " Using the latest technology and industry expertise, we built top-end Android and iOS-based applications that add value to the business and user experience.";
  return (
    <>
      <AOSInitializer />

      <div className="w-full mt-24">
        <ContactParticles />
      </div>
      <WeDeliver />
      <ClientSays
        clientHeading={clientHeading}
        clientSaysDetails={clientSaysDetails}
      />
      <OurPartners />
    </>
  );
};

export default Contact;
