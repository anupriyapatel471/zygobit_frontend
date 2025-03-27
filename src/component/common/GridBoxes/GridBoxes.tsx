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
        <div className="w-full px-4 lg:px-20 sm:text-center mb-8 sm:mb-12 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gradiant-custom">
            {GridBoxesHeading}
          </h2>
          <p className="sm:font-medium text-sm sm:text-lg lg:text-xl max-w-7xl mx-auto mt-2">
            {GridBoxesDetail}
          </p>
        </div>
        <div className="w-full px-5 lg:px-24">
          <MobileAppGrid cards={cards} />
        </div>
      </section>
    </>
  );
};
export default GridBoxes;
