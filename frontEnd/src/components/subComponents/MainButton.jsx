import React from 'react'

function MainButton({name,onClick}) {
  return (
    <button className='bg-blue-600 px-4 py-2 rounded-3xl cursor-pointer hover:bg-blue-700 text-white font-sans font-bold'
    onClick={onClick}>
      {name||"Button"}
    </button>
  )
}

export default MainButton