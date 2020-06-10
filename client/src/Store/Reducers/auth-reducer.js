import * as types from '../Constants'

const initialState = false

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return true

    case types.LOGOUT:
      return false

    default:
      return state
  }
}