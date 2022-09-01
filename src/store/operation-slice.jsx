import { createSlice } from "@reduxjs/toolkit";
import {insert} from "../service/array/operation";
const initialState = {
    array:[],
    linklist:[],
    last:undefined,
}


const operationSlice = createSlice({
    name:"operation",
    initialState,
    reducers:{
        push(state,action){
            const {elem,ind} = action.payload;
         const success = insert(state.array,elem,ind);
            if(success < 0)
            {
                console.log("no value")
            }
        },

        pop(state){
            const arr = state.array;
            let last = arr[arr.length-1]
            arr.length =  arr.length > 0 ? arr.length - 1 : 0
            state.last = last;
        }

    }
})

export const getArray = (state) => state.operation.array;
export const operationAction = operationSlice.actions;
export default operationSlice.reducer;