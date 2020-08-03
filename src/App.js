import React from "react";
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
        <Route path="/user/login" component={LogIn} />
        <Route path="/user/signup" component={SignUp} />
        <Route path="/user/profile" component={EditProfile} />

        <Route path="/content/:id/edit" component={EditPost} />
        <Route path="/content/:id/upload" component={UploadPost} />
        <Route exact path="/content/:id" component={PostView} />
        <Route exact path="/content" component={Main} />

        <Route exact path="/" component={LogIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
