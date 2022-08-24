import React from 'react'
import ControllerBody from '../layout/ControllerBody'
import OperationBar from '../layout/OperationBar'
import { operationAction } from '../store/operation-slice'
import { useDispatch } from 'react-redux'
const ControllPage = () => {
  const dispatch = useDispatch();
  const [element, setElement] = React.useState(undefined);
  const elementInput = (event) =>{
      setElement(event.target.value);
  }
  const clickPush = ()=>{
    dispatch(operationAction.push(element));
  }
  const clickPop = ()=>{
    dispatch(operationAction.pop())
  }
  return (
    <div className="flex justify-center px-10 m-8 flex-row w-auto overflow-auto">
        <ControllerBody
          operation={
          <OperationBar
            onChange={elementInput}
              pop={()=>clickPop()}
             push={()=>clickPush()}/>}/>
    </div>
  )
}

export default ControllPage