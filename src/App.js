import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <>
      <TodoList todos={todos}/>
      <input type="text" />
      <button>Add ToDo</button>
      <button>Clear completed ToDos</button>
      <div>0 left ToDo</div>
    </>
  )
}

export default App;
