const attendee = (state, action) => {
  switch (action.type) {
    case 'ADD_ATTENDEE':
      return {
        name: action.name,
        picture: action.picture,
        company: action.company,
        email: action.email,
        phone: action.phone,
        country: action.country,
        latitude: action.latitude,
        longitude: action.longitude,
        skills: action.skills
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const attendees = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ATTENDEE':
      return [
        ...state,
        attendee(undefined, action)
      ]
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