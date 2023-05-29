import React from "react";
import UserIcon from "../atoms/userIcon";
import UserName from "../atoms/userName";

const UserDM = () => {
  return (
    <div className="bg-secondary w-24 h-8 flex items-center px-2 rounded-md">
      <UserIcon src="/ojisan.jpg" />
      <div className="ml-5">
        <UserName name="ねむい" />
      </div>
    </div>
  );
};

export default UserDM;
