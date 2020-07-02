import * as types from '../Constants'

// token: localStorage.getItem('token'),
const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  errorMessage: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.LOADED:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        errorMessage: null
      };
    case types.LOGIN:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        errorMessage: null
      }

    case types.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        errorMessage: null
      }
    case types.ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      }

    default:
      return state
  }
}