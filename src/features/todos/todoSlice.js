import { createSlice,nanoid } from "@reduxjs/toolkit";


export const todoSlice=createSlice({
    name:"todo",
    initialState:{todo:[]},
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                text:action.payload.text
            }
            state.todo.push(newTodo)
        }
    }
})
export const {addTodo}=todoSlice.actions
export default todoSlice.reducer