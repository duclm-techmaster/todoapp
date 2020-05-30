import React, { useEffect } from 'react'
import axios from 'axios'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'
import { fetchTodos } from './redux/actions/todos'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get('http://localhost:3001/todos')
      .then(res => dispatch(fetchTodos(res.data)))
  }, [])

  return (
    <>
      <TodoForm />
      <Filter />
      <TodoList />
    </>
  )
}

export default App;