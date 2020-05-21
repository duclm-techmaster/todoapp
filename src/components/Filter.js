import React from 'react'
import FilterItem from './FilterItem'
import { FILTER } from '../constant'

export default function Filter(props) {
  return (
    <div style={{ paddingTop: 10 }}>
      Show:
      <FilterItem text={FILTER.ALL} {...props} />
      <FilterItem text={FILTER.ACTIVE} {...props} />
      <FilterItem text={FILTER.COMPLETED} {...props} />
    </div>
  )
}
