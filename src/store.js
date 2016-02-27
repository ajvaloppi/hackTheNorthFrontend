import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import attendeeApp from './reducers'
import { fetchPosts } from './actions'

const loggerMiddleware = createLogger()

const store = createStore(
  attendeeApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

store.dispatch(fetchPosts()).then(() =>
  console.log(store.getState())
)

export default store