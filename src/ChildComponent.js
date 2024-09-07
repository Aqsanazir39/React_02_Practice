import React from 'react'

function ChildComponent({onButtonClicked}) {
  return (
    <div>
      <button onClick={onButtonClicked}>Click me!</button>
    </div>
  );
}

export default ChildComponent