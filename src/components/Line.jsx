import React from 'react'

const Line = ({animate}) => {
  return (
    <>
       <div className='line md:flex justify-start items-center'>
       <div className={"inner animate-[wiggle_1s_linear_forwards_1]"}></div>
       </div>
    </>

  )
}

export default Line