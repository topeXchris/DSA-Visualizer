import React from 'react'
import ControllerBody from '../layout/ControllerBody'
import OperationBar from '../layout/OperationBar'
import { operationAction } from '../store/operation-slice'
import { useDispatch } from 'react-redux'
const ControllPage = () => {
  const dispatch = useDispatch();
  const push = ()=>{
    dispatch(operationAction.push(1));
  }
  return (
    <div className="flex justify-center px-10 m-8 flex-row w-auto overflow-auto">
        <ControllerBody
          operation={<OperationBar push={()=>push()}/>}/>
    </div>
  )
}

export default ControllPage