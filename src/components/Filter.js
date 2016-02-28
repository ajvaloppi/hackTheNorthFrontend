import React from 'react'
import FilterLink from '../containers/FilterLink'

const Filter = () => (
  <div className='filters'>
    Filter By Skills:
    {" "}
    <FilterLink className='filter'>
      Android
    </FilterLink>
    {" "}
    <FilterLink>
      Angular
    </FilterLink>
    {" "}
    <FilterLink>
      C
    </FilterLink>
    {" "}
    <FilterLink>
      C++
    </FilterLink>
    {" "}
    <FilterLink>
      Go
    </FilterLink>
    {" "}
    <FilterLink>
      HTML/CSS
    </FilterLink>
    {" "}
    <FilterLink>
      iOS
    </FilterLink>
    {" "}
    <FilterLink>
      Java
    </FilterLink>
    {" "}
    <FilterLink>
      JS
    </FilterLink>
    {" "}
    <FilterLink>
      NodeJS
    </FilterLink>
    {" "}
    <FilterLink>
      Product Design
    </FilterLink>
    {" "}
    <FilterLink>
      Public Speaking
    </FilterLink>
  </div>
)

export default Filter


