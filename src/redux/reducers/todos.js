const initialState = [
  { id: 1, content: 'Buy milk', completed: false },
  { id: 2, content: 'Buy peanut', completed: true }
]

export default function(state = initialState, action) {
  switch (action.type) {
    // case "ADD_TODO": {
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 1000),
    //       content: newTodoContent,
    //       completed: false
    //     }
    //   ]
    // }

    case "REMOVE_TODO": {
      return state.filter(todo => todo.id !== action.id)
    }

    // case "TOGGLE_TODO": {
    //   return state.map(todo =>
    //     todo.id === id
    //       ? {
    //         ...todo,
    //         completed: !todo.completed
    //       } : todo
    //   )
    // }

    default:
      return state
  }
}
