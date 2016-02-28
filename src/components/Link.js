import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span className='activeFilter'>{children}</span>
  }

  return (
    <span href="#" className='filter'
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </span>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link