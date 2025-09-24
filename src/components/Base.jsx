import React from 'react'
import Navbar from './Navbar'

const Base = ({child}) => {
  return (
    <div>
      <Navbar/>
      {child}
    </div>
  )
}

export default Base
