import { connect } from 'react-redux'
import { toggleAttendee } from '../actions'
import AttendeesList from '../components/AttendeesList'

function checkSkills(skills, skill) {
  for (var i = 0; i < skills.length; i++){
    if (skills[i].name == skill) {
      return true;
      break;
    }
  }
  return false;
}

function checkName(name, searchText) {
  return name.indexOf(searchText) > -1 ? true : false;
}

const getVisibleAttendees = (attendees, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return attendees
    case 'ANDROID':
      return attendees.filter(a => checkSkills(a.skills,'Android'))
    case 'ANGULAR':
      return attendees.filter(a => checkSkills(a.skills,'Angular'))
    case 'C':
      return attendees.filter(a => checkSkills(a.skills,'C'))
    case 'C++':
      return attendees.filter(a => checkSkills(a.skills,'C++'))
    case 'GO':
      return attendees.filter(a => checkSkills(a.skills,'Go'))
    case 'HTML':
      return attendees.filter(a => checkSkills(a.skills,'HTML/CSS'))
    case 'IOS':
      return attendees.filter(a => checkSkills(a.skills,'iOS'))
    case 'JAVA':
      return attendees.filter(a => checkSkills(a.skills,'Java'))
    case 'JS':
      return attendees.filter(a => checkSkills(a.skills,'JS'))
    case 'NODEJS':
      return attendees.filter(a => checkSkills(a.skills,'NodeJS'))
    case 'DESIGN':
      return attendees.filter(a => checkSkills(a.skills,'Product Design'))
    case 'SPEAKING':
      return attendees.filter(a => checkSkills(a.skills,'Public Speaking'))
    default:
      return attendees.filter(a => checkName(a.name, filter))
    
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