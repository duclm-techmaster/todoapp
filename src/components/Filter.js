import React from 'react'
import FilterItem from './FilterItem'

export default function Filter(props) {
  return (
    <div style={{ paddingTop: 10 }}>
      Show:
      <FilterItem text="All" {...props} />
      <FilterItem text="Active" {...props} />
      <FilterItem text="Completed" {...props} />
    </div>
  )
}
