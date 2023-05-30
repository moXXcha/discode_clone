import React from "react";
import SearchChannel from "../atoms/searchChannel";
import UtilityButton from "../molecules/utilityButton";
import DMControle from "../molecules/DMControle";
import UserDM from "../molecules/userDM";
import UserProfile from "../molecules/userProfile";

const MainSideBar = () => {
  return (
    <div className="h-screen">
      <div className="w-32 h-[8%] border border-border rounded-md flex items-center justify-center">
        <SearchChannel />
      </div>
      <div className="w-32 h-[92%] border border-border rounded-md flex flex-col justify-between ">
        <div className="space-y-1 flex flex-col items-center">
          <UtilityButton status="friend" />
          <UtilityButton status="memo" />
          <DMControle />
          <UserDM src="/ojisan.jpg" name="ねむい" />
          <UserDM src="/ojisan.jpg" name="ねむい" />
          <UserDM src="/ojisan.jpg" name="ねむい" />
          <UserDM src="/ojisan.jpg" name="ねむい" />
          <UserDM src="/ojisan.jpg" name="ねむい" />
          <UserDM src="/ojisan.jpg" name="ねむい" />
        </div>
        <div>
          <UserProfile src="/ojisan.jpg" name="ちゃちゃ" id="@chacha" />
        </div>
      </div>
    </div>
  );
};

export default MainSideBar;
