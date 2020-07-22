import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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


    return (
        <div>
            <Logo></Logo>
            <div >
                <img className="profile-image" src={profilephoto}></img>
                <div className="profile-info">
                    <br></br>
                    <div className="nickname">jeongmin</div>
                    <br></br><br></br>
                    <div className="intro">자기소개입니다ㅏㅏㅏㅏ</div>
                </div>
            </div>
            
        </div>
    );

}
