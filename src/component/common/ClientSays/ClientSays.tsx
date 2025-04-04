/* eslint-disable @next/next/no-img-element */
import ClientSaysCards from "@/component/new/clientSaysCards";
const ClientSays = ({
  clientHeading,
  clientSaysDetails,
}: {
  clientHeading: string;
  clientSaysDetails: string;
}) => {
  return (
    <>
      <section className="w-full inline-block py-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="container">
          <div className="w-full flex gap-16 items-center justify-between">
            <div className="w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gradiant-custom mb-2">
                {clientHeading}
              </h2>
              <p className="font-medium text-base lg:text-lg 2xl:text-xl">
                {clientSaysDetails}
              </p>
            </div>
            <div className="w-1/2 relative">
              <div className="w-full relative">
                <div className="w-full h-[400px] bg-[#FEF8FF36] backdrop-blur-2xl border-[12px] border-white/20 rounded-2xl relative"></div>
                <div className="absolute top-20 -right-24 -z-20">
                  <img src="/images/square.png" alt="" />
                </div>
                <div className="absolute -bottom-14 -left-14 -z-20">
                  <img src="/images/circle.png" alt="" />
                </div>
                <div className="absolute -top-16 left-12 -z-20">
                  <img src="/images/ring.png" alt="" />
                </div>
                <ClientSaysCards />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full px-4 sm:px-5 lg:px-14 mt-4 sm:mt-16   lg:mt-24 mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
        <div data-aos="fade-left" className="w-full sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradient-custom">
            {clientHeading}
          </h2>
          <p className="font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl my-3">
            {clientSaysDetails}
          </p>
        </div>
        <div className="w-full sm:px-4 lg:px-12">
          <Testimonials />
        </div>
      </section> */}
    </>
  );
};
export default ClientSays;
