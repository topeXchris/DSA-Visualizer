import React from 'react'
import { Button, Dropdown } from '../components/Operation'
import {sorting} from '../constant/Sorting'
import { searching } from '../constant/Searching'
const OperationBar = ({push,pop,onChange}) => {
  return (
    <>
    <div className='flex justify-center md:p-4 border-b border-b-orange-light shadow-sm p-2 w-auto flex-wrap'>
     <input onChange={onChange} placeholder="element" type="number" id="lname" name="lname" className='focus:outline-orange-light  md:p-1 border border-orange-light'/>
        <div>
        <Button onClick={push} name={"Push"}/>
        <Button onClick={pop} name={"Pop"}/>
        </div>
        <div>
        <Dropdown name={"Sorting"} item={sorting}/>
        <Dropdown name={"Searching"} item={searching}/>
        </div>
    </div>
</>
  )
}

export default OperationBar