import React from "react";
import Image from "next/image";
import UserIcon from "../atoms/userIcon";
import DMButton from "../atoms/DMButton";
import MenuButton from "../atoms/menuButton";
import UserName from "../atoms/userName";
import IsOnline from "../atoms/isOnline";

const OnlineUser = () => {
  return (
    <div className="w-5/6 h-10 bg-secondary flex px-2 rounded-md items-center">
      <div className="flex">
        <UserIcon src="/ojisan.jpg" />
        <div className="ml-2">
          <UserName name="chacha" />
          <IsOnline />
        </div>
      </div>
      <div className="ml-auto flex">
        <div className="mr-2">
        <DMButton />
        </div>
        <MenuButton />
      </div>
    </div>
  )
}

export default OnlineUser