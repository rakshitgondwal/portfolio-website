import React from 'react'
import Signature from './components/Signature'
import Button from './components/Button'
import Toggle from './components/Toggle'


const Navbar = () => {
    return (

        <nav class="sticky z-1 top-0 bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-black">
            <div class="container flex flex-wrap justify-between items-center mx-auto ">
                <Signature />
                <Toggle />
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
                        <Button name="Home" link="Home" />
                        <Button name="About" link="About" />
                        <Button name="Portfolio" link="Portfolio" />
                        <Button name="Experience" link="Experience" />
                        <Button name="Contact" link="Contact" />
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar