import FeaturedSlider from "@/component/common/Featuredslider/Featuredslider";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface Project {
  technologyImages: ReactNode;
  id?: string | null;
  title: string | null;
  description: string | null;
  projectName: string | null;
  mobileImage: string | null;
  androidDownloads: number | null;
  iosDownloads: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  clientLocation: string | null;
  developmentTime: string | null;
  targetUsers: string | null;
  subDescription: string | null;
  subTitle: string | null;
  technologyDescription: string | null;
  developmentDescription: string | null;
  evaluationDescription: string | null;
  evaluationImage: string | null;
}
const FeaturedProjects = ({ projects }: { projects: Project }) => {
  return (
    <>
      <section className="w-full  py-10 sm:py-14 lg:py-16 overflow-hidden">
        <div className="container">
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
            <FeaturedSlider projects={projects} />
          </div>
          <div className="w-full flex justify-center mt-7 sm:mt-10">
            <Link href={"/portfolio"}>
              <button className=" btn-primary text-white font-normal  group bg-gradient-custom duration-500 transition-all">
                View All
                <ChevronRight className="group-hover:left-2 left-0 relative duration-500 transition-all" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeaturedProjects;
