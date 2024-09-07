import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './BindingEvent';
import ClickFunction from './ClickFunction';
import Display from './BindingEvent';
import ParentComponent from './ParentComponent';
import Students from './Students';
import UsComponent from './UsComponent';
import USWithObject from './USWithObject';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div className='App'>
   <App />
    <ClickFunction name = "Hassan"/>
    <Counter/>
<Display initialValue={9}/>
<ParentComponent/>
<Students/>
<UsComponent/>
<USWithObject/>
 </div>
   
);


reportWebVitals();
