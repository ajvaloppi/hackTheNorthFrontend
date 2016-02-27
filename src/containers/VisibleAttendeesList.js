import { connect } from 'react-redux'
import { toggleAttendee } from '../actions'
import AttendeesList from '../components/AttendeesList'

const getVisibleAttendees = (attendees, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return attendees
    case 'SHOW_COMPLETED':
      return attendees.filter(a => a.completed)
    case 'SHOW_ACTIVE':
      return attendees.filter(a => !a.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    attendees: getVisibleAttendees(state.attendees.attendees, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAttendeeClick: (id) => {
      dispatch(toggleAttendee(id))
    }
  }
}

const VisibleAttendeesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendeesList)

export default VisibleAttendeesList