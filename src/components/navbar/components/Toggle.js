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
            <div className='z-10 flex flex-col md:hidden cursor-pointer mr-2' onClick={changeToggle}>
                {toggle ? <FaTimes style={{color: 'white',zIndex: '10'}} size={30} /> : <FaBars color='white' size={30} />}
                {toggle && <List />}
            </div>
        </>
    )
}

export default Toggle