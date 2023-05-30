import React from 'react'
import DMIndicater from '@/components/atoms/DMIndicater'
import DMAddButton from '../atoms/DMAddButton'

const DMControle = () => {
  return (
    <div className="flex w-24 items-center px-2 border">
        <DMIndicater />
        <DMAddButton />
    </div>
  )
}

export default DMControle