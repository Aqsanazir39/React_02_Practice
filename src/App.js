
import './App.css';
import CompA from './CompA';
import ParentComp from './ParentComp';
import PropsComA from './PropsComA';
// import ClassComp from './ClassComp';
// import Component1 from './Component1';
// import Component2 from './Component2';
// import FunctionalComp from './FunctionalComp';
// import UseEffect from './UseEffect';
// import USWithArray from './USWithArray';


function App() {
  // const name = "Aqsa";
    
  // let conData;
  // if(name === "Aqsa"){
  // conData =  <Component1/>
    
     
  // }else{
  // conData = <Component2/>
  // }
  return(<>
{/* { conData } */}


{/* {name === "Aqsa" &&<h1>Hello Aqsa</h1>} */}

{/* {name === "Aqsa" ? <Component1/> : <Component2/>} */}

{/* {age >= 18 ? <h1>You can vote</h1>: <h1> You cannot vote</h1>} */}
{/* <USWithArray/>
<ClassComp/>
<FunctionalComp/>
<UseEffect/> */}

<CompA/>
<PropsComA/>
<ParentComp/>
  </>)
 
}

export default App;
