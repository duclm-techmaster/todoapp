import React, { useState } from 'react'

function TodoForm({onAddTodo}) {
  const [value, setValue] = useState('')

  const onFormSubmit = e => {
    e.preventDefault()

    if (!onAddTodo) return
    
    onAddTodo(value)

    setValue('')
  }

  return <form onSubmit={onFormSubmit}>
    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    <input type="submit" value="Add Todo"/>
  </form>
}

export default TodoForm