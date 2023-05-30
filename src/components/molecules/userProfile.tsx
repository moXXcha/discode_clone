import React from 'react'
import UserIcon from '../atoms/userIcon'
import UserName from '../atoms/userName'
import UserId from '../atoms/userId'
import UserSettingButton from '../atoms/userSettingButton'

type Props = {
    src: string
    name: string
    id: string
}
const UserProfile = (props: Props) => {
  return (
    <div className="flex items-center w-32 h-8 bg-primary px-1">
        <UserIcon src={props.src} />
        <div className="ml-1">
            <UserName name={props.name} />
            <UserId id={props.id} />
        </div>
        <div className="ml-auto">
        <UserSettingButton />
        </div>
    </div>
  )
}

export default UserProfile