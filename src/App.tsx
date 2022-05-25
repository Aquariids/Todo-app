import React from 'react';
import './App.scss';
import Icons from './img/icons.svg';

function App() {
  console.log(Icons);
  
  return (
    <div className="App">
      <svg>
        <use href={`${Icons}#delete`}/>
      </svg>
    </div>
  );
}

export default App;
