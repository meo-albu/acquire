import * as types from '../Constants'

export const login = (cb) => ({ type: types.LOGIN, cb })
export const logout = (cb) => ({ type: types.LOGOUT, cb })
