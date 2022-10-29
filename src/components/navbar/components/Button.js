import React from 'react'
import { Link } from "react-scroll";

function Button(props) {
  return (
    <div>
      <li className="block cursor-pointer py-2 pr-4 pl-3 font-semibold hover:scale-105 duration-200 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700">
        <Link to={props.link} smooth duration={500} ></Link>
       {props.name}
      </li>
    </div>
  )
}

export default Button