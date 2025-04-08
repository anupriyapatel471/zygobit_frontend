import { MobileAppGrid } from "@/component/common/MobileAppGrid/MobileAppGrid";

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
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-gradiant-custom">
              {GridBoxesHeading}
            </h2>
            <p className="sm:font-medium text-sm sm:text-lg lg:text-xl max-w-7xl mx-auto mt-2">
              {GridBoxesDetail}
            </p>
          </div>
          <div className="w-full ">
            <MobileAppGrid cards={cards} />
          </div>
        </div>
      </section>
    </>
  );
};
export default GridBoxes;
