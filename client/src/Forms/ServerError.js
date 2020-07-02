import React from 'react'
import { useSelector } from 'react-redux'
import { Error } from './Error'

export const ServerError = () => {
  const errorMessage = useSelector(state => state.authReducer.errorMessage)
  return (
    <Error>
      {errorMessage}
    </Error>
  )
}
