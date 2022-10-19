import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import List from './List';


function Toggle() {

    const [toggle, setToggle] = useState(false);

    function changeToggle() {
        setToggle(!toggle)
    }

    return (
        <>
            <div className='right-0 toggle z-10 flex flex-col md:hidden cursor-pointer sm:ml-6' onClick={changeToggle}>
                {toggle ? <FaTimes style={{color: 'white',zIndex: '10'}} size={30} /> : <FaBars color='white' size={30} />}
            </div>
            <div>
                {toggle && <List />}
            </div>
        </>
    )
}

export default Toggle