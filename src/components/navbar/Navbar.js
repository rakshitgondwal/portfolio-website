import React from 'react'
import Signature from './components/Signature'
import Button from './components/Button'

const Navbar = () => {
    return (

        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-black">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                {/* <a class="flex items-center">
                    <span className=" ml-2 text-4xl whitespace-nowrap dark:text-white font-signature">Rakshit</span>
                </a> */}
                <Signature />
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
                        <Button name="Home" />
                        <Button name="About" />
                        <Button name="Portfolio" />
                        <Button name="Contact" />
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar