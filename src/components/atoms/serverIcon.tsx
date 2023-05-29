import React from "react";
import Image from "next/image";

type Props = {
  src: string;
};

const ServerIcon = (props: Props) => {
  return (
    <button className="w-14 h-14 relative rounded-full block">
      <Image src={props.src} fill alt="server icon" className="rounded-full" />
    </button>
  );
};

export default ServerIcon;
