import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <div className='max-w-md mx-auto p-6 border rounded-2xl shadow-md bg-white'>
      <h1 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
        ✅ Todo List
      </h1>
      <div className="flex flex-col gap-y-3">
        <TodoItem text="Learn React" />
        <TodoItem text="Practice Tailwind" />
        <TodoItem text="Build a Todo App" />
        <TodoItem text="Review Redux" />
      </div>
    </div>
  )
}

export default TodoList
