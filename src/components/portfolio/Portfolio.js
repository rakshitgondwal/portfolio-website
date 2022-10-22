import React from 'react'
import Cards from './components/Cards'

const Portfolio = () => {
    return (
        <div>
            <div name='about' className='flex flex-wrap items-center justify-center bg-gradient-to-b from-black to-gray-800 text-white h-full'>
                <div className='w-10/12 mb-20 '>
                    <div>
                        <p className='text-6xl font-bold  text-center md:text-left'>Projects</p>
                    </div>
                    <div>
                        <p className='pt-14 mb-20 md:text-left text-center'>
                            Check out some of my projects over here
                        </p>
                    </div>
                    <div>
                        <div className='grid grid-cold-1 md:grid-cols-2 place-items-center'>
                            <Cards />
                            <Cards />
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio