import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function FilterItem({ text }) {
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  return (
    <button 
      onClick={() => dispatch({
        type: 'UPDATE_FILTER',
        filter: text
      })}
      disabled={filter === text}
    >
      {text}
    </button>
  )
}
