import React from 'react'
import {Link} from 'react-router-dom'
const TitleBar = () => {
  return (
    <>
    <Link to={"/"}>
        <h1 className='text-white text-center text-3xl'>Data Structure And Algorithm <br /> Visualize Mo</h1>
    </Link>
    </>
  )
}

export default TitleBar