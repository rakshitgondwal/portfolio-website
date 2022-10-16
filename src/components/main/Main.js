import React from 'react'
import Profile from './components/Profile.js'
import Content from './components/Content.js'


const Main = () => {
  return (
    <>
      <div name="home" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg flex flex-col h-full mx-auto justify-center items-center px-4 md:flex-row'>
          <Content />
          <Profile />
        </div>
      </div>


    </>
  )
}

export default Main