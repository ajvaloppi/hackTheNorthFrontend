const attendees = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_ATTENDEES':
      return Object.assign({}, state, {
        attendees: []
      })
    case 'RECEIVE_ATTENDEES':
      return Object.assign({}, state, {
        attendees: action.attendees
      })
    default:
      return state
  }
}

export default attendees