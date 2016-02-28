import React from 'react'
import FilterLink from '../containers/FilterLink'

const Filter = () => (
  <div className='filters'>
    Filter By Skills:
    {" "}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {" "}
    <FilterLink filter='ANDROID'>
      Android
    </FilterLink>
    {" "}
    <FilterLink filter='ANGULAR'>
      Angular
    </FilterLink>
    {" "}
    <FilterLink filter='C'>
      C
    </FilterLink>
    {" "}
    <FilterLink filter='C++'>
      C++
    </FilterLink>
    {" "}
    <FilterLink filter='GO'>
      Go
    </FilterLink>
    {" "}
    <FilterLink filter='HTML'>
      HTML/CSS
    </FilterLink>
    {" "}
    <FilterLink filter='IOS'>
      iOS
    </FilterLink>
    {" "}
    <FilterLink filter='JAVA'>
      Java
    </FilterLink>
    {" "}
    <FilterLink filter='JS'>
      JS
    </FilterLink>
    {" "}
    <FilterLink filter='NODEJS'>
      NodeJS
    </FilterLink>
    {" "}
    <FilterLink filter='DESIGN'>
      Product Design
    </FilterLink>
    {" "}
    <FilterLink filter='SPEAKING'>
      Public Speaking
    </FilterLink>
  </div>
)

export default Filter


