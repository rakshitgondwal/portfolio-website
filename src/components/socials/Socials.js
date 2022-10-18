import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
      <div className='bg-cyan-900 hover:hue-rotate-180 duration-1000 hover:rounded-md '>
        <li className=' flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px]  duration-300 '>  
          <a href='https://www.linkedin.com/in/rakshit-gondwal-911223230/' className='flex justify-between items-center w-full text-white'>
            <>
              LinkedIn <FaLinkedinIn size={30} />
            </>
          </a>                
        </li>
        </div>
      </ul>
    </div>
  )
}

export default Socials