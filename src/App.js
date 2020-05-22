import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'
import { FILTER } from './constant'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/todos')
      .then(response => setTodos(response.data))
  }, [])

  const [filter, setFilter] = useState(FILTER.ALL)

  let shownTodos
  switch (filter) {
    case FILTER.COMPLETED:
      shownTodos = todos.filter(todo => todo.completed)
      break;

    case FILTER.ACTIVE:
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
    axios
      .post('http://localhost:3001/todos', { // Thêm todo trên server
        content: newTodoContent,
        completed: false
      })
      .then(response => setTodos([ // Thêm todo trong state
        ...todos,
        response.data
      ]))
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