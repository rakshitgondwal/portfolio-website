import React from 'react'

const Cards = (props) => {
    return (
        <div className='flex flex-col items-center justify-center w-10/12  shadow-md shadow-cyan-600 rounded-lg mb-6 hover:scale-105 duration-200'>
            <img src={props.image} alt='projectImg' className='w-3/4 mt-4' />
            <div className='flex flex-wrap items-center space-x-8 justify-center'>

                <a href={props.demo}>
                    <button className='group text-white w-fit px-3 py-2 my-4 flex justify-center items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 hover:hue-rotate-180 duration-500 cursor-pointer '>
                        Demo
                    </button>
                </a>

                <a href={props.git} className='group text-white w-fit px-3 py-2 my-4 flex justify-center items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 hover:hue-rotate-180 duration-500 cursor-pointer '>
                    
                        Github
                    
                </a>

            </div>

        </div>
    )
}


export default Cards