/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Rocket from "../../../public/images/contact_btn.svg";

export function ContactAKnowledge({
  loading,
  isSubmitted,
  setIsSubmitted,
}: {
  loading: boolean;
  isSubmitted: boolean;
  setIsSubmitted: any;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="submit"
          className="group bg-gradient-custom overflow-hidden font-medium transition-all duration-500 btn-primary text-white relative"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Let’s Build"}
          <Image
            className="group-hover:translate-x-5 transition-all duration-1000"
            src={Rocket}
            alt="Rocket Icon"
            width={13.73}
            height={28.59}
          />
          {/* <BottomGradient /> */}
        </button>
      </DialogTrigger>
      {isSubmitted && (
        <DialogContent className="max-w-[90%] lg:max-w-[1150px] rounded-xl p-0 z-[9999]">
          <div className="w-full flex gap-10">
            <div className="hidden sm:inline w-2/5 p-5 relative">
              <Image
                className="w-[325px] object-contain"
                src="/images/form_g.svg"
                width={325}
                height={485}
                alt="icon"
              />
              <Image src="/images/form_bg.png" fill alt="background image" />
            </div>
            <div className="w-full sm:w-3/5 p-6 sm:p-10 sm:pl-0">
              <div className="text-center w-full  sm:w-[400px] mx-auto lg:mt-28">
                <h2 className="font-bold lg:whitespace-nowrap text-2xl sm:text-[34px] text-black mb-4">
                  Thanks for reaching out!
                </h2>
                <p className="text-black text-sm sm:text-base">
                  Our team will get back to you shortly.
                </p>
                <p className="text-black text-sm sm:text-base pb-4">
                  We appreciate your interest and look forward to connecting
                  with you.
                </p>
                <button
                  type="submit"
                  className="group bg-orange-600 hover:bg-orange-500 sm:h-12 col-span-1 sm:col-span-2 w-full overflow-hidden font-medium transition-all duration-500 btn-primary text-white relative"
                  onClick={() => {
                    setIsSubmitted(false);
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//     </>
//   );
// };
