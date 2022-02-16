import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter((counter) => counter + 1);
  }
  return (
    <div>
      <button onClick={handleCounter}>count : {counter}</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
