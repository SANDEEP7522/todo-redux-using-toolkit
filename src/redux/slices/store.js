import { configureStore } from "@reduxjs/toolkit";
import todoReducers from '../slices/todoSlice';

const store = configureStore({
    reducer: {
        todos: todoReducers
    },
    devTools: true
});

export default store;

