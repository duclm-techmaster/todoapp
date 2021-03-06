import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Buy milk'},
    { id: 2, content: 'Buy peanut'}
  ])

  const onRemoveTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const onAddTodo = newTodoContent => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        content: newTodoContent
      }
    ])
  }

  return (
    <>
      <TodoForm onAddTodo={onAddTodo}/>
      <TodoList todos={todos} onRemoveTodo={onRemoveTodo}/>
    </>
  )
}

export default App;