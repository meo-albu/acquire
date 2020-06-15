import * as types from '../Constants'

const initialState = localStorage.getItem('login') === 'true' ? true : false

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      localStorage.setItem('login', true)
      return true

    case types.LOGOUT:
      localStorage.setItem('login', false)
      return false

    default:
      return state
  }
}