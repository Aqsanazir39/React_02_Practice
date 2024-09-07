import React from 'react'
import Student from './Student'

function Students() {
  // const students = ['Aqsa', 'Ali', 'Ayesha','Zain'];
  // let studentNames =  students.map((std, index) => <li key={index}>{std}</li>);
  // const numbers = [1,3,4,5,6];
  // const result = numbers.map(num  => <h1>{num * num }</h1>)

  const students = [
    {
      id: 1,
      name: "ali",
      age: 23
    },
    {
      id: 2,
      name: "musa",
      age: 24
    },
    {
      id: 3,
      name: "fahad",
      age: 25
    }
  ]
  return (
    <div>
{students.map(std => <Student key={std.id} std =  {std}/>)},


{/* {
 <ul>
{studentNames}
 </ul>
} */}

{/* {result} */}



    </div>
  )
}

export default Students