export const fetchTodos = allTodos => ({
  type: 'FETCH_TODOS',
  allTodos
})

export const addTodo = newTodo => ({
  type: 'ADD_TODO',
  newTodo
})

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

export const toggleTodo = updatedTodo => ({
  type: 'TOGGLE_TODO',
  updatedTodo
})