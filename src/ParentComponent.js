import React, {useState} from 'react';


import ChildComponent from './ChildComponent';

function ParentComponent() {

  const [message , setMessage] = useState('Hello from parent')
  const ParentMethod = ()=>{
    setMessage("Button was clicked in Child!");
  }
  return (
    <div>
    <p>{message}</p>
    <ChildComponent onButtonClicked = {ParentMethod}/>
    </div>
  )
}

export default ParentComponent