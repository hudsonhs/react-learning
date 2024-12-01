import { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
// This will only +1 each time because even though setNumber triggers a re-render, that only
// happens at the end of the event handler cause it batches like that to help with performance.
// Then each time it's told to set number to whatever it was in the previous render +1, which
// Means it does 0 + 1, then 0 + 1, then 0 + 1 instead of incrementing.
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}

// Even though it's on a timer, this will always show what number was at the snapshot of when
// This was rendered.
export default function Counter() {
    const [number, setNumber] = useState(0);
  
    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            alert(number);
          }, 3000);
        }}>+5</button>
      </>
    )
  }
  