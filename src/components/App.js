import React from 'react'
import Filter from './Filter'
import SearchAttendees from '../containers/SearchAttendees'
import VisibleAttendeesList from '../containers/VisibleAttendeesList'

const App = () => (
  <div>
  	<div className="header">Hack The North 2016 Attendees</div>
    <SearchAttendees />
    <Filter />
    <VisibleAttendeesList />
  </div>
)

export default App