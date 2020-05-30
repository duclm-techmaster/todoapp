import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { FILTER } from '../constant'

function TodoList() {
  const shownTodos = useSelector(state => {
    switch (state.filter) {
      case FILTER.COMPLETED:
        return state.todos.filter(todo => todo.completed)

      case FILTER.ACTIVE:
        return state.todos.filter(todo => !todo.completed)

      default: 
        return state.todos
    }
  })

  return (
    <>
      <h1>Todo List</h1>
      <table>
        <tbody>
          {shownTodos.map(todo =>
            <Todo key={todo.id} todo={todo} />
          )}
        </tbody>
      </table>
    </>
  )
}

export default TodoList