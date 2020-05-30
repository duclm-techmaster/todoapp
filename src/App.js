import React from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Filter from './components/Filter'

function App() {
  // let shownTodos
  // switch (filter) {
  //   case FILTER.COMPLETED:
  //     shownTodos = todos.filter(todo => todo.completed)
  //     break;

  //   case FILTER.ACTIVE:
  //     shownTodos = todos.filter(todo => !todo.completed)
  //     break;

  //   default:
  //     shownTodos = todos
  //     break;
  // }

  return (
    <>
      <TodoForm onAddTodo={onAddTodo} />
      <Filter onUpdateFilter={onUpdateFilter} filter={filter} />
      <TodoList todos={shownTodos} onRemoveTodo={onRemoveTodo} onToggleCompleted={onToggleCompleted} />
    </>
  )
}

export default App;