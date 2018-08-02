import { UPDATE_PASSWORD } from '../actions/constants'

const initialState = ''

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return action.payload.password
    default:
      return state
  }
}

export default passwordReducer
