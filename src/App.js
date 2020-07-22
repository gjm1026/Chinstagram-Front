import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from "./component/SignUp";
import LogIn from "./component/LogIn";
import Main from "./component/Main";
import Logo from "./component/Logo";
import PostView from "./component/PostView"
import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
     
      <PostView></PostView>
      <Main></Main>

      <Signup></Signup>
      <LogIn></LogIn>
    </div>
  );
}

export default App;
