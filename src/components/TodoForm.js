import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todos'
import todoServices from '../services'

function TodoForm() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = e => {
    e.preventDefault()
    
    todoServices
      .create({
        content: value,
        completed: false
      })
      .then(res => dispatch(addTodo(res.data)))
      .catch(e => console.error(e))
    
    setValue('')
  }

  return <form onSubmit={onFormSubmit}>
    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    <input type="submit" value="Add Todo"/>
  </form>
}

export default TodoForm