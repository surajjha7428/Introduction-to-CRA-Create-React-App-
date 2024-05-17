import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleClick2() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleClick3() {
    setCount(0);
  }

  return (
    <>
      <p>count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClick2}>Decrement</button>
      <button onClick={handleClick3}>Reset</button>
    </>
  );
}

export default App;