import React from 'react'
import ListElements from './ListElements'

const toggleList = () => {
  return (
    <div>
      <ul className="z-9 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <ListElements name="Home" />
        <ListElements name="About" />
        <ListElements name="Portfolio" />
        <ListElements name="Contact" />
      </ul>
    </div>
  )
}

export default toggleList