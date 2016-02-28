import React from 'react'
import { connect } from 'react-redux'
import { addAttendee } from '../actions'

let AddAttendee = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addAttendee(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
      </form>
    </div>
  )
}
AddAttendee = connect()(AddAttendee)

export default AddAttendee