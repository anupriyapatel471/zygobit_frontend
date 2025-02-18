import Ripple from "@/components/ui/ripple";

export default function RippleBg({numCircles}:{numCircles:number}) {
  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center">
      <Ripple numCircles={numCircles} />
    </div>
  );
}
