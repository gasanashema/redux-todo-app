import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo";
import { PlusCircle } from "lucide-react";
import { useState } from "react";


const Input = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    return (
        <div className='shadow-lg w-full border rounded-full flex items-center justify-between'>
            <input type="text" className='w-68 outline-none px-3 py-1' value={text} onChange={e => { setText(e.target.value) }} />
            <button onClick={() => {
                if (text.trim()) {
                    const obj = {text:text,completed:false}
                    dispatch(addTodo(obj));
                    setText('');
                }
            }}><PlusCircle className='bg-green-500 rounded-full text-xl mx-1 text-white hover:bg-green-600' /></button>
        </div>

    )
}

export default Input