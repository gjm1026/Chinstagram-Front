import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from '@material-ui/core';
import Logo from "./Logo"
import "./item.css"

const useStyle = makeStyles({
    text: {
        margin: 5,
        alignItems: "center",

    }
});


export default function LogIn() {
    const classes = useStyle;


    const onClickLogIn = () => 
    {
        window.location.href = "/main";
    };

      const onClickSignUp = () => 
      {
        window.location.href = "/signup";
      };

    return (
        <div style={{height:1200}}>
            <Logo></Logo>

            <div className="space"></div>
            <div className="item-align">

                <h2 style={{marginTop:50, marginBottom: 50}}>Log In ෆ</h2>
                <div>
                    <TextField
                        style={{ margin: 5, width: 250 }}
                        id="email-login"
                        label="이메일 또는 닉네임"
                        variant="outlined"
                    />
                </div>

                <div>
                    <TextField
                        style={{ margin: 5, width: 250 }}
                        id="password-login"
                        label="비밀번호"
                        type="password"
                        variant="outlined" />
                </div>
                <p style={{marginBottom:20}}>계정이 없으신가요?</p> <a style={{ color: "blue", marginBottom:30}} onClick={onClickSignUp}>가입하기</a><br></br>
                <Button style={{ margin: 10, marginTop:30 }} variant="contained" color="primary" onClick={onClickLogIn}>로그인</Button>
                <div className="space"></div>
            </div>
        </div>
    );

}
