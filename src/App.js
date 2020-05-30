import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'

function App() {
  return (
    <>
      <TodoForm />
      <Filter />
      <TodoList />
    </>
  )
}

export default App;