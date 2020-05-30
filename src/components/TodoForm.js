import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todos'

function TodoForm() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = e => {
    e.preventDefault()
    
    dispatch(addTodo(value))

    setValue('')
  }

  return <form onSubmit={onFormSubmit}>
    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    <input type="submit" value="Add Todo"/>
  </form>
}

export default TodoForm