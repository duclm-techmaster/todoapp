import React, { useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'
import { fetchTodosAsync } from './redux/actions/todos'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodosAsync())
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