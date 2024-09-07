import React, { useState } from 'react'

function USWithObject() {
  const obj = {
    name: "Aqsa",
    age: 23,
    height: 5,
    isYoung: true
  }
  const [person , setPerson]=useState(obj);
  let changeState = ()=>{
    setPerson(previousState =>{
      return{
        ...previousState,
        name : "Waqia"
      }
    })
  }
  return (

    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>

      <button onClick={changeState}>Change</button>
    </div>
  )
}

export default USWithObject