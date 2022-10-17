import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'

const Content = () => {
    return (
        <div className='flex flex-col justify-center items-center md:items-start h-full mx-3'>
            <h2 className='text-4xl font-bold md:text-6xl my-2 flex text-center md:text-left'>I'm a Full-Stack Web Developer</h2>
            <p className='md:w-3/4 my-4 text-center md:text-left'>
                I love to build and design softwares.
                Curently, I love to work on web application using
                technologies like React, Tailwind, MongoDB.
            </p>

            <button className='group text-white w-fit px-5 py-3 my-2 flex justify-center items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 hover:hue-rotate-180 duration-500 cursor-pointer '>
                Portfolio
                <span className='ml-2 group-hover:rotate-90 duration-300' >
                    <BsArrowRightCircle />
                </span>
            </button>
        </div>
    )
}

export default Content