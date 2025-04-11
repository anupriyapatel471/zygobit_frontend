import { CardSpotlight } from "@/components/ui/card-spotlight";

export function SliderHoverCards() {
  return (
    <>
      <div className="w-full absolute top-0 left-0 h-full z-10">
        <CardSpotlight className="absolute top-0 left-0 w-full h-full text-left  rounded-xl bg-white/5">
          <div></div>
        </CardSpotlight>
      </div>
    </>
  );
}
