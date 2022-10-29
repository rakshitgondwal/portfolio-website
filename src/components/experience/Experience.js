import React from 'react'
import Cards from './components/Cards'

const Experience = () => {
    return (
        <div id='Experience' className=' flex flex-wrap items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white h-full'>
            <div className='w-10/12 mt-20 '>
                <div>
                    <p className='text-6xl font-bold  text-center md:text-left'>Experience</p>
                </div>
                <div>
                    <p className='pt-14 mb-20 md:text-left text-center'>
                        Here are some of the technologies I've worked with
                    </p>
                </div>
                <div>
                    <div className='grid grid-cols-2 md:grid-cols-3 place-items-center'>
                        <Cards stack="/assets/html.png" name="HTML" />
                        <Cards stack="/assets/css3.png" name="CSS" />
                        <Cards stack="/assets/javascript.png" name="Javascript" />
                        <Cards stack="/assets/react.png" name="React" />
                        <Cards stack="/assets/node-js.png" name="Node.js" />
                        <Cards stack="/assets/mongodb.png" name="MongoDB" />
                        <Cards stack="/assets/tailwind.png" name="Tailwind" />
                        <Cards stack="/assets/docker.png" name="Docker" />
                        <Cards stack="/assets/kubernetes.png" name="Kubernetes" />
                        <Cards stack="/assets/git.png" name="Git" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience