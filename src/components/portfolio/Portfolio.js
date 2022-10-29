import React from 'react'
import Cards from './components/Cards'

const Portfolio = () => {
    return (
        <div>
            <div id='Portfolio' className='flex flex-wrap items-center justify-center bg-gradient-to-b from-black to-gray-800 text-white h-full'>
                <div className='w-10/12 mb-20 '>
                    <div>
                        <p className='text-6xl font-bold  text-center md:text-left'>Projects</p>
                    </div>
                    <div>
                        <p className='pt-14 mb-20 md:text-left text-center text-xl'>
                            Check out some of my projects over here
                        </p>
                    </div>
                    <div>
                        <div className='grid grid-cold-1 md:grid-cols-2 place-items-center'>
                            <Cards name="Portfolio" image="/Portfolio.png" demo="https://dashing-rolypoly-179af6.netlify.app/" git="https://github.com/rakshitgondwal/portfolio-website" />
                            <Cards name="Jeevika" image="/Jeevika.png" demo="https://nameless-peak-56001.herokuapp.com/" git="https://github.com/rakshitgondwal/Jeevika" />
                            <Cards name="Affixity" image="/Affixity.png" demo="https://afternoon-lowlands-48391.herokuapp.com/" git="https://github.com/rakshitgondwal/Affixity" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio