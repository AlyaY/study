import { combineReducers } from 'redux'
import emailErrorReducer from './emailErrorReducer'
import emailReducer from './emailReducer'
import passwordErrorReducer from './passwordErrorReducer'
import passwordReducer from './passwordReducer'

export default combineReducers({
  emailErrorReducer,
  emailReducer,
  passwordErrorReducer,
  passwordReducer
})
