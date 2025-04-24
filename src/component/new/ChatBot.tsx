"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { CrossCircledIcon } from "@radix-ui/react-icons";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function ChatBotBtn() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* chat bot btn*/}
        <Button className="bg-transparent hover:bg-transparent border-none p-0 w-auto h-auto fixed bottom-8 right-8 z-50">
          <Image
            width={36}
            height={40}
            className="object-contain w-9 h-10"
            src="/images/chatbot.svg"
            alt="icon"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[465px] right-10 rounded-2xl relative p-4 sm:p-5">
        <div className="w-full">
          <div className="w-full relative rounded-2xl bg-[#EA580C] flex gap-5 items-center p-5">
            <div className="relative">
              <Image
                width={28}
                height={44}
                className="brightness-0 invert object-contain w-7 h-11"
                src="/images/g_new.svg"
                alt="icon"
              />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-white">
                Talk to Zygobit
              </h4>
              <p className="font-medium text-xs mt-0.5 text-white">
                Usual reply time: 2 to 3 minutes
              </p>
            </div>
            <div className="absolute top-4 right-5">
              <Button
                className="bg-transparent border-none p-0 hover:bg-transparent"
                type="button"
                variant="secondary"
              >
                <Image width={18} height={18} className="w-5 h-5" src="/images/close_chatbot_icon.svg" alt="icon" />
              </Button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 justify-end h-[250px] overflow-y-auto mt-5 mb-8 ">
            <div className="w-full flex gap-4 items-end">
              <div className="relative">
                <Image
                  width={21}
                  height={32}
                  className="object-contain w-5 h-8"
                  src="/images/g_new.svg"
                  alt="icon"
                />
              </div>
              <div className="font-normal text-[#8E8E93] py-5 px-4 w-fit text-sm sm:text-sm bg-[#F2F2F7] rounded-bl-none rounded-3xl">
                Hi! I am ChatBot. Welcome to Zygobit.
              </div>
            </div>
          </div>
          <div className="w-full shadow-[5px_4px_20px_0_#00000021] bg-white rounded-[30px] flex justify-between py-2 px-5">
            <Input
              className="outline-none text-sm sm:text-sm lg:text-sm text-black font-normal placeholder:text-[#AEAEB2] border-none bg-white"
              placeholder="Write your message"
              type="text"
            />
            <Button className="border-none bg-transparent hover:bg-transparent p-0">
              <Image
                width={24}
                height={24}
                src="/images/send_icon.svg"
                alt="icon"
              />
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
