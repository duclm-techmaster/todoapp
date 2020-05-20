import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'


function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: 'Buy milk', completed: false },
    { id: 2, content: 'Buy peanut', completed: true }
  ])

  const [filter, setFilter] = useState('All')

  let shownTodos
  switch (filter) {
    case 'Completed':
      shownTodos = todos.filter(todo => todo.completed)
      break;

    case 'Active':
      shownTodos = todos.filter(todo => !todo.completed)
      break;

    default:
      shownTodos = todos
      break;
  }

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

  const onUpdateFilter = filter => {
    setFilter(filter)
  }

  const onToggleCompleted = id => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? {
          ...todo,
          completed: !todo.completed
        } : todo
    ))
  }

  return (
    <>
      <TodoForm onAddTodo={onAddTodo} />
      <Filter onUpdateFilter={onUpdateFilter} filter={filter} />
      <TodoList todos={shownTodos} onRemoveTodo={onRemoveTodo} onToggleCompleted={onToggleCompleted} />
    </>
  )
}

export default App;