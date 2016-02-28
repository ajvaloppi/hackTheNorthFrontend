const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    case 'SEARCH_ATTENDEES':
    	return false
    default:
      return state
  }
}

export default visibilityFilter