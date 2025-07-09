import { ContactParticles } from "@/component/contact/contactParticles/contactParticles";
import AOSInitializer from "@/component/common/AOSInitializer";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WithContext, ContactPage } from "schema-dts";

export const metadata: Metadata = {
  title: "Contact Zygobit | Software, Web & App Development Company",
  description:
    "Get in touch with Zygobit for custom software, web, and mobile app development. Reach out to our experts for your digital transformation needs.",
  keywords:
    "Contact Zygobit, Software Development, Web App Development, Mobile App Development, IT Solutions, Custom Software Company, Zygobit Contact Page",
  openGraph: {
    title: "Contact Zygobit | Software, Web & App Development Company",
    description:
      "Connect with Zygobit for expert web, mobile, and AI-powered software development services tailored to your business goals.",
    images: ["/images/Logo.png"],
    url: "https://www.zygobit.com/contact",
  },
  twitter: {
    title: "Contact Zygobit | Software, Web & App Development Company",
    description:
      "Reach out to Zygobit – your trusted partner for custom software and innovative digital solutions.",
    images: ["/images/Logo.png"],
    card: "summary_large_image",
    creator: "Zygobit",
  },
  alternates: {
    canonical: "https://www.zygobit.com/contact",
  },
};

const contactPageJsonLd: WithContext<ContactPage> = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Zygobit",
  url: "https://www.zygobit.com/contact",
  description:
    "Get in touch with Zygobit for expert software, mobile, and AI development services.",
};

const Contact = () => {
  const socialLinks = [
    {
      link: "https://wa.me/18507923399",
      icon: "/images/whatsapp_new.svg",
      title: "WhatsApp",
      description: "+1(850)792-3399",
    },
    {
      link: "https://www.instagram.com/zygobit",
      icon: "/images/instagram_new.svg",
      title: "Instagram",
      description: "Zygobit",
    },
    {
      link: "https://www.facebook.com/zygobit",
      icon: "/images/facebook_bew.svg",
      title: "Facebook",
      description: "Zygobit",
    },
    {
      link: "https://mail.google.com/mail/?view=cm&to=info@zygobit.com",
      icon: "/images/gmail.svg",
      title: "Email",
      description: "info@zygobit.com",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <AOSInitializer />

      <div className="w-full mt-24">
        <ContactParticles />
      </div>

      <section className="w-full py-12 sm:py-14 lg:py-20">
        <div className="container remove-bg">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-16">
            {socialLinks.map((data, index) => (
              <Link
                key={index}
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full flex items-center gap-4 border border-[#7C7C7C] bg-white/10 p-4 lg:p-7 rounded-2xl">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                    <Image fill src={data.icon} alt="icon" />
                  </div>
                  <div className="w-[calc(100%-40px)]">
                    <b className="text-sm sm:text-base lg:text-lg">
                      {data.title}
                    </b>
                    <span className="block text-sm mt-1">
                      {data.description}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full relative text-black pt-12 sm:pt-0 pb-12 sm:pb-14 lg:pb-20 bg-[#FFF1ED]">
        <div className="container remove-bg">
          <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center gap-8 lg:gap-[196px]">
            <div className="w-full sm:w-1/3 group sm:text-center">
              <div className="inline-block sm:hidden">
                <Image
                  width={190}
                  height={112}
                  className="w-full group-hover:hidden mx-auto h-[112px]  object-contain"
                  src="/images/vector_one_m.svg"
                  alt="icon"
                />
                <Image
                  width={190}
                  height={112}
                  className="w-full hidden group-hover:block mx-auto h-[112px]  object-contain"
                  src="/images/vector_ones_m.svg"
                  alt="icon"
                />
              </div>
              <div className="hidden sm:inline-block">
                <Image
                  width={190}
                  height={229}
                  className="w-full group-hover:hidden mx-auto h-[200px] lg:h-[229px] object-contain"
                  src="/images/india_vector.png"
                  alt="icon"
                />
                <Image
                  width={190}
                  height={229}
                  className="w-full hidden group-hover:block mx-auto h-[200px] lg:h-[229px] object-contain"
                  src="/images/vector_ones.svg"
                  alt="icon"
                />
              </div>
              <div className="inline-block w-full font-bold text-lg pt-2.5 border-t-2 border-orange-600 my-1 sm:my-2.5 min-h-[50px]">
                India
              </div>
              <p className="text-[#1F1F1F] text-xs sm:min-h-12 lg:min-h-fit ">
                Plot No. C-163, Sector 82, JLPL, Industrial Area, Sahibzada Ajit
                Singh Nagar, Punjab,140308
              </p>
            </div>
            <div className="w-full sm:w-1/3 group sm:text-center">
              <div className="inline-block sm:hidden">
                <Image
                  width={190}
                  height={112}
                  className="w-full group-hover:hidden mx-auto h-[112px]  object-contain"
                  src="/images/vector_two_m.svg"
                  alt="icon"
                />
                <Image
                  width={190}
                  height={112}
                  className="w-full hidden group-hover:block mx-auto h-[112px]  object-contain"
                  src="/images/vector_threes_m.svg"
                  alt="icon"
                />
              </div>
              <div className="hidden sm:inline-block">
                <Image
                  width={190}
                  height={229}
                  className="w-full mx-auto  group-hover:hidden h-[200px] lg:h-[229px] object-contain"
                  src="/images/vector_two.svg"
                  alt="icon"
                />
                <Image
                  width={190}
                  height={229}
                  className="w-full hidden group-hover:block mx-auto h-[200px] lg:h-[229px] object-contain"
                  src="/images/vector_threes.svg"
                  alt="icon"
                />
              </div>
              <div className="inline-block w-full font-bold text-lg pt-2.5 border-t-2 border-orange-600 my-1 sm:my-2.5">
                USA
              </div>
              <p className="text-[#1F1F1F] text-xs sm:min-h-12 lg:min-h-fit lg:max-w-[228px] mx-auto ">
                541 Windsor Cmns, East Windsor, NJ 08512
              </p>
            </div>
            <div className="w-full sm:w-1/3 group sm:text-center">
              <div className="inline-block sm:hidden">
                <Image
                  width={190}
                  height={112}
                  className="w-full group-hover:hidden mx-auto h-[112px]  object-contain"
                  src="/images/vector_three_m.svg"
                  alt="icon"
                />
                <Image
                  width={190}
                  height={112}
                  className="w-full hidden group-hover:block mx-auto h-[112px]  object-contain"
                  src="/images/vector_twos_m.svg"
                  alt="icon"
                />
              </div>
              <div className="hidden sm:inline-block">
                <Image
                  width={190}
                  height={229}
                  className="w-full mx-auto group-hover:hidden h-[200px] lg:h-[229px] object-contain"
                  src="/images/vector_three.svg"
                  alt="icon"
                />
                <Image
                  width={190}
                  height={229}
                  className="w-full mx-auto hidden group-hover:block h-[200px] lg:h-[229px] object-contain"
                  src="/images/vector_twos.svg"
                  alt="icon"
                />
              </div>
              <div className="inline-block w-full font-bold text-lg pt-2.5 border-t-2 border-orange-600 my-1 sm:my-2.5">
                Australia
              </div>
              <p className="text-[#1F1F1F] text-xs sm:min-h-12 lg:min-h-fit lg:max-w-[228px] mx-auto">
                2 Waterview St Putney, New South Wales
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
