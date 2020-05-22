import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'
import { FILTER } from './constant'
import todoServices from './services'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todoServices
      .getAll()
      .then(response => setTodos(response.data))
      .catch(error => console.error(error))
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
    todoServices
      .remove(id) // Xóa trên server
      .then(() => setTodos(todos.filter(todo => todo.id !== id))) // Xóa trong state
      .catch(error => console.error(error))
  }

  const onAddTodo = newTodoContent => {
    todoServices
      .create({ // Thêm todo trên server
        content: newTodoContent,
        completed: false
      })
      .then(response => setTodos([ // Thêm todo trong state
        ...todos,
        response.data
      ]))
      .catch(error => console.error(error))
  }

  const onUpdateFilter = filter => {
    setFilter(filter)
  }

  const onToggleCompleted = id => {
    const todoToBeUpdated = todos.find(todo => todo.id === id)

    todoServices
      .update(id, { // Update trên server
        completed: !todoToBeUpdated.completed
      })
      .then(response => setTodos(todos.map(todo => // Update trong state
        todo.id === id
          ? response.data
          : todo
        )
      ))
      .catch(error => console.error(error))
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