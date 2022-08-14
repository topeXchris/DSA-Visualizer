import React from 'react'

const Line = ({animate}) => {
  return (
    <>
       <div className='line md:flex justify-start items-center'>
       <div className={animate ? "inner":" inner transition duration-1000 transform scale-x-100"}></div>
       </div>
    </>

  )
}

export default Line