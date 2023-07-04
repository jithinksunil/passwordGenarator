import React from 'react'
import Screen from './subComponents/Screen'
import Controller from './subComponents/Controller'

function Body() {
  return (
    <div className='flex flex-col flex-grow items-center justify-center text-gray-700 '>
        <Screen/>
        <Controller/>
    </div>
  )
}

export default Body