import React from 'react'

const Node = ({value}) => {
  return (
    <div className='node'>
       <p className='text-white text-4xl truncate ... p-0'>{value}</p>
    </div>
  )
}

export default Node