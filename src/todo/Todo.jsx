import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addData, removeTask } from '../feautures/todoSlice/todoSlice'
const Todo = () => {
  const dispach = useDispatch()
  const { data } = useSelector((state) => state.todo)
  const [task, setTask] = useState('')
  const [time, setTime] = useState('')
  const taskEvents = () => {
    if (task.length && time.length) {
      const newObj = {
        id: data.length ? data[data.length - 1].id + 1 : 1,
        time: time,
        task: task,
      }
        dispach(addData(newObj));
        setTask("")
        setTime("")
    }
  }
  return (
    <>
      <div className='container'>
        <div className='form-control mt-5 w-75 mx-auto p-4 border rounded rounded-3'>
          <input
            type='text'
            className='form-control border-1 p-2 fs-6'
            placeholder='what do you want to do '
            value={task}
            onChange={(e) => {
              setTask(e.target.value)
            }}
          />
          <input
            type='text'
            className='form-control border-1 p-2 fs-6 mt-2'
            placeholder='How much time do you spend on this task? '
            value={time}
            onChange={(e) => {
              setTime(e.target.value)
            }}
          />
          <button className='btn btn-primary w-100 mt-2' onClick={taskEvents}>
            add task
          </button>
        </div>
      </div>
    </>
  )
}

export default Todo
