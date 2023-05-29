import React from 'react'
import Image from 'next/image'

const DMButton = () => {
  return (
    <button className="bg-primary w-4 h-4 rounded-full">
        <Image src="/DM.svg" width="8" height="8" alt="DM" className="mx-auto" />
    </button>
  )
}

export default DMButton