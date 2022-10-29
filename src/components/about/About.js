import React from 'react'

const About = () => {
    return (
        <div id='About' className='flex flex-wrap items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white h-screen'>
            <div className='w-10/12 mt-6 md:mb-20'>
                <div>
                    <p className='text-6xl font-bold pb-14 text-center md:text-left'>About</p>
                </div>
                <div>
                    <p className='pt-14 text-center md:text-left text-xl'>
                        Hey! Rakshit Gondwal this side, I'm a sophomore currently pursuing my Bachelors from Punjab Engineering College. Other than being a student,
                        I love to explore different fields and I love to interact with new people. I love being active in communities and helping people out.
                        I'm always looking for distinct opportunities which can help me become a better version of myself.
                        <br></br>
                        <br></br>
                        <br></br>
                        Other than this, I'm Full Stack Web developer. I am proficient in various new techstacks such as ReactJs, TailwindCSS, Bootstrap, MongoDB, NodeJs.
                        I love to brainstorm ideas on which I can build and design software which solve a common problem.
                        <br></br><br></br>
                        Fun Fact-
                        <br></br>
                        I can code all day, if I get the right amount of caffeine.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default About