"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function PhoneInputNumber() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">
          Phone number <span className="text-red-500 text-lg">*</span>
        </Label>
        <div className="relative flex items-center rounded-md border border-primary bg-transparent">
          <div className="w-auto px-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="bg-transparent focus:outline-none focus-visible:ring-0 p-0 w-fit h-auto hover:text-white border-none  focus-visible:ring-offset-0"
                  variant="outline"
                >
                  US <ChevronDownIcon className="w-10 h-10" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-2">
                <DropdownMenuCheckboxItem
                  className=""
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  IND
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showPanel}
                  onCheckedChange={setShowPanel}
                >
                  ENG
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showPanel}
                  onCheckedChange={setShowPanel}
                >
                  UK
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Input
            type="number"
            id="number"
            className="h-9 md:h-10 lg:h-11  rounded-none border-none bg-transparent"
            placeholder="+1 (333) 000-0000"
          />
        </div>
      </div>
    </>
  );
}
