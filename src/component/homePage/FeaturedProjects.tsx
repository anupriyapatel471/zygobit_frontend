import { ChevronRight } from "lucide-react";
import FeaturedSlider from "@/component/common/Featuredslider/Featuredslider";

const FeaturedProjects = () => {
  return (
    <>
       <section className="w-full px-4 lg:px-11 py-10 sm:py-14 lg:py-16 overflow-hidden">
             <div className="w-full  sm:text-center" data-aos="fade-right">
               <h2 className="text-gradiant-custom font-bold text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-6">
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
             <div className="w-full mt-5 sm:mt-10 flex justify-center">
               <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                 View More{" "}
                 <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
               </button>
             </div>
           </section>
    </>
  );
};
export default FeaturedProjects;
