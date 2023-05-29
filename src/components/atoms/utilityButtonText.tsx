import React from 'react'

type Status = "friend" | "memo"
type Props = {
    status: Status
}

const getText = (status: Status) => {
    switch (status) {
        case "friend": {
            return  "フレンド"
        }
        case "memo": {
            return "メモ"
        }
        default: {
            return ""
        }
    }
}
const UtilityButtonText = (props: Props) => {
    const text = getText(props.status)
  return (
    <div>
        <p className="text-xs font-bold">{text}</p>
    </div>
  )
}

export default UtilityButtonText