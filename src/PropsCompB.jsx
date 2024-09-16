import React from 'react'
import PropsCompC from './PropsCompC'
function PropsCompB(props) {
  console.log("Iam prop B " , props);
  
  return (
    <div>
<h1>My name is {props.name}</h1>
<h1>My age is {props.age}</h1>

<PropsCompC {...props}/>
<PropsCompC>
  <li>
    Pink
  </li>
  <li>
    White
  </li>
</PropsCompC>
    </div>
  )
}

export default PropsCompB