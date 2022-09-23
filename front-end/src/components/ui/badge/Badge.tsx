import React from 'react'

const Badge = ({ number }: { number: number }) => {
  return (
    <div className="absolute bg-indigo-500 w-5 h-5 px-3 text-white -top-3.5 left-2.5 flex justify-center items-center rounded-md text-xs">
      {number}
    </div>
  )
}

export default Badge
