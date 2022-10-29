import React from 'react'

const About = () => {
    return (
        <div name='About' className='flex flex-wrap items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white h-screen'>
            <div className='w-10/12 mt-6 md:mb-20'>
                <div>
                    <p className='text-6xl font-bold pb-14 text-center md:text-left'>About</p>
                </div>
                <div>
                    <p className='pt-14 text-center md:text-left'>
                        I'm Rakshit Gondwal, currently a sophomore at Punjab Engineering College. Other than being a student,
                        I love to explore different fields and to interact with new people. I try to learn one new thing everyday.
                        I'm always looking for various opportunities which can help me become a better version of myself.
                        <br></br>
                        <br></br>
                        <br></br>
                        Other than this Full Stack web developer. I am proficient in various new techstacks such as ReactJs, TailwindCSS, Bootstrap, MongoDB, NodeJs.
                        I love to brainstorm ideas on which I can build and design software which solve a common problem. I'm a also a good team leader, I've lead different teams in hackathons, thus creating a software overnight.
                        I can code all day, if I get the right amount of caffeine.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default About