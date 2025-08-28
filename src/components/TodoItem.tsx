import {  CheckIcon, CrossIcon, Square, SquareCheck, XIcon } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { deleteTodo,markComplete } from '../features/todo';
import { useState } from 'react';



const TodoItem = ({id,text,completed=false}) => {
  const dispatch = useDispatch();
  const [edit,setEdit] = useState(false);
  const [editValue,setEditValue] = useState(text);
  return (
    <div className="flex items-center justify-between p-3 space-x-5 bg-gray-100 rounded-xl shadow-sm hover:bg-gray-200 transition">
        {completed? <button onClick={()=>dispatch(markComplete(id))}><SquareCheck/></button> :<button onClick={()=>dispatch(markComplete(id))}><Square/></button>}
      {
        edit?
        <input type="text" name="" value={editValue} onChange={(e)=>setEditValue(e.target.value)} id="" />:
        <span className={`text-gray-700 font-medium ${completed?'line-through':''}`}>{text}</span>

      }  
      <div className='space-x-2 flex'>
      {
        edit?
        <div className="flex space-x-1">
          <button ><CheckIcon className='bg-green-500 rounded text-white p-0 text-sm'/></button>
          <button onClick={()=>setEdit(false)}><XIcon className='bg-yellow-500 rounded text-white p-0 text-sm'/></button>
        </div>:
      <button onClick={()=>setEdit(true)} className="px-3 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">Edit</button>
      }
        <button className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition" onClick={()=>dispatch(deleteTodo(id))}>
        Delete
      </button>
      </div>
    </div>
  )
}

export default TodoItem
