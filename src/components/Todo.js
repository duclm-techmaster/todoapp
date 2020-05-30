import React from 'react'
import { useDispatch } from 'react-redux'

function Todo({ todo }) {
  const styleObj = {
    textDecoration: todo.completed ? 'line-through' : 'none'
  }

  const dispatch = useDispatch()

  return <tr>
    <td
      style={styleObj}
      onClick={() => dispatch({
        type: "TOGGLE_TODO",
        id: todo.id
      })}
    >
      {todo.content}
    </td>
    <td>
      <button onClick={() => dispatch({
        type: "REMOVE_TODO",
        id: todo.id
      })}>&times;</button>
    </td>
  </tr>
}

export default Todo