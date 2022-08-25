import React from 'react'

const Element = ({value}) => {
  return (
    <div className='element text-white'>
           <p className='text-4xl truncate ... p-0'>{value}</p>
    </div>
  )
}

export default Element