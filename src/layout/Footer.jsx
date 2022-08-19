import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
const Footer = () => {
  return (
    <div className='md:flex justify-between bg-orange p-[5px]'>
        <div className='md:flex justify-center text-white'>
            <AiFillGithub className='w-7 h-7 mx-3'/>
        </div>
        <div className='md:flex text-white justify-between'>
            <p className='mx-3'>About</p>
            <p className='mx-3'>Contact</p>
        </div>
    </div>
  )
}

export default Footer