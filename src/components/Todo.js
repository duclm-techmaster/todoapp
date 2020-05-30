import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../redux/actions/todos'
import todoServices from '../services'

function Todo({ todo }) {
  const styleObj = {
    textDecoration: todo.completed ? 'line-through' : 'none'
  }

  const dispatch = useDispatch()

  const todoId = todo.id

  const onToggleTodo = () => {
    todoServices
      .update(todoId, {
        completed: !todo.completed
      })
      .then(res => dispatch(toggleTodo(res.data)))
      .catch(e => console.error(e))
  }

  const onRemoveTodo = () => {
    todoServices
      .remove(todoId)
      .then(() => dispatch(removeTodo(todoId)))
      .catch(e => console.error(e))
  }

  return <tr>
    <td
      style={styleObj}
      onClick={onToggleTodo}
    >
      {todo.content}
    </td>
    <td>
      <button onClick={onRemoveTodo}>&times;</button>
    </td>
  </tr>
}

export default Todo