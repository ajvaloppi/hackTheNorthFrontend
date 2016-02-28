import React, { PropTypes } from 'react'

const Skill = ({ name, rating }) => (
  <div>
    {name}: {rating}
  </div>
)

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

export default Skill