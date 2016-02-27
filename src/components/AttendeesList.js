import React, { PropTypes } from 'react'
import Attendee from './Attendee'

const AttendeeList = ({ attendees, onAttendeeClick }) => (
  <div>
    {attendees.map(attendee =>
      <Attendee
        //key={attendee.id} Attendees don't have ids, they probably should so we have keys for them
        {...attendee}
        onClick={() => onAttendeeClick(attendee)}
      />
    )}
  </div>
)

AttendeeList.propTypes = {
  attendees: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    country: PropTypes.string,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    skills: PropTypes.array.isRequired
  }).isRequired).isRequired,
  onAttendeeClick: PropTypes.func.isRequired
}

export default AttendeeList