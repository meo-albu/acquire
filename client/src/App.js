import React, { useEffect } from 'react'
import { Routes } from './Routes/Routes'
import './App.css'
import { Loader } from 'Loader/Loader'
import axios from './axios'
import { useDispatch } from 'react-redux'
import { loading, loaded } from 'Store/Actions'

const App = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token') && localStorage.getItem('token')}`
    }
  }
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token) {
      dispatch(loading())
      axios.get('/', config)
      .then(response => {
        setTimeout(() => {
          dispatch(loaded(response.data))
        }, 500)
      })
    }
  }, [config, dispatch, token])

  return (
    <div className="App">
        <header className="App-header">
        <Loader />
          <Routes />
        </header>
      </div>
  );
}

export default App;

