import React from 'react';
import { Button } from '@material-ui/core';
import profilephoto from "../../profile1.png"
import { Link } from 'react-router-dom';
import Logo from "../logo/Logo";
import "../item.css";

export default function Profile(props) {
  return (
    <div>
      <Logo></Logo>
      <div>
        <div>
          <Link to="/editprofile">
            <Button
              style={{
                margin: 10,
                float: "right",
                width: 130,
                marginRight: 30,
                fontSize: 12,
              }}
              variant="contained"
            >
              Edit Profile
            </Button>
          </Link>
        </div>
        <div>
          <img className="profile-image" src={profilephoto} alt='profilephoto'></img>
          <div className="profile-info">
            <br></br>
            <div className="nickname">jeongmin</div>
            <br></br>
            <br></br>
            <div className="intro">자기소개입니다 ٩(๑❛ᴗ❛๑)۶</div>
          </div>
        </div>
      </div>
    </div>
  );
}
