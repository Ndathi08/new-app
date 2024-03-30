import React from 'react';
import './App.css';
import PropDrilling from './Components/PropDrilling';
import Perfumes from './Components/Perfumes';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { AuthProvider } from './Contexts/AuthContext';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <PropDrilling/>
      <Perfumes/>
      <Signup/> 
      <AuthProvider>
      <div>
      <Profile />
      <Login />
        
      </div>
    </AuthProvider>
    </div>
  );
}

export default App;
