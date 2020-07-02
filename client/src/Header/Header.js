import React from 'react'
import styled from 'styled-components'
import { Logout } from './Logout'
import { User } from './User'

export const Header = () => {
  return (
    <HeaderCard>
      <h3>ACQUIRE</h3>
      <div>
        <User />
        <Logout />
      </div>
    </HeaderCard>
  )
}

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 5%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 25px;
  color: white;
  background: linear-gradient(-177deg, rgb(76, 19, 235), rgb(15, 9, 90));
  background: rgb(76, 19, 200);
  
  h3 {
    /* background: rgb(253, 92, 92); */
    /* transform: skew(-15deg); */
    /* padding: 2px 5px; */
    color: white;
  }
`
