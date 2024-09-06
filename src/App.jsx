import { useState } from 'react'

import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";

function App() {

  return (
    <>
     <div>Todo-App-Redux</div>
     <TodoInput />
     <TodoList />
    </>
  
  )
}

export default App
