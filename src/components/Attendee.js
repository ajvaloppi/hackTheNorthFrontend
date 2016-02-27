import React, { PropTypes } from 'react'

const Attendee = ({ onClick, completed, name, picture, skills }) => (
  <div
    onClick={onClick}
  >
    <img src={picture} />
    {name}
  </div>
)

Attendee.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  country: PropTypes.string,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  skills: PropTypes.array.isRequired
}

export default Attendee