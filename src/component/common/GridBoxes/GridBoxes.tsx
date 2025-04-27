import { MobileAppGrid } from "@/component/common/MobileAppGrid/MobileAppGrid";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MobileAppGridProps {
  GridBoxesHeading: string;
  GridBoxesDetail: string;
  cards: {
    id: number;
    content: React.ReactNode;
    className: string;
    title: string;
    thumbnail: string;
  }[];
}

const GridBoxes = ({
  GridBoxesHeading,
  GridBoxesDetail,
  cards,
}: MobileAppGridProps) => {
  return (
    <>
      <section className="w-full sm:pt-10 pb-12 lg:pb-16 lg:pt-16">
        <div className="container remove-bg">
          <div className="w-full  sm:text-center mb-8 sm:mb-12 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradiant-custom-second">
              {GridBoxesHeading}
            </h2>
            <p className="sm:font-medium text-sm sm:text-lg lg:text-xl max-w-6xl mx-auto mt-5">
              {GridBoxesDetail}
            </p>
          </div>
          <div className="w-full ">
            <div className="w-full grid grid-cols-3 gap-10">
              <div className="w-full max-h-[324px] overflow-hidden transition-all duration-300 group p-10 col-span-2 rounded-2xl hover:bg-[#1E1E20] bg-black/70  relative">
                <div className="w-full h-full group-hover:invisible transition-all duration-300  absolute top-0 left-0  -z-10">
                  <Image
                    fill
                    className="-z-20 object-cover"
                    src="/images/why_bg.jpg"
                    alt=""
                  />
                </div>
                <Button className=" absolute transition-all duration-300 top-10 right-10 border-2 border-white bg-transparent hover:bg-transparent group-hover:rotate-0 -rotate-45 w-14 h-14 rounded-full p-0">
                  <Image
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    src="/images/why_arrow.svg"
                    alt=""
                  />
                </Button>
                <div className="group-hover:hidden transition-all duration-300 mb-5">
                  <Image
                    width={60}
                    height={60}
                    className="w-14 h-14 object-contain"
                    src="/images/setting_icon.svg"
                    alt="icon"
                  />{" "}
                </div>
                <h2 className="font-bold text-[32px] text-white  mb-12">
                  Proven Expertise
                </h2>
                <p className="text-white line-clamp-3 transition-all duration-300 text-sm group-hover:opacity-100 group-hover:visible  opacity-0 invisible sm:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem, quae alias in impedit corrupti alias in
                  impedit corrupti cupiditate corporis maxime facere adipisci
                  fugit acere adipisci fugit .
                </p>
              </div>
              <div className="w-full max-h-[324px] overflow-hidden transition-all duration-300 group p-10 col-span-1 rounded-2xl hover:bg-[#1E1E20] bg-orange-600 relative">
                <Button className=" absolute transition-all duration-300 top-10 right-10 border-2 border-white bg-transparent hover:bg-transparent group-hover:rotate-0 -rotate-45 w-14 h-14 rounded-full p-0">
                  <Image
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    src="/images/why_arrow.svg"
                    alt=""
                  />
                </Button>
                <div className="group-hover:invisible   absolute bottom-0 right-0  z-10">
                  <Image
                    width={147}
                    height={221}
                    className=" w-[147px] h-[221px] object-cover"
                    src="/images/white_g.png"
                    alt=""
                  />
                </div>
                <div className="group-hover:hidden transition-all duration-300 mb-5">
                  <Image
                    width={60}
                    height={60}
                    className="w-14 h-14 object-contain"
                    src="/images/black_arrow.svg"
                    alt="icon"
                  />{" "}
                </div>
                <h2 className="font-bold  group-hover:text-[32px] text-[28px] text-white  mb-5">
                  Scalable Solutions
                </h2>
                <p className="text-white transition-all line-clamp-5 duration-300 text-sm group-hover:opacity-100 group-hover:visible  opacity-0 invisible sm:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem, quae alias in impedit impedit corrupti
                  cupiditate corporis fugit acere adipisci fugit .
                </p>
              </div>
              <div className="w-full max-h-[324px] overflow-hidden transition-all duration-300 group p-10 col-span-1 rounded-2xl hover:bg-[#1E1E20] bg-orange-600 relative">
                <Button className=" absolute transition-all duration-300 top-10 right-10 border-2 border-white bg-transparent hover:bg-transparent group-hover:rotate-0 -rotate-45 w-14 h-14 rounded-full p-0">
                  <Image
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    src="/images/why_arrow.svg"
                    alt=""
                  />
                </Button>
                <div className="group-hover:invisible   absolute bottom-0 right-0  z-10">
                  <Image
                    width={147}
                    height={221}
                    className=" w-[147px] h-[221px] object-cover"
                    src="/images/white_g.png"
                    alt=""
                  />
                </div>
                <div className="group-hover:hidden transition-all duration-300 mb-5">
                  <Image
                    width={60}
                    height={60}
                    className="w-14 h-14 object-contain"
                    src="/images/pen_icon.svg"
                    alt="icon"
                  />{" "}
                </div>
                <h2 className="font-bold  group-hover:text-[32px] text-[28px] text-white  mb-5">
                  User Centric Design
                </h2>
                <p className="text-white transition-all line-clamp-5 duration-300 text-sm group-hover:opacity-100 group-hover:visible  opacity-0 invisible sm:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem, quae alias in impedit impedit corrupti
                  cupiditate corporis fugit acere adipisci fugit .
                </p>
              </div>
              <div className="w-full max-h-[324px] overflow-hidden transition-all duration-300 group p-10 col-span-2 rounded-2xl hover:bg-[#1E1E20] bg-black/70  relative">
                <div className="w-full h-full group-hover:invisible transition-all duration-300  absolute top-0 left-0  -z-10">
                  <Image
                    fill
                    className="-z-20 object-cover"
                    src="/images/why_bg.jpg"
                    alt=""
                  />
                </div>
                <Button className=" absolute transition-all duration-300 top-10 right-10 border-2 border-white bg-transparent hover:bg-transparent group-hover:rotate-0 -rotate-45 w-14 h-14 rounded-full p-0">
                  <Image
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    src="/images/why_arrow.svg"
                    alt=""
                  />
                </Button>
                <div className="group-hover:hidden transition-all duration-300 mb-5">
                  <Image
                    width={60}
                    height={60}
                    className="w-14 h-14 object-contain"
                    src="/images/repeat.svg"
                    alt="icon"
                  />{" "}
                </div>
                <h2 className="font-bold text-[32px] text-white  mb-12">
                  Seamless Interactions
                </h2>
                <p className="text-white line-clamp-3 transition-all duration-300 text-sm group-hover:opacity-100 group-hover:visible  opacity-0 invisible sm:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem, quae alias in impedit corrupti alias in
                  impedit corrupti cupiditate corporis maxime facere adipisci
                  fugit acere adipisci fugit .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GridBoxes;
