import React from 'react'


type Status = "オンライン" | "全て表示" | "保留中" | "ブロック中"

type Props = {
    status :Status
}

const getText = (status: Status) => {
    switch (status) {
        case "オンライン": {
            return "オンライン"
        }
        case "全て表示": {
            return "全て表示"
        }
        case "保留中": {
            return "保留中"
        }
        case "ブロック中": {
            return "ブロック中"
        }
        default: {
            return ""
        }
    }
}
const SortUserButton = (props: Props) => {
    const text = getText(props.status)
  return (
    <p className="mt-8">aaa</p>
  )
}

export default SortUserButton