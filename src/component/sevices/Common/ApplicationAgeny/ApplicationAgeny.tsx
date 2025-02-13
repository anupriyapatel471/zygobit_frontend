import Image from "next/image";
import ProcessImg from "../../../../../public/images/process.png"

interface ApplicationAgencyProps {
  applicationHeading: string;
  applicationDetails: string;
  
}

const ApplicationAgeny: React.FC<ApplicationAgencyProps> = ({
  applicationHeading,
  applicationDetails,
}) => {  
return(<>
      <section className="w-full relative pb-10 sm:py-12 lg:py-16 overflow-hidden">
        <div className="w-full px-4 lg:px-0 sm:text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom font-bold">
          {applicationHeading}
          </h2>
          <p className="sm:font-medium max-w-6xl mx-auto text-sm sm:text-lg lg:text-xl mt-3">
          {applicationDetails}
          </p>
        </div>
        <div className="w-full  grid grid-cols-1 gap-10 sm:gap-14 lg:gap-10 px-4 lg:px-24 mt-10 sm:mt-12 lg:mt-24">
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-4 sm:gap-7 items-center">
            <div
              data-aos="fade-right"
              className="w-full order-2 lg:order-none lg:w-3/5"
            >
              <h3 className="font-semibold text-xl sm:text-3xl lg:text-4xl">
                Streamline Business Process
              </h3>
              <p className="text-sm sm:text-xl lg:text-2xl mt-2 sm:mt-3 lg:mt-10">
                Our custom web application development firm streamlines your
                business processes and simplifies complex operations for
                enhanced productivity.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="w-full order-1 lg:order-none lg:w-2/5"
            >
              <div className="w-full h-[22rem] sm:h-[25rem] lg:h-[32rem] object-cover rounded-2xl overflow-hidden relative ">
                <Image
                  src={ProcessImg}
                  className="object-cover rounded-2xl"
                  fill
                  alt="process img"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-4 sm:gap-7 items-center">
            <div data-aos="fade-right" className="w-full lg:w-2/5">
              <div className="w-full h-[22rem] sm:h-[25rem] lg:h-[32rem] object-cover rounded-2xl overflow-hidden relative ">
                <Image
                  src={ProcessImg}
                  className="object-cover rounded-2xl"
                  fill
                  alt="process img"
                />
              </div>
            </div>
            <div data-aos="fade-left" className="w-full lg:w-3/5">
              <h3 className="font-semibold text-xl sm:text-3xl lg:text-4xl">
                Streamline Business Process
              </h3>
              <p className="text-sm sm:text-xl lg:text-2xl mt-2 sm:mt-3 lg:mt-10">
                Our custom web application development firm streamlines your
                business processes and simplifies complex operations for
                enhanced productivity.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-wrap lg:flex-nowrap gap-4 sm:gap-7 items-center">
            <div
              data-aos="fade-right"
              className="w-full order-2 lg:order-none lg:w-3/5"
            >
              <h3 className="font-semibold text-xl sm:text-3xl lg:text-4xl">
                Streamline Business Process
              </h3>
              <p className="text-sm sm:text-xl lg:text-2xl mt-2 sm:mt-3 lg:mt-10">
                Our custom web application development firm streamlines your
                business processes and simplifies complex operations for
                enhanced productivity.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="w-full order-1 lg:order-none lg:w-2/5"
            >
              <div className="w-full h-[22rem] sm:h-[25rem] lg:h-[32rem] object-cover rounded-2xl overflow-hidden relative ">
                <Image
                  src={ProcessImg}
                  className="object-cover rounded-2xl"
                  fill
                  alt="process img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

</>)
}
export default ApplicationAgeny;