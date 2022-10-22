import React from 'react'

const Contact = () => {
    return (
        <div>
            <div name='about' className='flex flex-wrap items-center justify-center bg-gradient-to-b from-black to-gray-800 text-white h-screen'>
                <div className='w-10/12 mb-20 '>
                    <div>
                        <p className='text-6xl font-bold  text-center md:text-left'>Contact</p>
                    </div>
                    <div>
                        <p className='pt-14 mb-20 md:text-left text-center'>
                            Submit the form below to get in touch with me-
                        </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <form action="/action_page.php">
                            <input type="text" id="fname" name="fname" className='bg-transparent border-2  border-color-white p-2' size={60} placeholder="Enter you name" /><br /><br />
                            <input type="text" id="lname" name="email" className='bg-transparent border-2 border-color-white p-2' size={60} placeholder="Enter you email" /><br /><br />
                            <textarea  name="comment" rows={4} cols={60} className='bg-transparent border-2  border-color-white p-2'
                            placeholder='Enter your message' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact