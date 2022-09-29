import React from 'react'

const ListElements = (props) => {
  return (
    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">{props.name}</li>
  )
}

export default ListElements