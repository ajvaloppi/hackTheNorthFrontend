import React, { PropTypes } from 'react'
import SkillList from './SkillList'

const Attendee = ({ onClick, name, picture, email, skills }) => (
  <div
    onClick={onClick}
  >
    <img src={picture} />
    {name}
    Skills:
    <SkillList skills={skills}/>
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