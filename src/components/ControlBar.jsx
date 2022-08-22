import React from 'react'
import {FaStepForward,
      FaStepBackward,
        FaAngleDoubleLeft,
        FaAngleDoubleRight,
        FaPlay} from 'react-icons/fa'
const ControlBar = () => {
  return (
    <>
      <div className='text-white bg-orange'>
        <div className='flex justify-center'>
          <button><FaAngleDoubleLeft className='mx-5 my-3 w-4 h-4'/></button>
          <button><FaStepBackward className='mx-5 my-3 w-4 h-4'/></button>
          <button><FaPlay className='mx-5 my-3 w-4 h-4'/></button>
          <button><FaStepForward className='mx-5 my-3 w-4 h-4'/></button>
          <button><FaAngleDoubleRight className='mx-5 my-3 w-4 h-4'/></button>
        </div>
      </div>
    </>
  )
}

export default ControlBar