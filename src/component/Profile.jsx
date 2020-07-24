import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from '@material-ui/core';
import profilephoto from "../profile1.png";
import Logo from "./Logo"
const useStyle = makeStyles({
    root: {
        float: 'left',
        width: 300
    }
});


export default function Profile() {
    const classes = useStyle;

    const onClickEditProfile = () => 
    {
        window.location.href = "/editprofile";
    };


    return (
        <div>
            <Logo></Logo>
            <div >
                <div>
                    <Button style={{ margin: 10, float: "right", width: 130, marginRight: 30, fontSize: 12 }} variant="contained" onClick={onClickEditProfile} >Edit Profile</Button>
                </div>
                <div>
                    <img className="profile-image" src={profilephoto}></img>
                    <div className="profile-info">
                        <br></br>
                        <div className="nickname">jeongmin</div>
                        <br></br><br></br>
                        <div className="intro">자기소개입니다 ٩(๑❛ᴗ❛๑)۶</div>
                    </div>
                </div>
            </div >

        </div >
    );

}
