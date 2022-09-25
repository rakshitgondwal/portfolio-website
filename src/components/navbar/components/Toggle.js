import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


function Toggle() {

    const [toggle, setToggle] = useState(false);

    function changeToggle() {
       setToggle(!toggle)
    }

    return (
        <div className='z-10 flex flex-col md:hidden cursor-pointer mr-2' onClick={changeToggle}>
            {toggle ? <FaTimes color='white' size={30} /> : <FaBars color='white' size={30}/>}
        </div>
    )
}

export default Toggle