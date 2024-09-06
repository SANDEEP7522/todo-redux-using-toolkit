import { useState } from 'react'

import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";

function App() {

  return (
    <>
     <h1>Todo-App-Redux </h1>
     <TodoInput />
     <TodoList />
    </>
  
  )
}

export default App
