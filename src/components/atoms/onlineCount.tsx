import React from 'react'

type Props = {
    count: number
}
const OnlineCount = (props:Props) => {
  return (
    <p className="text-xs">オンラインー{props.count}</p>
  )
}

export default OnlineCount