import React from 'react';
import './App.css';
import PropDrilling from './Components/PropDrilling';
import Perfumes from './Components/Perfumes';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <PropDrilling/>
      <Perfumes/>
      <Signup/> 
      <Login/>
    </div>
  );
}

export default App;
