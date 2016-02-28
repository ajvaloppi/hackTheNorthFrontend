import React, { PropTypes } from 'react'
import Skill from './Skill'

const SkillList = ({ skills }) => (
  <div>
    {skills.map(skills =>
      <Skill
        //key={skill.id} Skills don't have ids, they probably should so we have keys for them
        {...skills}
      />
    )}
  </div>
)

SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,

  }).isRequired).isRequired
}

export default SkillList