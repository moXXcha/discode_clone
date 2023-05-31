import React from "react";
import UtilityButton from "../molecules/utilityButton";
import SortUserButton from "../atoms/sortUserButton";
import AddFriendButton from "../atoms/addFriendButton";

const statuses = ["オンライン", "全て表示", "保留中", "ブロック中"]
const MainHeader = () => {
  return (
    <div className="flex w-10/12 border border-border rounded-md">
      <div className="px-6">
        <div className="border-r pr-6">
          <UtilityButton status="friend" />
        </div>
      </div>
      <div className="space-x-6">
        <SortUserButton status="オンライン" />
        <SortUserButton status="全て表示" />
        <SortUserButton status="保留中" />
        <SortUserButton status="ブロック中" />
        <AddFriendButton />
      </div>
    </div>
  );
};

export default MainHeader;
