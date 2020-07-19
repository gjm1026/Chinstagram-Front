import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from '@material-ui/core';
import profilephoto from "../profile1.png";

const useStyle = makeStyles({  
    root: {
        float : 'left',
        width : 300
    }
});
 

export default function LogIn() {
    const classes = useStyle;
    return (
        <>
            <div className={classes.root}>
            <img style ={{textAlign:'left'}} src={profilephoto}></img> 
            <p>jeongmin</p>
            <p>자기소개입니다ㅏㅏㅏㅏ</p>
            </div>
        </>
    );

}
