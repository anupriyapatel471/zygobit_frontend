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
    <section data-aos="fade-up" className="w-full mb-20">
      <div className="container">
        <div className="w-full text-center mb-10">
          <h2 className="font-medium text-4xl">Why Choose Us</h2>
          <p className="font-medium text-xl mt-5 max-w-3xl mx-auto">
            More the years, the better the solutions! We have been partnering
            with brands and offering our expertise for more than a decade.
          </p>
        </div>
        <div className="w-full flex gap-10 items-center">
          <div className="w-2/5">
            <img
              className="w-full max-h-[560px] object-cover"
              src="/images/why_choose_us.png"
              alt=""
            />
          </div>
          <div className="w-3/5">
            <div className="grid gap-5">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className="w-full bg-[#2D2E34] rounded-2xl p-4 border border-white/20"
                >
                  <h3 className="font-semibold text-2xl mb-2.5">
                    {reason.title}
                  </h3>
                  <p className="font-medium text-sm">{reason.description}</p>
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
