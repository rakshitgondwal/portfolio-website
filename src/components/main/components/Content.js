import React from 'react'
import Button from './Button'
import Text from './Text'

const Content = () => {
    return (
        <div className='flex flex-col justify-center items-center md:items-start h-full mx-3'>
            <Text />
            <Button />
        </div>
    )
}

export default Content