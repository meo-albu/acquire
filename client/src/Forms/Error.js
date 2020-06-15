import React from 'react'
import styled, {keyframes} from 'styled-components'

export const Error = (props) => {
  return (
    <ErrorText>
      {props.children}
    </ErrorText>
  )
}

const errorTextAnimation = keyframes`
  0% {transform: translateY(-30px)}
  100% {transform: translateY(-20px)}
`

const ErrorText = styled.span`
  font-size: 10px;
  color: #ef3b7d;
  position: absolute;
  left: auto;
  animation: ${errorTextAnimation} 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`