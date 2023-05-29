import React from 'react'
import Image from 'next/image'

const MenuButton = () => {
  return (
    <button className="w-4 h-4 rounded-full bg-primary">
        <Image src="/menu.svg" width="3" height="11" alt="menu" className="mx-auto" />
    </button>
  )
}

export default MenuButton