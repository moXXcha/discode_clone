import React from 'react'
import Plus from '@/../public/plusButton.svg'
import Image from 'next/image'

const PlusButton = () => {
  return (
    <button className="w-14 h-14 rounded-full bg-[#303338 block">
        <Image src={Plus} width="29" height="29" alt="plus" className="mx-auto"/>
    </button>
  )
}

export default PlusButton