import React from 'react'
import ListElements from './ListElements'

const toggleList = () => {
  return (
    <div>
      <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <ListElements name="Home" link="Home" />
        <ListElements name="About" link="About" />
        <ListElements name="Portfolio" link="Portfolio" />
        <ListElements name="Experience" link="Experience" />
        <ListElements name="Contact" link="Contact" />
      </ul>
    </div>
  )
}

export default toggleList