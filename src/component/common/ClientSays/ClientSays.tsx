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
        <div className="container remove-bg">
          <div className="w-full flex flex-wrap sm:flex-nowrap gap-y-4 sm:gap-5 lg:gap-16 items-center justify-between">
            <div className="w-full sm:w-1/2 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradiant-custom mb-2">
                {clientHeading}
              </h2>
              <p className="font-[300] sm:font-medium text-sm sm:text-base lg:text-lg 2xl:text-xl">
                {clientSaysDetails}
              </p>
            </div>
            <div className="w-full sm:w-1/2 relative lg:pr-20">
              <div className="w-full relative">
                <div className="w-full h-[310px] sm:h-[400px] bg-[#FEF8FF36] backdrop-blur-2xl border-[12px] border-white/20 rounded-2xl relative"></div>
                <div className="absolute top-20 -right-24 -z-20">
                  <img src="/images/square.png" alt="" />
                </div>
                <div className="absolute -bottom-4 lg:-bottom-14 -left-14 -z-20">
                  <img src="/images/circle.png" alt="" />
                </div>
                <div className="hidden sm:inline absolute -top-10 sm:-top-12 lg:-top-16 left-12 -z-20">
                  <img src="/images/ring.png" alt="" />
                </div>
                <ClientSaysCards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ClientSays;
