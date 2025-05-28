import React from "react";
import SmallText from "../atoms/SmallText";
import { ChevronDown } from "lucide-react";

function DropDown({ children }) {
  return (
    <div className="flex flex-row items-center p-3 pt-1 pb-1 bg-[var(--color-tertiary)] rounded-full size-fit cursor-pointer">
      <SmallText>{children}</SmallText>
      <ChevronDown strokeWidth={"1px"} />
    </div>
  );
}

export default DropDown;
