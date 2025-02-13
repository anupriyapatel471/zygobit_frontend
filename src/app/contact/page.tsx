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
  description: "Zygibit Website Contact Page",
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
