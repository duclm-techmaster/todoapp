import React from 'react'

function Todo({ todo, onRemoveTodo, onToggleCompleted }) {
  const styleObj = {
    textDecoration: todo.completed ? 'line-through' : 'none'
  }

  return <tr>
    <td
      style={styleObj}
      onClick={() => onToggleCompleted(todo.id)}
    >
      {todo.content}
    </td>
    <td>
      <button onClick={() => onRemoveTodo(todo.id)}>&times;</button>
    </td>
  </tr>
}

export default Todo