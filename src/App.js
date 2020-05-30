import React, { useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'
import { fetchTodos } from './redux/actions/todos'
import { useDispatch } from 'react-redux'
import todoService from './services'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    todoService
      .getAll()
      .then(res => dispatch(fetchTodos(res.data)))
  }, [dispatch])

  return (
    <>
      <TodoForm />
      <Filter />
      <TodoList />
    </>
  )
}

export default App;