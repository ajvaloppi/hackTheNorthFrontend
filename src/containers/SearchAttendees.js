import React from 'react'
import { connect } from 'react-redux'
import { addAttendee } from '../actions'

let AddAttendee = ({ dispatch }) => {
  let input

  return (
    <div>
      <div className='searchBar'>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addAttendee(input.value))
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
AddAttendee = connect()(AddAttendee)

export default AddAttendee