// import React, { Component } from 'react'

// export default class BindingEvent extends Component {
//   constructor(){
//     super();
//     this.state={
//       name: "Ali Hassan"
//     }
//   }



//   render() {
//     return (
//       <div>
// <h1>{this.state}</h1>
//         <button type='button'>Click</button>
//       </div>
//     )
//   }
// }


// import React, { useState } from 'react';

// export default function Counter() {
//   // Declare a state variable 'count' and its setter function 'setCount'
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }



// 'use client';

// import { useState } from 'react';

// const Counter = () => {
//  const [count, setCount] = useState(0);

//  return (
//    <div className="flex items-center justify-center space-x-8 p-10">
//      <button
//        onClick={() => setCount(count - 1)}
//        className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded "
//      >
//        Decrement
//      </button>
//      <p className="text-4xl font-semibold text-gray-800">{count}</p>
//      <button
//        onClick={() => setCount(count + 1)}
//        className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded "
//      >
//        Increment
//      </button>
//    </div>
//  );
// };

// export default Counter;




import { useState } from 'react';
//initialValue is a prop use to set intial state of value
export default function Display({initialValue}){
  const [value , setValue] = useState(initialValue);
  return(
    <div>
      <p>Value: {value}</p>
      <button type='button' onClick={()=>setValue(value + 1)}>Increase</button>
    </div>
  )
}