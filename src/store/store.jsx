import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../feautures/todoSlice/todoSlice'
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})
