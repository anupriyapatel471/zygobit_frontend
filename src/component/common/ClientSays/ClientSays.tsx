import { Testimonials } from "@/component/common/Testimonials/Testimonials";
const ClientSays = ({
  clientHeading,
  clientSaysDetails,
}: {
  clientHeading: string;
  clientSaysDetails: string;
}) => {
  return (
    <>
      <section className="w-full px-4 sm:px-5 lg:px-14 mt-4 sm:mt-16   lg:mt-24 mb-12 sm:mb-16 lg:mb-20 overflow-hidden">
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
      </section>
    </>
  );
};
export default ClientSays;
