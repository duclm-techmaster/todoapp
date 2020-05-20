import React from 'react'

function Todo({todo, onRemoveTodo}) {
  return <tr>
    <td>{todo.content}</td>
    <td>
      <button onClick={() => onRemoveTodo(todo.id)}>&times;</button>
    </td>
  </tr>
}

export default Todo