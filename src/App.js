
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import USWithArray from './USWithArray';

function App() {
  const name = "Aqsa";
    
  // let conData;
  // if(name === "Aqsa"){
  // conData =  <Component1/>
    
     
  // }else{
  // conData = <Component2/>
  // }
  return(<>
{/* { conData } */}


{/* {name === "Aqsa" &&<h1>Hello Aqsa</h1>} */}

{name === "Aqsa" ? <Component1/> : <Component2/>}

{/* {age >= 18 ? <h1>You can vote</h1>: <h1> You cannot vote</h1>} */}
<USWithArray/>
  </>)
 
}

export default App;
