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

export default function AmountInput() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">
          Amount <span className="text-red-500 text-lg">*</span>
        </Label>
        <div className="relative">
          <Input
            type="text"
            id="text"
            className="h-9 md:h-10 lg:h-11"
            placeholder="$ &nbsp; 1,000.00"
          />
          <div className="absolute top-2 right-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="bg-transparent p-0 w-fit h-auto hover:text-white border-none focus:outline-none focus-visible:ring-offset-0"
                  variant="outline"
                >
                  USD <ChevronDownIcon className="w-10 h-10" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-2">
                <DropdownMenuCheckboxItem
                  className=""
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  $50
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showPanel}
                  onCheckedChange={setShowPanel}
                >
                  $100
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showPanel}
                  onCheckedChange={setShowPanel}
                >
                  $200
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
}
