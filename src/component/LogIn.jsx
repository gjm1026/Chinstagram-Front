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

    return (
        <div style={{height:1200}}>
            <Logo></Logo>

            <div className="space"></div>
            <div className="item-align">

                <h2>Log In</h2>
                <div className="space"></div>
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
                <p>계정이 없으신가요?</p> <a style={{ color: "blue" }}>가입하기</a>
                <br></br>
                <Button style={{ margin: 10 }} variant="contained" color="primary">로그인</Button>
                <div className="space"></div>
            </div>
        </div>
    );

}
