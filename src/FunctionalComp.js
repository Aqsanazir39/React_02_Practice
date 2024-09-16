
import { useState } from 'react'

function FunctionalComp() {

  const [count, setCount]= useState(0)

  let Increase = () =>{
setCount( count + 1)
  }
  let Decrease = () =>{
    setCount( count - 1)
  }
  return (
    <div>
   <h1>{count}</h1>
   <button type='button'onClick={Increase} >Increase</button>
<button type='button' onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default FunctionalComp