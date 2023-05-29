import React from 'react'

type Props = {
    id: string
}
const UserId = (props: Props) => {
  return (
    <p className="text-[8px] text-secondText">{props.id}</p>
  )
}

export default UserId