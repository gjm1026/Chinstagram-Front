import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./component/user/SignUp";
import LogIn from "./component/user/LogIn";
import Main from "./component/post/Main";
import PostView from "./component/post/PostView";
import { BrowserRouter, Route } from "react-router-dom";
import EditPost from "./component/post/EditPost";
import EditProfile from "./component/user/EditProfile";
import UploadPost from "./component/post/UploadPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/detail" component={PostView} />
        <Route exact path="/editpost" component={EditPost} />
        <Route exact path="/editprofile" component={EditProfile} />
        <Route exact path="/upload" component={UploadPost} />
      </BrowserRouter>
    </div>
  );
}

export default App;
