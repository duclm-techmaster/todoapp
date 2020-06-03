import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodoAsync, toggleTodoAsync } from '../redux/actions/todos'

function Todo({ todo }) {
  const styleObj = {
    textDecoration: todo.completed ? 'line-through' : 'none'
  }

  const dispatch = useDispatch()

  const onToggleTodo = () => {
    dispatch(toggleTodoAsync(todo.id, {
      completed: !todo.completed
    }))
  }

  return <tr>
    <td
      style={styleObj}
      onClick={onToggleTodo}
    >
      {todo.content}
    </td>
    <td>
      <button onClick={() => dispatch(removeTodoAsync(todo.id))}>&times;</button>
    </td>
  </tr>
}

export default Todo