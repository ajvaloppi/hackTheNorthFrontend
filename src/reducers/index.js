import { combineReducers } from 'redux'
import attendees from './attendees'
import visibilityFilter from './visibilityFilter'

const attendeesApp = combineReducers({
  attendees,
  visibilityFilter
})

export default attendeesApp