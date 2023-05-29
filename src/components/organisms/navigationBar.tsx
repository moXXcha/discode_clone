import React from "react";
import DiscodeIcon from "../atoms/discodeIcon";
import ServerIcon from "../atoms/serverIcon";
import PlusButton from "../atoms/plusButton";

const NavigationBar = () => {
  return (
    <div className="w-28 h-screen bg-navigation flex flex-col items-center pt-2">
      <div className="mb-3">
      <DiscodeIcon />
      <label className="h-[1px] w-10 border-b block mx-auto mt-2"></label>
      </div>
      <div className="mb-3">
      <ServerIcon src="/ojisan.jpg" />
      </div>
      <PlusButton />
    </div>
  );
};

export default NavigationBar;
