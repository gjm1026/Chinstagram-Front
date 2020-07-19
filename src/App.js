import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from "./component/SignUp";
import LogIn from "./component/LogIn";

function App() {
  return (
    <div className="App">
      <Signup></Signup>
      <LogIn></LogIn>
    </div>
  );
}

export default App;
