import TodoItem from "./components/TodoItem"
import { useDispatch, useSelector } from "react-redux"
import Input from "./components/Input";

function App() {

const todos = useSelector((state)=>state.todo.value)

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col gap-y-4">
      <Input />
        <div className='max-w-md mx-auto p-6 border rounded-2xl shadow-md bg-white'>
          <h1 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
            ✅ Todo List
          </h1>
          <div className="flex flex-col gap-y-3">
            {todos.map(({text,completed},ind)=>(<TodoItem text={text} id={ind} key={ind} completed={completed} />))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
