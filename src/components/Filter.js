import React from 'react'
import FilterItem from './FilterItem'

export default function Filter() {
  return (
    <div style={{paddingTop: 10}}>
      Show:
      <FilterItem text="All"/>
      <FilterItem text="Active"/>
      <FilterItem text="Completed"/>
    </div>
  )
}
