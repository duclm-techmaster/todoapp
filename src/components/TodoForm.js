import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function TodoForm() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = e => {
    e.preventDefault()
    
    dispatch({
      type: "ADD_TODO",
      content: value
    })

    setValue('')
  }

  return <form onSubmit={onFormSubmit}>
    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    <input type="submit" value="Add Todo"/>
  </form>
}

export default TodoForm