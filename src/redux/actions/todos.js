export const fetchTodos = allTodos => ({
  type: 'FETCH_TODOS',
  allTodos
})

export const addTodo = content => ({
  type: 'ADD_TODO',
  content
})

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})