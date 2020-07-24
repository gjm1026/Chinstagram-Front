import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from "./component/SignUp";
import LogIn from "./component/LogIn";
import Main from "./component/Main";
import Logo from "./component/Logo";
import PostView from "./component/PostView"
import Profile from './component/Profile';
import { BrowserRouter, Route } from "react-router-dom";
import EditPost from './component/EditPost';
import DeletePost from './component/DeletePost';
import EditProfile from './component/EditProfile';
import UploadPost from './component/UploadPost';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/detail" component={PostView} />
        <Route exact path="/editpost" component={EditPost}/>
        <Route exact path="/editprofile" component={EditProfile}/>
        <Route exact path="/upload" component={UploadPost}/>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
