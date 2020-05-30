const initialState = [
  { id: 1, content: 'Buy milk', completed: false },
  { id: 2, content: 'Buy peanut', completed: true }
]

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TODOS": {
      return action.allTodos
    }

    case "ADD_TODO": {
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 1000),
          content: action.content,
          completed: false
        }
      ]
    }

    case "REMOVE_TODO": {
      return state.filter(todo => todo.id !== action.id)
    }

    case "TOGGLE_TODO": {
      return state.map(todo =>
        todo.id === action.id
          ? {
            ...todo,
            completed: !todo.completed
          } : todo
      )
    }

    default:
      return state
  }
}
