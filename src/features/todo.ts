import { createSlice } from "@reduxjs/toolkit";

type TodoState = {
    text: string, completed: boolean
}
const initialStateValue: TodoState[] = [];
export const todoSlice = createSlice({
    name: 'todo',
    initialState: { value: initialStateValue },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.value = [...state.value.slice(0, action.payload), ...state.value.slice(action.payload + 1)];
        },
        markComplete: (state, action) => {
            const index = action.payload;
            const completed = { ...state.value[index], completed: !state.value[index].completed };

            state.value = [
                ...state.value.slice(0, index),
                completed,
                ...state.value.slice(index + 1)
            ];

        },
        editTodo:(state,action)=>{
            
        }
    }
})

export const { addTodo, deleteTodo, markComplete } = todoSlice.actions;
export default todoSlice.reducer