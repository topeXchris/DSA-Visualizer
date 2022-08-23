import React from 'react'
import {FaAngleDown} from 'react-icons/fa'
import search from "../constant/Searching"
export const  Dropdown = ({item}) =>{
    return(
        <>
             <button className='flex flex-row justify-between md:mx-5 items-center border border-orange-light w-24 md:w-36 shadow-sm shadow-orange-light'>
                <div>Name</div>
                <FaAngleDown/>
            </button>
<div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
        </>
    )
}

export const Button = ({name}) =>{
    return(
        <>
            <button className='border border-orange-light md:mx-5 items-center align-middle shadow-sm shadow-orange-light px-3 md:px-5'>
                    {name}
            </button>
        </>
    )
}

const Operation = () => {
  return (
    <>
        <div className='flex justify-center md:p-4 border-b border-b-orange-light shadow-sm overflow-auto p-2'>
         <input placeholder="element" type="number" id="lname" name="lname" className='focus:outline-orange-light  md:p-1 border border-orange-light'/>
            <Button name={"Push"}/>
            <Button name={"Pop"}/>
            <Dropdown/>
            <Dropdown/>
        </div>
    </>
  )
}

export default Operation