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
    // Xóa trên server
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then(() => setTodos(todos.filter(todo => todo.id !== id))) // Xóa trong state
      .catch(error => console.error(error))
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
      .catch(error => console.error(error))
  }

  const onUpdateFilter = filter => {
    setFilter(filter)
  }

  const onToggleCompleted = id => {
    const todoToBeUpdated = todos.find(todo => todo.id === id)

    // Dùng PATCH để update 1 phần của todo
    // Dùng PUT để thay thế toàn bộ todo cũ bằng todo mới
    axios
      .patch(`http://localhost:3001/todos/${id}`, { // Update trên server
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