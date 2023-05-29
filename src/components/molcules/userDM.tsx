import React from "react";
import UserIcon from "../atoms/userIcon";
import UserName from "../atoms/userName";

type Props = {
    src: string
    name: string
}
const UserDM = (props: Props) => {
  return (
    <div className="bg-secondary w-24 h-8 flex items-center px-2 rounded-md">
      <UserIcon src={props.src} />
      <div className="ml-5">
        <UserName name={props.name} />
      </div>
    </div>
  );
};

export default UserDM;
