import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { logout } from 'Store/Actions'

export const Logout = () => {
  const dispatch = useDispatch()

  return (
    <LogoutButton onClick={() => dispatch(logout())}>
      LOGOUT
    </LogoutButton>
  )
}

const LogoutButton = styled.button`
  border: 1px solid white;
  color: white;
  background: transparent;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  margin-left: 25px;
  transition: 0.3s;
  outline: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.2)
  }
`
