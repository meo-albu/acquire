import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState('test')
  useEffect(() => {
    axios.get('http://localhost:8000/')
    .then((response) => {
      console.log(response)
      setName(response.data.name)
    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        {name}
      </header>
    </div>
  );
}

export default App;
