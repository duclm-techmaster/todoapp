import React from 'react'

export default function FilterItem({ text, onUpdateFilter, filter }) {
  return (
    <button 
      onClick={() => onUpdateFilter(text)}
      disabled={filter === text}
    >
      {text}
    </button>
  )
}
