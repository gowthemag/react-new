import React, { useState } from 'react';
import './style.css';
import Counter from './components/Counter';
export default function App() {
  const [name, setName] = useState('None');
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  function handleName() {
    setName('old name');
  }
  function handleLogin() {
    setIsLoggedIn((l) => !l);
  }
  return (
    <div>
      {isLoggedIn ? <h1>Hello {name}!</h1> : 'guest'}

      <button onClick={handleLogin}>change Name</button>
      <p>Start editing to see some magic happen :)</p>

      <Counter />
    </div>
  );
}
