import React from 'react'
import Footer from './Footer'
import SearchAttendees from '../containers/SearchAttendees'
import VisibleAttendeesList from '../containers/VisibleAttendeesList'

const App = () => (
  <div>
    <SearchAttendees />
    <VisibleAttendeesList />
    <Footer />
  </div>
)

export default App