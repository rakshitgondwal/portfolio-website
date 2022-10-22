import React from 'react'


function Cards(props) {
    return (
        <div className='flex flex-col items-center justify-center w-10/12   rounded-lg mb-6 '>
            <img src={props.stack} alt='projectImg' className='w-2/6 mt-4 hover:hue-rotate-180 duration-700' />
            <div className='flex flex-wrap items-center space-x-8 justify-center'>
            </div>
            <div>
                <p className='pt-14 mb-20 md:text-left text-center'>
                    {props.name}
                </p>
            </div>
        </div>
    )
}

export default Cards