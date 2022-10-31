import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'
import { Link } from "react-scroll";


const Button = () => {
    return (
        <button className='group text-white w-fit px-5 py-3 my-2 flex justify-center items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 hover:hue-rotate-180 duration-500 cursor-pointer '>
            <Link to="Portfolio" smooth duration={500} >Portfolio</Link>
            <span className='ml-2 group-hover:rotate-90 duration-300' >
                <BsArrowRightCircle />
            </span>
        </button>
    )
}

export default Button