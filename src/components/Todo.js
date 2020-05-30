import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../redux/actions/todos'
import axios from 'axios'

function Todo({ todo }) {
  const styleObj = {
    textDecoration: todo.completed ? 'line-through' : 'none'
  }

  const dispatch = useDispatch()

  const todoId = todo.id

  const onToggleTodo = () => {
    axios
      .patch(`http://localhost:3001/todos/${todoId}`, {
        completed: !todo.completed
      })
      .then(res => dispatch(toggleTodo(res.data)))
  }

  const onRemoveTodo = () => {
    axios
      .delete(`http://localhost:3001/todos/${todoId}`)
      .then(() => dispatch(removeTodo(todoId)))
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