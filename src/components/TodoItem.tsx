import { CheckCheck, Square, SquareCheck } from 'lucide-react'
import React from 'react'

const TodoItem = ({ text }) => {
  return (
    <div className="flex items-center justify-between p-3 space-x-5 bg-gray-100 rounded-xl shadow-sm hover:bg-gray-200 transition">
        {/* <button><SquareCheck/></button> */}
        <button><Square/></button>
      <span className="text-gray-700 font-medium">{text}</span>
      <div className='space-x-2'>

      <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-red-600 transition">
        Edit
      </button>
        <button className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
        Delete
      </button>
      </div>
    </div>
  )
}

export default TodoItem
