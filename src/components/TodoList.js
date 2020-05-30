import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

function TodoList() {
  const todos = useSelector(state => state.todos)

  return (
    <>
      <h1>Todo List</h1>
      <table>
        <tbody>
          {todos.map(todo =>
            <Todo key={todo.id} todo={todo} />
          )}
        </tbody>
      </table>
    </>
  )
}

export default TodoList