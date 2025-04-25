/* eslint-disable @next/next/no-img-element */

import ClientSaysCards from "@/component/new/clientSaysCards";
import { ClientSlider } from "@/component/new/ClientSlider";
const ClientSays = ({
  clientHeading,
  clientSaysDetails,
}: {
  clientHeading: string;
  clientSaysDetails: string;
}) => {
  return (
    <>
      <section className="w-full align-top inline-block py-12  lg:py-14 overflow-hidden bg-[url('/images/client_bg.png')] bg-cover bg-center">
        <div className="container remove-bg">
          <div className="w-full flex items-center justify-center mb-10">
            <div className="w-full  text-center sm:text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradiant-custom-second  mb-2">
                {clientHeading}
              </h2>
              <p className="font-[300] sm:font-medium text-sm sm:text-base lg:text-lg 2xl:text-xl max-w-4xl mx-auto">
                {clientSaysDetails}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-wrap sm:flex-nowrap gap-y-4 sm:gap-5 lg:gap-16 items-center justify-between">
            <div className="w-full  relative">
                <ClientSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ClientSays;
