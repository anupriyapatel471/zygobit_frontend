// import Image from "next/image";
import Image from "next/image";
import { Input, TextArea } from "../../components/ui/contactInput";

const ConnectForm = () => {
  return (
    <>
      <div data-aos="fade-left" className="w-auto lg:px-8">
        <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-gradiant-custom">
          Let’s connect
        </h2>
        <p className="text-sm sm:text-lg tracking-tighter pt-2 pb-5 sm:pb-10">
          Let&apos;s align our constellations! Reach out and let the magic of
          collaboration illuminate our skies.
        </p>
        <div className="w-full grid grid-cols-1 gap-4">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="First Name" type="text" />
            <Input placeholder="Last Name" type="text" />
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Phone Number" type="number" />
            <Input placeholder="Job Title" type="text" />
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Company Name" type="text" />
            <Input placeholder="Company Email" type="email" />
          </div>
          <div className="w-full">
            <Input
              placeholder="When do you want to launch a solution?"
              type="text"
            />
          </div>
          <div className="w-full">
            <Input placeholder="Budget :" type="text" />
          </div>
          <div className="w-full">
                <TextArea
                  className="resize-none w-full text-sm sm:text-base h-16 md:h-20 lg:h-32 border border-white/20 bg-zinc-800 p-3 rounded-md outline-none"
                  placeholder="About Project"
                ></TextArea>
              </div>
          <button className="group bg-gradient-custom overflow-hidden font-medium transition-all duration-500 btn-primary text-white relative">
            Let’s Build
            {/* <img
                  className="group-hover:translate-x-64 transition-all duration-1000"
                  src="images/rocket.svg"
                  alt=""
                /> */}
            <Image
              className="group-hover:translate-x-64 transition-all duration-1000"
              src="/images/rocket.svg"
              alt="Rocket Icon"
              // layout="responsive" // Use intrinsic to maintain aspect ratio
              width={13.73} // Set the width for the image (adjust as needed)
              height={28.59} // Set the height for the image (adjust as needed)
            />
            <BottomGradient />
          </button>
        </div>
      </div>
    </>
  );
};
export default ConnectForm;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
