import { createSlice } from '@reduxjs/toolkit';

// Action creater function 
const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(),
                text: action.payload, completed: false
             });
        },
        removeTodo: (state, action) => {
             return state.filter((todo) => todo.id !== action.payload);
        }
    }

});
export const {addTodo, removeTodo} = todoSlice.actions ;

export default todoSlice.reducer;