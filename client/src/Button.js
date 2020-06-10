import React from 'react'
import { useHistory } from 'react-router-dom'

function Button() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default Button