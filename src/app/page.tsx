
import dynamic from "next/dynamic";
import AOSInitializer from "@/component/common/AOSInitializer";
import { SparklesHeading } from "@/component/homePage/Sparkleheading/Sparkleheading";
import { ourExpertiseData } from "../component/homePage/OurExpertise";

const HomeBanner = dynamic(() => import("@/component/homePage/HomeBanner"));
const FeaturedProjects = dynamic(() => import("@/component/homePage/FeaturedProjects"));
const BusinessCards = dynamic(() => import("@/component/homePage/Businesscards/Businesscards"));
const BackgroundBeamNew = dynamic(() => import("@/component/homePage/Bgbeam/Bgbeam"));
const Cta = dynamic(() => import("@/component/common/Cta/Cta"));
const WhychooseUs = dynamic(() => import("@/component/homePage/Whychooseus/Whychooseus"));
const HeroParalax = dynamic(() => import("@/component/common/HeroParallax/HeroParallax"));
const TechnologyStack = dynamic(() => import("@/component/common/TechnologyStack/TechnologyStack"));
const Blog = dynamic(() => import("@/component/common/Blog/Blog"));
const ContactForm = dynamic(() => import("@/component/common/ContactForm/ContactForm"));
const ClientSays = dynamic(() => import("@/component/common/ClientSays/ClientSays"));
const OurPartners = dynamic(() => import("@/component/common/OurPartners/OurPartners"));

const Home = () => {

  const clientHeading = "Lets’s Hear What Our Clients Say";
  const clientSaysDetails =
    "Using the latest technology and industry expertise, we built top-end Android and iOS-based applications that add value to the business and user experience.";

  return (
    <>
    <AOSInitializer />
    <main>
      <HomeBanner />
      <FeaturedProjects />
      <section
        data-aos="fade-up"
        className="w-full relative  py-0 px-0 overflow-hidden">
        <div className="w-full h-full">
          <BackgroundBeamNew />
        </div>
        <BusinessCards />
      </section>
      
      <Cta vortex={"VortexBg"} Aurora={""} content={"Globe"} />
      
      <section
        data-aos="fade-up"
        className="w-full px-4 lg:px-44 mb-20 overflow-hidden"
      >
        <div className="w-full text-center mb-0">
          <SparklesHeading />
        </div>
        <div className="w-full mt-5 sm:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
          {ourExpertiseData?.map((data, index) => (
            <div
              key={index}
              className="border border-[#EA580C] p-4 pl-0 sm:pl-0 sm:p-0 rounded-lg sm:rounded-none sm:border-none w-auto group"
            >
              <span>{data?.image}</span>
              <h5 className="pl-4 group-hover:text-themetext font-semibold text-lg my-2">
                {data?.heading}
              </h5>
              <p className="pl-4 text-sm sm:text-base text-muted-foreground">
                {data?.paragraph}
              </p>
            </div>
          ))}
        </div>
      </section>

      <TechnologyStack />

      <section
        data-aos="fade-up"
        className="w-full relative  py-0 sm:py-0 lg:py-0 overflow-hidden "
      >
        <HeroParalax />
      </section>

      <ClientSays
        clientHeading={clientHeading}
        clientSaysDetails={clientSaysDetails}
      />
      <OurPartners/>
      <Cta vortex={"VortexBg"} Aurora={""} content={"Marquee"} />

      <section data-aos="fade-up" className="w-full">
        <div className="w-full">
          <WhychooseUs />
        </div>
      </section>
      <Blog />
      <ContactForm />
      </main>
    </>
  );
};

export default Home;
