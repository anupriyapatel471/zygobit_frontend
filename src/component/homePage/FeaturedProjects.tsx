import FeaturedSlider from "@/component/common/Featuredslider/Featuredslider";
const FeaturedProjects = () => {
  return (
    <>
      <section className="w-full  py-10 sm:py-14 lg:py-16 overflow-hidden">
        <div className="container remove-bg">
          <div className="w-full  sm:text-center">
            <h2 className="text-gradiant-custom-second font-bold text-2xl sm:text-3xl lg:text-[38px] mb-2 sm:mb-5">
              Featured Projects
            </h2>
            <p className="text-sm leading-6 sm:leading-normal sm:text-lg lg:text-xl sm:font-medium max-w-5xl sm:mx-auto">
              We specialize in developing high-quality Android and iOS
              applications that deliver exceptional user experiences and drive
              business growth
            </p>
          </div>
          <div data-aos="fade-up">
            <FeaturedSlider />
          </div>
          {/* <div className="w-full flex justify-center mt-7 sm:mt-10">
            <Link href={"/portfolio"}>
              <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                View All
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};
export default FeaturedProjects;
