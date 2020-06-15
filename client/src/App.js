import React from 'react'
// import { useHistory } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'

// import {login, logout} from './Store/Actions'
import { Routes } from './Routes/Routes'
import './App.css'
import { Register } from './Forms/Register'
import { Login } from './Forms/Login'

const App = () => {
  
  // const dispatch = useDispatch()
  // const history = useHistory()
  // const auth = useSelector(state => state.authReducer)

  return (
      <div className="App">
        <header className="App-header">
            {/* {auth ? 
              <button onClick={() => dispatch(logout())}>logout</button>
              : 
              <button onClick={() => dispatch(login(history.push('/game')))}>login</button>
            } */}

          <Routes />
          <Register />

          LOGIN
          <hr />
          <Login />
        </header>
      </div>
  );
}

export default App;
