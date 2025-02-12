
import WeDeliver from "@/component/common/WeDeliver/WeDeliver";
import { ContactParticles } from "@/component/contact/contactParticles/contactParticles";
import OurPartners from "@/component/common/OurPartners/OurPartners";
import ClientSays from "@/component/common/ClientSays/ClientSays";
import AOSInitializer from "@/component/common/AOSInitializer";

const Contact = () => {

  const clientHeading ="Lets’s Hear What Our Clients Say"
  const clientSaysDetails=" Using the latest technology and industry expertise, we built top-end Android and iOS-based applications that add value to the business and user experience."
  return (
    <> 
    <AOSInitializer />
        <main>
      <div className="w-full mt-24">
        {/* contact form */}
        <ContactParticles />
      </div>

      {/* about us */}
      <WeDeliver />

      {/* client says */}
      <ClientSays clientHeading={clientHeading}clientSaysDetails={clientSaysDetails}/>

      {/* our partners */}
    <OurPartners/>
    </main>
    </>
  );
};

export default Contact;
