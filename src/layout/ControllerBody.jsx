import React from 'react'
import ControlBar from '../components/ControlBar'
import Operation from '../components/Operation'
import Node from '../components/Node'
import Line from '../components/Line'
import { getArray } from '../store/operation-slice'
import { useSelector } from 'react-redux'
const ControllerBody = ({item,operation}) => {
  const array = useSelector(getArray);
  return (
    <div className='flex justify-evenly flex-col  min-h[10rem] h-auto md:min-h-[30rem] md:min-w-[75rem] border-2 border-orange-light sm:w-full  w-screen'>
          {operation}
          <div className='flex flex-row flex-grow mx-5 items-center p-4 overflow-scroll md:overflow-scroll'>
          {array.map((i,index) =>

            <div className='flex flex-row items-center' key={index}>
            <Node value={i}/>
            {index !== array.length - 1 ? <Line/>: <></>}
            </div>)}

          </div>
        <ControlBar/>
    </div>
  )
}

export default ControllerBody