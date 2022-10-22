import React from 'react'

const Cards = () => {
    return (
        <div className='flex flex-col items-center justify-center w-10/12  shadow-md shadow-cyan-600 rounded-lg mb-6 hover:scale-105 duration-200'>
            <img src="/profile.jpg" alt='projectImg' className='w-1/4 mt-4' />
            <div className='flex flex-wrap items-center space-x-8 justify-center'>

                <button className='group text-white w-fit px-3 py-2 my-4 flex justify-center items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 hover:hue-rotate-180 duration-500 cursor-pointer '>
                    Demo
                </button>

                <button className='group text-white w-fit px-3 py-2 my-4 flex justify-center items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 hover:hue-rotate-180 duration-500 cursor-pointer '>
                    Github
                </button>
            </div>

        </div>
    )
}

export default Cards