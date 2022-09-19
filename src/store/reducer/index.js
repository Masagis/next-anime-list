import { combineReducers } from 'redux'
import anime from './anime.reducer'

const appReducer = combineReducers({
  anime,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
