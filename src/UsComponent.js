import React, { useState } from 'react'

function UsComponent() {
  let [count, setCount] = useState(Boolean);
let changeState = ()=>{
setCount(count++);
};
  return (

    <div>
    <h1>{count}</h1>
      <button type='button' onClick={ changeState}> Click me </button>
    </div>
  )
}

export default UsComponent