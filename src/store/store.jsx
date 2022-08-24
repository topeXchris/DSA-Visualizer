import { configureStore } from '@reduxjs/toolkit'
import operationSlice from './operation-slice'

export default configureStore({
  reducer: {
    operation:operationSlice
  },
})