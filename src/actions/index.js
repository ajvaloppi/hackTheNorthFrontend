import fetch from 'isomorphic-fetch'

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleAttendee = (id) => {
  return {
    type: 'TOGGLE_ATTENDEE',
    id
  }
}

export const receiveAttendees = (json) => {
  return {
    type: 'RECEIVE_ATTENDEES',
    attendees: json,
    receivedAt: Date.now()
  }
}

export const requestAttendees = () => {
  return {
    type: 'REQUEST_ATTENDEES'
  }
}

export function fetchPosts() {
  return function (dispatch) {
  dispatch(requestAttendees())
  return fetch(`https://htn-interviews.firebaseio.com/users.json`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveAttendees(json))
      )
  }
}
