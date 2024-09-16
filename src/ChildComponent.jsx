import React from 'react'

function ChildComp({callMethod}) {
 console.log('I am passing Method as props');
 
  return (
    <div>
   <button onClick={()=>callMethod('Aqsa', 'Nazir')}>Call Me</button>
    </div>
  )
}

export default ChildComp