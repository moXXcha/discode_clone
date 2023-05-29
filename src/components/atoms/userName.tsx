import React from 'react'

type Props = {
    name: string
}
const UserName = (props: Props) => {
  return (
    <p className="text-[8px] font-bold">{props.name}</p>
  )
}

export default UserName