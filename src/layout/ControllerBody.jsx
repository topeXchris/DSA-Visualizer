import React from 'react'
import ControlBar from '../components/ControlBar'
import Operation from '../components/Operation'
import Node from '../components/Node'
import Line from '../components/Line'
const ControllerBody = ({item}) => {
  return (
    <div className='flex justify-evenly flex-col  min-h[10rem] h-auto md:min-h-[30rem] md:min-w-[75rem] border-2 border-orange-light sm:w-full  w-screen'>
         <Operation/>
          <div className='flex flex-row flex-grow mx-5 items-center p-4 overflow-scroll md:overflow-scroll'>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>

            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>
            <Line/>
            <Node/>

          </div>
        <ControlBar/>
    </div>
  )
}

export default ControllerBody