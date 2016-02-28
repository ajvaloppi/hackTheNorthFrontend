import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

let SearchAttendee = ({ dispatch }) => {
  let input

  return (
    <div>
      <div className='searchBar'>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(setVisibilityFilter(input.value))
          input.value = ''
        }}>
          <input placeholder='SEARCH ATTENDEES...' ref={node => {
            input = node
          }} />
          <div className="fa fa-search magnifyingGlass">
          </div>
        </form>
      </div>
    </div>
  )
}
SearchAttendee = connect()(SearchAttendee)

export default SearchAttendee