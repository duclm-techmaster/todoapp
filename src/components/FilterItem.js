import React from 'react'

export default function FilterItem({ text, onUpdateFilter }) {
  return (
    <button onClick={() => onUpdateFilter(text)}>{text}</button>
  )
}
