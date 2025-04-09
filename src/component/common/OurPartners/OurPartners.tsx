import { HeroHighlightDemo } from "../Partnersbg/Partnersbg"
import PartnerSlider from "../Partnerslider/Partnerslider"

const OurPartners=()=>{
  return(<>
   <section
          data-aos="fade-up"
          className="w-full relative inline-block pt-[11rem] pb-12 sm:py-24 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full z-10">
            <HeroHighlightDemo />
          </div>
  
          <div className="w-full mt-0 sm:mt-40 lg:mt-[172px] relative z-20">
            <PartnerSlider />
          </div>
        </section>
  </>)
}
export default OurPartners