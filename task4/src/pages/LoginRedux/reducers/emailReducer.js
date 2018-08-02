import { UPDATE_EMAIL } from '../actions/constants'

const initialState = ''

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return action.payload.email
    default:
      return state
  }
}

export default emailReducer
