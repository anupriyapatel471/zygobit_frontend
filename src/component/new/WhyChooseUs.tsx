/* eslint-disable @next/next/no-img-element */
const reasons = [
  {
    id: 1,
    title: "Unmatched Quality",
    description:
      "We prioritize quality in everything we do, delivering high-performance, end-to-end IT solutions tailored to your needs. With years of experience and a skilled team of developers and designers, we’ve successfully completed over 20 client projects across various industries.",
  },
  {
    id: 2,
    title: "Exceptional Support",
    description:
      "With exceptional support, we prioritize clear communication and client satisfaction. Our team is available 24/7 to ensure seamless operations and provide proactive assistance at every stage of your project journey.",
  },
  {
    id: 3,
    title: "Innovation at Core",
    description:
      "Our focus on innovation ensures that your business stays ahead. By leveraging cutting-edge technologies like AI and automation, we create scalable, future-ready solutions designed to align with the latest industry trends.",
  },
];
const WhyChooseUs = () => {
  return (
    <section data-aos="fade-up" className="w-full mb-12 sm:mb-20">
      <div className="container remove-bg">
        <div className="w-full sm:text-center mb-5 sm:mb-10">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] text-gradiant-custom-second">Why Choose Us</h2>
          <p className="font-light sm:font-medium text-sm sm:text-lg lg:text-xl mt-2 sm:mt-5 max-w-3xl mx-auto">
            More the years, the better the solutions! We have been partnering
            with brands and offering our expertise for more than a decade.
          </p>
        </div>
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-5 lg:gap-10 items-center">
          <div className="w-full lg:w-2/5">
            <img
              className="w-full max-h-[450px] lg:max-h-[560px] rounded-xl object-cover"
              src="/images/why_choose_us.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-3/5">
            <div className="grid gap-5">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className="w-full bg-white rounded-2xl p-4 border border-white/20"
                >
                  <h3 className="font-semibold text-lg sm:text-2xl mb-2 sm:mb-2.5 text-black">
                    {reason.title}
                  </h3>
                  <p className="font-light sm:font-medium text-sm text-black">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
