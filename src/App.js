import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'


function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Buy milk', completed: false},
    { id: 2, content: 'Buy peanut', completed: true}
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
      <Filter />
      <TodoList todos={todos} onRemoveTodo={onRemoveTodo}/>
    </>
  )
}

export default App;