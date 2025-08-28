import Input from "./components/Input"
import TodoList from "./components/TodoList"

function App() {


  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col gap-y-4">
        <Input />
        <TodoList />
      </div>
    </div>
  )
}

export default App
