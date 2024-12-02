'use client'
import { useState } from 'react';

// Adds n => n + 1 to the queue 3 times after the rest of the code in the event handler has run, so increases it by 3
function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
          <h1>{number}</h1>
          <button onClick={() => {
            setNumber(n => n + 1);
            setNumber(n => n + 1);
            setNumber(n => n + 1);
          }}>+3</button>
        </>
    )
}
    
// Adds "replace number with number + 5" to the queue of stuff to happen after even handler has run
// Number in this case is 0
// Then adds the updater function to the queue
// Then the operations happen
// THen a re-render is triggered once the queue is empty
function Counter2() {
    const [number, setNumber] = useState(0);

    return (
        <>
          <h1>{number}</h1>
          <button onClick={() => {
            setNumber(number + 5)
            setNumber(n => n + 1);
          }}>Increase the counter</button>
        </>
    )
}
    
// Adds "replace number with number + 5" to the queue of stuff to happen after all the other fns in the event handler have run
// Number in this case is 0
// Then adds the updater function to the queue
// Then adds "set the number to 42" to the queue
// Then the queue is executed (after the other code in the event handler is done too)
// Then a re-render happens
function Counter3() {
    const [number, setNumber] = useState(0);

    return (
        <>
          <h1>{number}</h1>
          <button onClick={() => {
            setNumber(number + 5);
            setNumber(n => n + 1);
            setNumber(42);
          }}>Increase the counter</button>
        </>
    )
}
    
// Adds the updater function to the queue
// Then adds the number + 5 fn to the queue
// Number in this case is still 0, so it just sets number to 0 + 5
// Then does these things after all other fns are done in the event handler
// Then a re-render is triggered
export default function Counter4() {
    const [number, setNumber] = useState(0);

    return (
        <>
          <h1>{number}</h1>
          <button onClick={() => {
            setNumber(n => n + 1);
            setNumber(number + 5);
          }}>Increase the counter</button>
        </>
    )
}
