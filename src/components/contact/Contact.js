import React from 'react'

const Contact = () => {
    return (
        <div>
            <div id='Contact' className='flex flex-wrap items-center justify-center bg-gradient-to-b from-black to-gray-800 text-white h-screen'>
                <div className='w-10/12 mb-20 '>
                    <div>
                        <p className='text-6xl font-bold  text-center md:text-left'>Contact</p>
                    </div>
                    <div>
                        <p className='pt-14 mb-20 md:text-left text-center'>
                            Submit the form below to get in touch with me-
                        </p>
                    </div>
                    <div className='flex  items-center justify-center'>
                        <form action="/action_page.php" className='flex flex-col w-full md:w-1/2'>
                            <input type="text" id="fname" name="fname" className='bg-transparent border-2  border-color-white p-2 ' size={30} placeholder="Enter you name" /><br /><br />
                            <input type="text" id="lname" name="email" className='bg-transparent border-2 border-color-white p-2' size={30} placeholder="Enter you email" /><br /><br />
                            <textarea name="comment" rows={2} cols={31} className='bg-transparent border-2  border-color-white p-2'></textarea><br />
                            <button type='submit' className='group text-white w-fit px-3 py-2 my-4 flex justify-center items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 hover:hue-rotate-180 duration-500 cursor-pointer '>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact