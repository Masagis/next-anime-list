import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducer/index'

const reduxStore = (initialState = {}) =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  )
export default reduxStore
