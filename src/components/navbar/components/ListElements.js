import React from 'react'

const ListElements = (props) => {
  return (
    <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200">{props.name}</li>
  )
}

export default ListElements