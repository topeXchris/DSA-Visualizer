import React from 'react'
import {FaAngleDown} from 'react-icons/fa'
import search from "../constant/Searching"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const  Dropdown = ({name,item}) =>{
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center items-center w-auto border border-orange-light  shadow-sm shadow-orange-light md:mx-3 px-4 bg-white  hover:bg-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-light">
          {name}
          <FaAngleDown className="-mr-1 ml-2 h-5 w-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 "
        enterTo="transform opacity-100 "
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 "
        leaveTo="transform opacity-0 "
      >
        <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-56 h-40  shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto">
          <div className="py-1">
            {item.map((i,index)=>
                <Menu.Item  key={index}>
              {({ active }) => (
                <a
                  key={index}
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm hover:bg-orange'
                  )}
                >
                  {i}
                </a>
              )}
            </Menu.Item>
            )}        
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export const Button = ({ onClick,  name}) =>{
    return(
        <>
            <button onClick={onClick} className='border border-orange-light md:mx-5 items-center align-middle shadow-sm shadow-orange-light px-3 md:px-5'>
                    {name}
            </button>
        </>
    )
}
