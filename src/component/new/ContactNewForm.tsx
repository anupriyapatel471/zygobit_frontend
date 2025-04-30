/* eslint-disable @typescript-eslint/no-unused-vars */
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Rocket from "../../../public/images/rocket.svg";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function ContactBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <div className="">
            <button className="pulse-button-contact">
              <span></span>
            </button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] lg:max-w-[1150px] rounded-none p-0 z-[9999]">
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
          <div className="w-full sm:w-3/5 p-4 sm:p-10 sm:pl-0">
            <h2 className="font-bold text-2xl sm:text-[34px] text-black mb-2">
              Let’s connect to{" "}
              <span className="text-orange-600">succeed your Business!</span>
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                name="firstName"
                className="bg-black/5 placeholder:text-black/60 text-black border-black/20 text-xs lg:text-xs h-10 sm:h-11 font-normal"
                placeholder="First Name"
                type="text"
              />
              <Input
                name="lastName"
                className="bg-black/5 placeholder:text-black/60 text-black border-black/20 text-xs lg:text-xs h-10 sm:h-11 font-normal"
                placeholder="Last Name"
                type="text"
              />
              <Input
                name="PhoneNumber"
                className="bg-black/5 placeholder:text-black/60 text-black border-black/20 text-xs lg:text-xs h-10 sm:h-11 font-normal"
                placeholder="Phone Number"
                type="number"
              />
              <Input
                name="CompanyName"
                className="bg-black/5 placeholder:text-black/60 text-black border-black/20 text-xs lg:text-xs h-10 sm:h-11 font-normal"
                placeholder="Company Name"
                type="text"
              />
              <Input
                name="Budget"
                className="bg-black/5 placeholder:text-black/60 text-black col-span-1 sm:col-span-2 border-black/20 text-xs lg:text-xs h-10 sm:h-11 font-normal"
                placeholder="Budget :"
                type="text"
              />
              <textarea
                className="resize-none placeholder:text-black/60 text-black bg-black/5 col-span-1 sm:col-span-2 w-full text-xs lg:text-xs h-16 md:h-20 lg:h-32 border border-black/20 p-3 rounded-md outline-none"
                placeholder="About Project"
              ></textarea>
              <button
                type="submit"
                className="group bg-orange-600 hover:bg-orange-500 sm:h-12 col-span-1 sm:col-span-2 overflow-hidden font-medium transition-all duration-500 btn-primary text-white relative"
              >
                Let’s Build
                <Image
                  className="group-hover:translate-x-64 transition-all duration-1000"
                  src={Rocket}
                  alt="Rocket Icon"
                  width={13.73}
                  height={28.59}
                />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
