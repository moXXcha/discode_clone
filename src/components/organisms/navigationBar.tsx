import React from "react";
import DiscodeIcon from "../atoms/discodeIcon";
import ServerIcon from "../atoms/serverIcon";
import PlusButton from "../atoms/plusButton";

const NavigationBar = () => {
  return (
    <div className="w-28 bg-navigation">
      <DiscodeIcon />
      <ServerIcon src="/ojisan.jpg" />
      <PlusButton />
    </div>
  );
};

export default NavigationBar;
