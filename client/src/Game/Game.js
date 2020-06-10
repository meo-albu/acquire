import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Game = () => {
  const [name, setName] = useState('test')
  useEffect(() => {
    axios.get('http://localhost:8000/')
    .then((response) => {
      console.log(response)
      setName(response.data.name)
    })
  }, [])

  return (
    <div>
      {name}
    </div>
  )
}
