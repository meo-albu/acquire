import * as types from '../Constants'
import axios from '../../axios'

export const logout = (cb) => ({ type: types.LOGOUT, cb })

export const loading = () => ({ type: types.LOADING })

export const error = (message) => ({ type: types.ERROR, payload: message })

export const loaded = (user) => (dispatch) => {
  dispatch({ 
    type: types.LOADED,
    payload: user
  }) 
}

export const login_check = (data) => {
  return new Promise((resolve, reject) => {
    axios.post('/login_check', {
      username: data.email,
      password: data.password
    }).then(response => {
      resolve(response.data.token)
    })
  })
}

export const login = (data) => async (dispatch) => {
  dispatch(loading())
  const {email, password} = data

  try {
    await axios.post('login', {
      email,
      password
    }).then(async response => {
        const token = await login_check(data)
        let user = response.data
        user = {...user, token}
        dispatch({
          type: types.LOGIN,
          payload: user
        })
    })
  } catch(err) {
    dispatch(error(err.response.data))
  }
}