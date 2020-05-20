import React from 'react'

function Todo({todo, onRemoveTodo}) {
  const styleObj = {
    textDecoration: todo.completed ? 'line-through': 'none'
  }

  return <tr>
    <td style={styleObj}>{todo.content}</td>
    <td>
      <button onClick={() => onRemoveTodo(todo.id)}>&times;</button>
    </td>
  </tr>
}

export default Todo