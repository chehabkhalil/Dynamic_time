import React from 'react';
import StaticTimer from "./time";
import Indication from "./indication";
import Button from "./Button"
import './App.css';
function App() {
  return (
    <div className="App">
     <StaticTimer start="7201"/>
     <Indication/>
 <div className="Buttons">
     <Button  name="Start"/>
     <Button  name="Reset"/>
    </div>
    </div>
  );
}

export default App;
