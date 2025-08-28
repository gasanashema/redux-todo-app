import { PlusCircle, PlusIcon, PlusSquare } from 'lucide-react'

const Input = () => {
  return (
    <div className='shadow-lg w-full border rounded-full flex items-center justify-between'>
      <input type="text" className='w-68 outline-none px-3 py-1'/>
      <button><PlusCircle  className='bg-green-500 rounded-full text-xl mx-1 text-white hover:bg-green-600'/></button>
    </div>
  )
}

export default Input