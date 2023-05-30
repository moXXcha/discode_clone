import React from 'react'
import UtilityButtonImage from '../atoms/utilityButtonImage'
import UtilityButtonText from '../atoms/utilityButtonText';

type Status = "friend" | "memo"
type Props = {
    status : Status;
}
const UtilityButton = (props: Props) => {
  return (
    <div className="w-24 h-8 bg-secondary flex justify-between px-2 items-center rounded-md">
        <UtilityButtonImage status={props.status} />
        <UtilityButtonText status={props.status} />
    </div>
  )
}

export default UtilityButton