import React from "react";
import Image from "next/image";
import Icon from "@/../public/Icon.svg";

const DiscodeIcon = () => {
  return (
    <button className="w-14 h-14 bg-[#5764F2] rounded-xl block">
      <Image src={Icon} width="50" height="28" alt="Icon" className="mx-auto" />
    </button>
  );
};

export default DiscodeIcon;
