import React from 'react'
import Image from 'next/image'

type Props = {
    src: string
}
const UserIcon = (props: Props) => {
  return (
    <div className="w-5 h-5 rounded-full relative">
        <Image className="rounded-full" src={props.src} fill alt="profileImage" />
    </div>
  )
}

export default UserIcon