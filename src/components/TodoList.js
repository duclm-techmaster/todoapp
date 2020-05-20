import React from 'react'
import Todo from './Todo'

function TodoList(props) {
  const { todos, ...rest } = props

  return (
    <>
      <h1>Todo List</h1>
      <table>
        <tbody>
          {todos.map(todo =>
            <Todo key={todo.id} todo={todo} {...rest} />
          )}
        </tbody>
      </table>
    </>
  )
}

export default TodoList