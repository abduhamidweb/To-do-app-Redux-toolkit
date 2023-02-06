import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  data: [
    {
      id: 1,
      time: '2023-02-06 09:00',
      task: 'Meeting with team',
    },
    {
      id: 2,
      time: '2023-02-07 14:30',
      task: 'Prepare presentation for client',
    },
    {
      id: 3,
      time: '2023-02-08 16:00',
      task: 'Grocery shopping',
    },
    {
      id: 4,
      time: '2023-02-09 10:00',
      task: 'Visit dentist appointment',
    },
  ],
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.unshift(action.payload)
    },
    removeTask: (state, action) => {
      console.log(action.payload)
      state.data = state.data.filter((task) => task.id != action.payload)
    },
  },
})
export const { addData, removeTask } = todoSlice.actions
export default todoSlice.reducer
