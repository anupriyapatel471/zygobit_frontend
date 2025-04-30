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
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: "Zygobit Website Contact Page",
  keywords:
    "Zygobit, Web Application Development, Mobile App Development, UI/UX Design, Machine Learning, AI, Web Development, Software Development, IT Solutions, Business Development",
  openGraph: {
    title: "Contact",
    description: "Zygobit Website Contact Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    url: "https://aws-amplify.d1qoezcrvjvjht.amplifyapp.com/",
  },
  twitter: {
    title: "Contact",
    description: "Zygobit Website Contact Page",
    images: ["https://zygobit-images.s3.ap-south-1.amazonaws.com/Logo.jpg"],
    card: "summary_large_image",
    creator: "Teqexpert",
  },
};

const Contact = () => {
  const clientHeading = "Let’s Hear What Our Clients Say";
  const clientSaysDetails =
    " Using the latest technology and industry expertise, we built top-end Android and iOS-based applications that add value to the business and user experience.";
  return (
    <>
      <AOSInitializer />

      <div className="w-full mt-24">
        <ContactParticles />
      </div>

      <section className="w-full py-12 sm:py-14 lg:py-20">
        <div className="container remove-bg">
          <div className="w-full grid grid-cols-4 gap-16">
            <div className="w-full flex items-center gap-4 border border-[#7C7C7C] bg-white/10 p-7 rounded-2xl">
              <div className="w-10 h-10 relative">
                <Image fill src="/images/whatsapp_new.svg" alt="icon" />
              </div>
              <div className="w-[calc(100%-40px)]">
                <b className="text-sm sm:text-base lg:text-lg">WhatsApp</b>
                <span className="block text-sm mt-1">+1(850)792-3399</span>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 border border-[#7C7C7C] bg-white/10 p-7 rounded-2xl">
              <div className="w-10 h-10 relative">
                <Image fill src="/images/instagram_new.svg" alt="icon" />
              </div>
              <div className="w-[calc(100%-40px)]">
                <b className="text-sm sm:text-base lg:text-lg">Instagram</b>
                <span className="block text-sm mt-1">Zygobit</span>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 border border-[#7C7C7C] bg-white/10 p-7 rounded-2xl">
              <div className="w-10 h-10 relative">
                <Image fill src="/images/facebook_bew.svg" alt="icon" />
              </div>
              <div className="w-[calc(100%-40px)]">
                <b className="text-sm sm:text-base lg:text-lg">Facebook</b>
                <span className="block text-sm mt-1">Zygobit</span>
              </div>
            </div>
            <div className="w-full flex items-center gap-4 border border-[#7C7C7C] bg-white/10 p-7 rounded-2xl">
              <div className="w-10 h-7 relative">
                <Image fill src="/images/gmail.svg" alt="icon" />
              </div>
              <div className="w-[calc(100%-40px)]">
                <b className="text-sm sm:text-base lg:text-lg">Email</b>
                <span className="block text-sm mt-1">info@zygobit.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative text-black pb-12 sm:pb-14 lg:pb-20 bg-[#FFF1ED]">
        <div className="container remove-bg">
          <div className="w-full flex justify-between items-center gap-[196px]">
            <div className="w-1/3 group text-center">
              <Image
                width={190}
                height={229}
                className="w-full group-hover:hidden mx-auto h-[229px] object-contain"
                src="/images/vector_one.svg"
                alt="icon"
              />
              <Image
                width={190}
                height={229}
                className="w-full hidden group-hover:block mx-auto h-[229px] object-contain"
                src="/images/vector_ones.svg"
                alt="icon"
              />
              <div className="inline-block w-full font-bold text-lg pt-2.5 border-t-2 border-orange-600 my-2.5 min-h-[50px]">
                India
              </div>
              <p className="text-[#1F1F1F] text-xs ">
                Plot No. C-163, Sector 82, JLPL, Industrial Area, Sahibzada Ajit
                Singh Nagar, Punjab,140308
              </p>
            </div>
            <div className="w-1/3 group text-center">
              <Image  
                width={190}
                height={229}
                className="w-full mx-auto  group-hover:hidden h-[229px] object-contain"
                src="/images/vector_two.svg"
                alt="icon"
              />
              <Image
                width={190}
                height={229}
                className="w-full hidden group-hover:block mx-auto h-[229px] object-contain"
                src="/images/vector_threes.svg"
                alt="icon"
              />
              <div className="inline-block w-full font-bold text-lg pt-2.5 border-t-2 border-orange-600 my-2.5">
                USA
              </div>
              <p className="text-[#1F1F1F] text-xs lg:max-w-[228px] mx-auto ">
                541 Windsor Cmns, East Windsor, NJ 08512
              </p>
            </div>
            <div className="w-1/3 group text-center">
              <Image
                width={190}
                height={229}
                className="w-full mx-auto group-hover:hidden h-[229px] object-contain"
                src="/images/vector_three.svg"
                alt="icon"
              />
              <Image
                width={190}
                height={229}
                className="w-full mx-auto hidden group-hover:block h-[229px] object-contain"
                src="/images/vector_twos.svg"
                alt="icon"
              />
              <div className="inline-block w-full font-bold text-lg pt-2.5 border-t-2 border-orange-600 my-2.5">
                Australia
              </div>
              <p className="text-[#1F1F1F] text-xs lg:max-w-[228px] mx-auto">
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
