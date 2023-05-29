import React from 'react'
import Friend from "@/../public/friend.svg"
import Memo from "@/../public/memo.svg"
import Image from 'next/image'

type Status = "friend" | "memo"
type Props = {
    status : Status;
}

const getImage = (status: Status) => {
    switch (status) {
        case "friend" : {
            return Friend;
        }
        case "memo" : {
            return Memo;
        }
        default : {
            return ""
        }
    }
}
const UtilityButtonImage = (props: Props) => {
    const image = getImage(props.status);
  return (
    <div>
        <Image src={image} width="18" height="18" alt="friend" />
    </div>
  )
}

export default UtilityButtonImage