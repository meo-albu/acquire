import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {login} from './Store/Actions'
import { Register } from './Forms/Register'
import { Login } from './Forms/Login'
import bg from './bg.jpg'

export const Home = () => {
  const [haveAccount, setHaveAccount] = useState(true)
  const dispatch = useDispatch()
  const history = useHistory()

  const loginUser = () => {
    dispatch(login(setTimeout(() => {
      history.push('/game')
    }, 100)))
  }

  return (
    <Flex>
      <Image />
      <div>
        { 
          haveAccount ? 
          <>
            <Login loginUser={loginUser} />
            <span>Don't have an account? Go to <Link onClick={() => setHaveAccount(!haveAccount)}>Register</Link> page</span>
          </>
          :
          <>
            <Register />
            <span>Allready have an account? Go to <Link onClick={() => setHaveAccount(!haveAccount)}>Login</Link> page</span>
          </>
        }
      </div>
    </Flex>
  ) 
}

const Image = styled.div`
  background-image: url(${bg});
  height: 100%;
  background-size: auto 100%;
  background-position: center top 55%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7)
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  &>* {
    flex: 1;
    padding: 10vh;
  }
`

const Link = styled.a`
  color: #1282A2;
  cursor: pointer;
`