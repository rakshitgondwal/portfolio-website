import React from 'react' 
import { FaLinkedinIn } from 'react-icons/fa'  

const Socials = () => {
  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className=' flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 bg-gray-600'>
                <a href='' className='flex justify-between items-center w-full text-white'/>
                <>
                LinkedIn <FaLinkedinIn size={30}/>
                </>
            </li>
        </ul>
    </div>
  )
}

export default Socials