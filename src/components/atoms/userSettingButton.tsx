import React from 'react'
import Image from 'next/image'

const UserSettingButton = () => {
  return (
    <button>
        <Image src="/userSetting.svg" width="16" height="16" alt="setting" />
    </button>
  )
}

export default UserSettingButton