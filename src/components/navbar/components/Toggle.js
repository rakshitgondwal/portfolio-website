import React from 'react'
import { FaBars, FaTiles } from 'react-icons/fa'

const Toggle = () => {
    return (
        <div className='z-10 flex flex-col md:hidden cursor-pointer mr-2'>
            <FaBars color='white' size={30} />
        </div>
    )
}

export default Toggle