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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function WebInput() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">
          Website <span className="text-red-500 text-lg">*</span>
        </Label>
        <div className="relative flex items-center rounded-md border border-primary bg-transparent">
          <div className="w-auto border-0  border-r-[1px] cursor-no-drop border-r-primary h-full border-t-none p-3 bg-transparent text-muted-foreground">http://</div>
          <Input
            type="text"
            id="text"
            className="h-9 md:h-10 lg:h-11 border-none   rounded-none  bg-transparent"
            placeholder="www.figma.com"
          />
        </div>
      </div>
    </>
  );
}
