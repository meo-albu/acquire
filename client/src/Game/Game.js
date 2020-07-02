import React, { useEffect, useRef } from 'react'
import { Rules } from '../Rules/Rules';
import { Header } from '../Header/Header';
import styled from 'styled-components'

const conn = new WebSocket('ws://192.168.0.106:8080');

export const Game = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token') && localStorage.getItem('token')}`
    }
  }
  
  useEffect(() => {
    conn.onopen = () => {
      console.log("Connection established!");
    };
    
    conn.onmessage = msg => {
      console.log(msg)
    };
  }, [config])
  
  const isFirstTime = useRef(true)
  
  useEffect(() => {
    if(isFirstTime.current) {
      isFirstTime.current = false
      return
    }
    conn.send('hi')
  }, [])
  
  return (
    <div>
      <div className="bg">
      <Header></Header>
      <GameTable>
        <div className="testdiv">test</div>
        {/* <Rules /> */}
      </GameTable>
</div>
    </div>
  )
}

const GameTable = styled.div`
  padding: 15px 5%;
  display: flex;
  justify-content: space-between;
  height: 87vh;

  &>.testdiv{
    flex: 5;
  }

  @media only screen and (max-width: 1500px) {
    display: block;
  }
`