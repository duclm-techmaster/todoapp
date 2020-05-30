import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../redux/actions/todos'

function Todo({ todo }) {
  const styleObj = {
    textDecoration: todo.completed ? 'line-through' : 'none'
  }

  const dispatch = useDispatch()

  return <tr>
    <td
      style={styleObj}
      onClick={() => dispatch(toggleTodo(todo.id))}
    >
      {todo.content}
    </td>
    <td>
      <button onClick={() => dispatch(removeTodo(todo.id))}>&times;</button>
    </td>
  </tr>
}

export default Todo