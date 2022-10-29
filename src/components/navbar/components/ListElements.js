import React from 'react'
import { Link } from "react-scroll";

const ListElements = (props) => {
  return (
    <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200">
      <Link to={props.link} smooth duration={500} ></Link>
      {props.name}
      </li>
  )
}

export default ListElements