import React from 'react'
import styled from 'styled-components'
import userImage from '../assets/User.svg'


export const UserImage = () => {
  return (
    <Image src={userImage} alt="user" />
  )
}

const Image = styled.img`
  width: 80px;
  display: block;
  margin: 0 auto 100px
`