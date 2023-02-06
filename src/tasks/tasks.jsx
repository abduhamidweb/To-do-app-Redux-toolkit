import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addData, removeTask } from '../feautures/todoSlice/todoSlice'
const Tasks = () => {
  const { data } = useSelector((state) => state.todo)
  const dispach = useDispatch()
  const deleteTask = (e) => {
    const id = e.target.getAttribute('data-id') * 1
    dispach(removeTask(id))
  }
  return (
    <>
      <div className='container'>
        <div className='tasks__wrapper w-75 mx-auto'>
          <h2 className='text-center mt-4'>Tasks</h2>
          <div className='tasks__items'>
            {data.length ? (
              data.map((item, index) => {
                return (
                  <>
                    <div className='tasks__items__item border p-3 mt-4'>
                      <span>
                        <strong>{index + 1}.</strong>
                      </span>
                      <p className='text-center'>
                        <strong>{item.time}</strong>
                      </p>
                      <p className='fs-6 text-center '>{item.task}</p>
                      <button
                        className='btn btn-danger w-100 mt-2'
                        data-id={item.id}
                        onClick={deleteTask}
                      >
                        delete
                      </button>
                    </div>
                  </>
                )
              })
            ) : (
              <h3 className='text-center mt-5 text-dark pt-5'>
                Hali task qo'shmadingiz
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Tasks
