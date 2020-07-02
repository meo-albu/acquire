import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const Loader = () => {
  const loader = useSelector(state => state.authReducer.isLoading)
  return (
    <LoaderDiv loader={loader}>
      <div>
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    </LoaderDiv>
  )
}

const LoaderDiv = styled.div`
  position: absolute;
  content: '';
  background: rgba(0, 0, 0, 0.84);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: ${({loader}) => loader ? 'block' : 'none'};

  &>div {
    width: 160px;
    height: 160px;
    position: absolute;
    top: calc(50% - 80px);
    left: calc(50% - 80px);

    .sk-cube {
      width: 33%;
      height: 33%;
      background-color: rgb(76, 19, 235);
      float: left;
      -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
              animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; 
    }
    .sk-cube1 {
      -webkit-animation-delay: 0.2s;
              animation-delay: 0.2s; }
    .sk-cube2 {
      -webkit-animation-delay: 0.3s;
              animation-delay: 0.3s; }
    .sk-cube3 {
      -webkit-animation-delay: 0.4s;
              animation-delay: 0.4s; }
    .sk-cube4 {
      -webkit-animation-delay: 0.1s;
              animation-delay: 0.1s; }
    .sk-cube5 {
      -webkit-animation-delay: 0.2s;
              animation-delay: 0.2s; }
    .sk-cube6 {
      -webkit-animation-delay: 0.3s;
              animation-delay: 0.3s; }
    .sk-cube7 {
      -webkit-animation-delay: 0s;
              animation-delay: 0s; }
    .sk-cube8 {
      -webkit-animation-delay: 0.1s;
              animation-delay: 0.1s; }
    .sk-cube9 {
      -webkit-animation-delay: 0.2s;
              animation-delay: 0.2s; }

  @-webkit-keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1); 
    }
  }

  @keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    } 
  }
}
`