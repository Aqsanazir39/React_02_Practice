import React, { useEffect, useState } from 'react'

function UseEffect() {
   const[count, setCount] = useState(0)
   let [name, setName] = useState('Ali')

 useEffect(()=>{
  console.log("Hello i am effect = " + count);
  
 }, [count])

 useEffect(()=>{
  console.log("Hello i am effect = " + name);
  
 }, [name])
  return (
    <div>
<h1>{count}</h1>
<h1>{name}</h1>
<button onClick={()=> setCount(count + 1)}>change Number</button>
<button onClick={()=> setName(name = "Waleed")}>change Name</button>


    </div>
  )
}

export default UseEffect